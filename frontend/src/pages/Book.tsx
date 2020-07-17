import React from "react";

interface OwnProps {
  classId: number;
}

type BookProps = OwnProps;

const Book = (props: BookProps) => {
  return (
    <div>
      <h1>You're trying to book time for class {props.classId}</h1>
    </div>
  );
};

export default Book;
