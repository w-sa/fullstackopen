import PhonebookEntry from "./PhonebookEntry";

const Phonebook = ({ persons }) => {
  return (
    <div>
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
