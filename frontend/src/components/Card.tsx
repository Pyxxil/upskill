import React from "react";

import Stars from "./Stars";
import StarRatingComponent from "react-star-rating-component";

import "./card.css";
import { Link } from "react-router-dom";

interface InstructorCardProps {
  name: String;
  image: string;
  rating: number;
  description: String;
}

export const InstructorCard = (props: InstructorCardProps) => {
  return (
    <Link
      to={`/instructor/${props.name}`}
      className="card content pure-u-6-24"
      onClick={() => null}
    >
      <div className="card-image">
        <img src={props.image} />
      </div>
      <div className="card-content">
        <h1>{props.name}</h1>
        {/* <Stars value={props.rating} /> */}
        <StarRatingComponent
          name={"rating"}
          value={props.rating}
          editing={false}
        />
        <p>{props.description}</p>
      </div>
    </Link>
  );
};

interface ClassCardProps {
  name: String;
  image: string;
  cost: number;
  description: String;
}

export const ClassCard = (props: ClassCardProps) => {
  return (
    <Link to={`/class/${props.name}`} className="card content pure-u-6-24">
      <div className="card-image">
        <img src={props.image} />
      </div>
      <h1 className="card-title pure-u-6-24">{props.name}</h1>
      <div className="card-content">
        <p>${props.cost}</p>
        <p>{props.description}</p>
      </div>
    </Link>
  );
};