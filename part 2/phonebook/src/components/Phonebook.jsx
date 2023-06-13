import PhonebookEntry from "./PhonebookEntry";

const Phonebook = ({ persons }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ol>
        {persons.map((person) => (
          <PhonebookEntry
            key={person.id}
            name={person.name}
            number={person.number}
          />
        ))}
      </ol>
    </div>
  );
};

export default Phonebook;
