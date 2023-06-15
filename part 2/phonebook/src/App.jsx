import { useState, useEffect } from "react";
import axios from "axios";
import Phonebook from "./components/Phonebook";
import Form from "./components/Form";
import Filter from "./components/Filter";
import peopleService from "./services/people";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterBy, setFilterBy] = useState("");

  useEffect(() => {
    peopleService.getAll().then((data) => {
      setPersons(data);
    });
  }, []);

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

  const clearNameNumberStates = () => {
    setNewName("");
    setNewNumber("");
  };

  const updatePhoneEntry = () => {
    const person = persons.find((person) => person.name === newName);
    const id = person.id;
    const updatedPerson = { ...person, number: newNumber };

    peopleService.update(id, updatedPerson).then((returnedPerson) => {
      setPersons(
        persons.map((person) => (person.id !== id ? person : returnedPerson))
      );
    });

    clearNameNumberStates();
  };

  const addPhoneEntry = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    const nameExists = persons.some((person) => {
      return person.name === newName;
    });

    if (nameExists) {
      const promptString = `${newName} is already added to the phonebook, replace the old number with a new one?`;

      if (window.confirm(promptString)) {
        updatePhoneEntry();
      } else {
        alert(`${newName} is already in the phonebook`);
      }
    } else {
      peopleService.create(newPerson).then((data) => {
        setPersons(persons.concat(data));
      });
    }

    clearNameNumberStates();
  };

  const deletePhoneEntry = (id) => {
    const person = persons.find((person) => person.id === id).name;
    const confirmMessage = `Do you really want to remove ${person} from your phonebook?`;

    if (window.confirm(confirmMessage)) {
      peopleService.remove(id).then(() => {
        peopleService.getAll().then((data) => {
          setPersons(data);
        });
      });
    }
  };

  const displayedPersons = filterBy
    ? persons.filter((person) => person.name.toLowerCase().includes(filterBy))
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <h2>Add</h2>
      <Form
        newName={newName}
        newNumber={newNumber}
        addPhoneEntry={addPhoneEntry}
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
