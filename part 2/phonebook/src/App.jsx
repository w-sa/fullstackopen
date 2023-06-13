import { useState } from "react";
import Phonebook from "./components/Phonebook";
import Form from "./components/Form";
import Filter from "./components/Filter";

const App = () => {
  const DUMMY_DATA = [
    { id: 1, name: "Seba Jun", number: "0434534534" },
    { id: 2, name: "Daniel Dumile", number: "0434534534" },
    { id: 3, name: "Akira Kurosawa", number: "0434534534" },
    { id: 4, name: "Nelson Mandela", number: "0434534534" },
  ];

  const [persons, setPersons] = useState(DUMMY_DATA);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterBy, setFilterBy] = useState("");

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
      id: newName,
      name: newName,
      number: newNumber,
    };

    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
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
