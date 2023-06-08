const Total = (props) => {
  let sumExercises = props.parts.reduce((acc, part) => {
    return acc + part.exercises;
  }, 0);

  return <p>Number of exercises {sumExercises}</p>;
};

export default Total;
