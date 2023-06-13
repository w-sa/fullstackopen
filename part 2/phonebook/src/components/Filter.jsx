const Filter = ({ filterHandler }) => {
  return (
    <div>
      <div>
        filter: <input type="text" onChange={filterHandler} />
      </div>
    </div>
  );
};

export default Filter;
