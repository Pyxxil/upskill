import React from "react";

interface OwnProps {
  classId: number;
}

type BookProps = OwnProps;

const Book = (props: BookProps) => {
  return (
    <div>
      <h1>You have now successfully booked {props.classId}!</h1>
    </div>
  );
};

export default Book;
