import React from "react";

interface OwnProps {
  courseId: number;
}

type BookProps = OwnProps;

const Book = (props: BookProps) => {
  return (
    <div>
      <h1>You're trying to book time for course {props.courseId}</h1>
    </div>
  );
};

export default Book;
