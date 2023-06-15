import PhonebookEntry from "./PhonebookEntry";

const Phonebook = ({ persons, deletePhoneEntry }) => {
  return (
    <div>
      <ol>
        {persons.map((person) => (
          <PhonebookEntry
            key={person.id}
            id={person.id}
            name={person.name}
            number={person.number}
            deletePhoneEntry={deletePhoneEntry}
          />
        ))}
      </ol>
    </div>
  );
};

export default Phonebook;
