import React from "react";

interface OwnProps {
  courseId: number;
}

type CourseProps = OwnProps;

const Course = (props: CourseProps) => {
  console.log(props);
  return (
    <div>
      <h1>You're viewing the details for course {props.courseId}</h1>
    </div>
  );
};

export default Course;
