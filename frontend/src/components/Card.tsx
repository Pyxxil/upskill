import React from "react";
import StarRatingComponent from "react-star-rating-component";

import { Link } from "react-router-dom";

import "./card.css";

interface InstructorCardProps {
  name: String;
  image: string;
  rating: number;
  description: String;
}

export const InstructorCard = (props: InstructorCardProps) => {
  return (
    <div className="card pure-u-7-24">
      <Link to={`/instructor/${props.name}`}>
        <div className="card-image">
          <img src={props.image} alt="card" />
        </div>
        <h1
          style={{
            textAlign: "center",
            color: "var(--background-colour)",
          }}
        >
          {props.name}
        </h1>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <StarRatingComponent
            name={"rating"}
            value={props.rating}
            editing={false}
          />
        </div>
        <div className="card-content">
          <p>{props.description}</p>
        </div>
      </Link>
    </div>
  );
};

interface ClassCardProps {
  name: String;
  instructor: String;
  image: string;
  cost: number;
  description: String;
}

export const ClassCard = (props: ClassCardProps) => {
  return (
    <Link to={`/class/${props.name}`} className="card pure-u-7-24">
      <div className="card-image">
        <img src={props.image} alt="card" />
      </div>
      <h1 className="card-title">{props.name}</h1>
      <div className="card-content">
        <p>{props.instructor}</p>
        <p>${props.cost}</p>
        <p>{props.description}</p>
      </div>
    </Link>
  );
};

interface RewardCardProps {
  name: String;
  image: string;
  cost: number;
  address: string;
  description: String;
}

export const RewardCard = (props: RewardCardProps) => {
  return (
    <Link to="#" className="card pure-u-7-24">
      <div className="card-image">
        <img src={props.image} alt="card" />
      </div>
      <h1 className="card-title">{props.name}</h1>
      <div className="card-content">
        <p>{props.cost}&#128176;</p>
        <p>{props.address}</p>
        <p>{props.description}</p>
      </div>
    </Link>
  );
};

interface ChallengeCardProps {
  name: String;
  image: string;
  instructor: string;
  description: String;
}

export const ChallengeCard = (props: ChallengeCardProps) => {
  return (
    <Link to={`/company-challenge/${props.name}`} className="card pure-u-7-24">
      <div className="card-image">
        <img src={props.image} alt="card" />
      </div>
      <h1 className="card-title">{props.name}</h1>
      <div className="card-content">
        <p>{props.instructor}</p>
        <p>{props.description}</p>
      </div>
    </Link>
  );
};
