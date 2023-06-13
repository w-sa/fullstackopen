const CourseTotal = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);

  return <p>Total of {totalExercises} exercises</p>;
};

export default CourseTotal;
