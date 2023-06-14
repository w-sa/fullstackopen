const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.addPhoneEntry}>
        <div>
          name:
          <input value={props.newName} onChange={props.nameChangeHandler} />
        </div>
        <div>
          number:
          <input value={props.newNumber} onChange={props.numberChangeHandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
