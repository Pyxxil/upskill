import React from "react";
import { Link } from "react-router-dom";
import Blockchain from "../assets/classes/Blockchain.jpeg";

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
      <img src={Blockchain} alt="Blockchain" className="class-image" />

      <p>
        Instructor: <strong>{props.instructor}</strong>
      </p>

      <p>
        Price: <strong>${props.price}</strong>
      </p>
      <p>
        Time: <strong>1pm-2pm</strong>
      </p>

      <Link to={`/book/${props.name}`}>Book Now!</Link>

      <p>{props.description}</p>
    </div>
  );
};

export default Class;
