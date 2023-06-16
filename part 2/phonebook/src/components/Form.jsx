const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.handleAddEntry}>
        <div>
          name:
          <input value={props.newName} onChange={props.onNameChange} />
        </div>
        <div>
          number:
          <input value={props.newNumber} onChange={props.onNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
