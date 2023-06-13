const Part = ({ name, exercises }) => {
  return (
    <li>
      <h4>{name}</h4>
      <p>Exercises: {exercises}</p>
    </li>
  );
};

export default Part;
