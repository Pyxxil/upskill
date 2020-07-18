import React from "react";
import { Link } from "react-router-dom";

interface OwnProps {
  name: String;
  instructor: String;
  price: number;
  description: String;
}

type ClassProps = OwnProps;

const Class = (props: ClassProps) => {
  return (
    <div className="content">
      <h1>{props.name}</h1>

      <p>Taught by {props.instructor}</p>

      <p>Price: ${props.price}</p>

      <Link to={`/book/${props.name}`}>Book Now!</Link>

      <p>{props.description}</p>
    </div>
  );
};

export default Class;
