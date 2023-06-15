const PhonebookEntry = ({ id, name, number, deletePhoneEntry }) => {
  return (
    <li>
      {name} {number} <button onClick={() => deletePhoneEntry(id)}>Delete</button>
    </li>
  );
};

export default PhonebookEntry;
