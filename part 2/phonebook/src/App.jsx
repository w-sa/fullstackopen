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

  const nameChangeHandler = (event) => {
    setNewName(event.target.value);
  };

  const numberChangeHandler = (event) => {
    setNewNumber(event.target.value);
  };

  const filterHandler = (event) => {
    const userInput = event.target.value.toLowerCase();
    setFilterBy(userInput);
  };

  const addPhoneEntry = (event) => {
    event.preventDefault();

    const nameExists = persons.some((person) => {
      return person.name === newName;
    });

    if (nameExists) {
      alert(`${newName} is already in the phonebook`);
      setNewName("");
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    peopleService.create(newPerson).then((data) => {
      setPersons(persons.concat(data));
      setNewName("");
      setNewNumber("");
    });
  };

  const displayedPersons = filterBy
    ? persons.filter((person) => person.name.toLowerCase().includes(filterBy))
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterHandler={filterHandler} />
      <h2>Add</h2>
      <Form
        newName={newName}
        newNumber={newNumber}
        addPhoneEntry={addPhoneEntry}
        nameChangeHandler={nameChangeHandler}
        numberChangeHandler={numberChangeHandler}
      />
      <h2>Numbers</h2>
      <Phonebook persons={displayedPersons} />
    </div>
  );
};

export default App;
