import React from "react";

interface OwnProps {
  classId: number;
}

type ClassProps = OwnProps;

const Class = (props: ClassProps) => {
  return (
    <div>
      <h1>You're viewing the details for class {props.classId}</h1>
    </div>
  );
};

export default Class;
