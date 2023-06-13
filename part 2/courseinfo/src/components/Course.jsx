import Content from "./Content";
import CourseTotal from "./CourseTotal";
import Header from "./Header";

const Course = ({ course: { id, name, parts } }) => {
  return (
    <div key={id}>
      <Header name={name} />
      <Content parts={parts} />
      <CourseTotal parts={parts} />
    </div>
  );
};

export default Course;
