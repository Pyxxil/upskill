import React from "react";
import JohnSmith from "../assets/John Smith.jpg";
import "./Instructor.css";

import StarRatingComponent from "react-star-rating-component";

interface OwnProps {
  instructorId: number;
  name: string;
  stars: number;
  description: string;
  image: string;
}

type InstructorProps = OwnProps;

const Instructor = (props: InstructorProps) => {
  console.log(props.image === "../assets/John Smith.jpg");
  console.log(props.image);
  return (
    <div className="instructor-container">
      <img
        src={require("../assets/John Smith.jpg")}
        alt={props.name}
        className="profile"
      />
      {/* <img src={require(props.image)} alt={props.name} /> */}
      {/* <img src={JohnSmith} alt={props.name} /> */}
      <h1>{props.name}</h1>
      <StarRatingComponent
        name={"rating"}
        value={props.stars}
        editing={false}
      />
      <p className="link">View CV</p>
      <h2>Description</h2>
      {props.description.split("\\n").map((line: string) => {
        return <p>{line}</p>;
      })}
      {/* <p className="description">{props.description}</p> */}
      <p>You're viewing the page for instructor {props.instructorId}</p>
    </div>
  );
};

export default Instructor;
