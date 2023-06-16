import { useState, useEffect } from "react";
import "./index.css";
import Phonebook from "./components/Phonebook";
import Form from "./components/Form";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import peopleService from "./services/people";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [notification, setNotification] = useState({
    message: null,
    className: null,
  });

  useEffect(() => {
    peopleService.getAll().then((data) => {
      setPersons(data);
    });
  }, []);

  const isPhoneEntry = () => {
    return persons.some((person) => person.name === newName);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    const userInput = event.target.value.toLowerCase();
    setFilterBy(userInput);
  };

  const handleAddEntry = (event) => {
    event.preventDefault();

    isPhoneEntry() ? updatePhoneEntry() : addPhoneEntry();

    clearNameNumberStates();
  };

  const clearNameNumberStates = () => {
    setNewName("");
    setNewNumber("");
  };

  const createNotification = (notificationObject) => {
    setNotification({ ...notificationObject });
    setTimeout(() => {
      setNotification({ message: null, className: null });
    }, 5000);
  };

  const addPhoneEntry = () => {
    const newPerson = {
      name: newName,
      number: newNumber,
    };

    peopleService.create(newPerson).then((data) => {
      setPersons(persons.concat(data));
    });

    const successNotification = {
      message: `${newPerson.name} was successfully added.`,
      className: "success",
    };

    createNotification(successNotification);
  };

  const updatePhoneEntry = () => {
    const promptString = `${newName} is already added to the phonebook, replace the old number with a new one?`;

    if (window.confirm(promptString)) {
      const person = persons.find((person) => person.name === newName);
      const id = person.id;
      const updatedPerson = { ...person, number: newNumber };

      peopleService
        .update(id, updatedPerson)
        .then((returnedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id !== id ? person : returnedPerson
            )
          );
        })
        .catch((error) => {
          const errorNotification = {
            message: `Something went wrong.`,
            className: "error",
          };
          createNotification(errorNotification);
          return;
        });

      const updateNotification = {
        message: `${person.name} was successfully updated.`,
        className: "success",
      };

      createNotification(updateNotification);

      return;
    }

    alert(`${newName} is already in the phonebook`);
  };

  const deletePhoneEntry = (id) => {
    const person = persons.find((person) => person.id === id).name;
    const notificationName = person;
    const confirmMessage = `Do you really want to remove ${person} from your phonebook?`;

    if (window.confirm(confirmMessage)) {
      peopleService.remove(id).then(() => {
        peopleService.getAll().then((data) => {
          setPersons(data);
        });
      });
    }

    const deleteNotification = {
      message: `${notificationName} was successfully deleted.`,
      className: "success",
    };

    createNotification(deleteNotification);
  };

  const displayedPersons = filterBy
    ? persons.filter((person) => person.name.toLowerCase().includes(filterBy))
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <Filter handleFilter={handleFilter} />
      <h2>Add</h2>
      <Form
        newName={newName}
        newNumber={newNumber}
        handleAddEntry={handleAddEntry}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Phonebook
        persons={displayedPersons}
        deletePhoneEntry={deletePhoneEntry}
      />
    </div>
  );
};

export default App;
