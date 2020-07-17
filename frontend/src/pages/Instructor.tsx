import React from "react";

interface OwnProps {
  instructorId: number;
}

type InstructorProps = OwnProps;

const Instructor = (props: InstructorProps) => {
  return (
    <div>
      <h1>You're viewing the page for instructor {props.instructorId}</h1>
    </div>
  );
};

export default Instructor;
