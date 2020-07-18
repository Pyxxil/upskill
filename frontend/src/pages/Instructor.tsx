import React from "react";
import JohnSmith from "../assets/John Smith.jpg";
import "./Instructor.css";
import { ClassCard } from "../components/Card";

import StarRatingComponent from "react-star-rating-component";

import testImage from "../assets/test.webp";

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
        src={require("../assets/profiles/John Smith.jpg")}
        alt={props.name}
        className="profile"
      />
      {/* <img src={require(props.image)} alt={props.name} /> */}
      {/* <img src={JohnSmith} alt={props.name} /> */}
      <h1 className="instructor-heading">{props.name}</h1>
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
      <h2>Available Classes</h2>
      <ClassCard
        name="Physics"
        image={testImage}
        cost={20}
        description="Come and learn Physics!"
      />
      <ClassCard
        name="Blockchain"
        image={testImage}
        cost={30}
        description="Come and learn blockchain!"
      />
      <ClassCard
        name="Start up"
        image={testImage}
        cost={25}
        description="Come and learn how to make a great start up!"
      />
      <h2>Classes I've taken</h2>
      <ClassCard
        name="Linguistics"
        image={testImage}
        cost={40}
        description="Learn a new language!"
      />
      <ClassCard
        name="4 Dimensions"
        image={testImage}
        cost={30}
        description="Come and learn how bigger on the inside is possible with a fourth dimension!"
      />
      <ClassCard
        name="Parallel Universe"
        image={testImage}
        cost={25}
        description="Do they exist? Discuss theories on how travelling accross parallel universes is possible."
      />
      <p>You're viewing the page for instructor {props.instructorId}</p>
    </div>
  );
};

export default Instructor;
