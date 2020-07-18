import React from "react";

import { Jumbotron, Button } from "reactstrap";
import { InstructorCard, ClassCard } from "../components/Card";
import { Link } from "react-router-dom";

import testImage from "../assets/test.webp";
import AI from "../assets/classes/AI.jpeg";
import binary from "../assets/classes/binary.jpg";
import blockchain from "../assets/classes/Blockchain.jpeg";

import "./Landing.css";

const Landing = () => {
  return (
    <div>
      {/* <h1>Welcome to Upskill!</h1> */}
      <Jumbotron>
        <h1 className="display-3">
          Learn while networking in <br /> your local community{" "}
        </h1>
      </Jumbotron>
      <div className="pure-g">
        <div className="pure-u-1-1 featured-instructors">
          <div className="featured-container">
            <h2>Featured Instructors</h2>
            <Link to={"/instructors"}>
              <Button className="button">More Instructors</Button>
            </Link>
            <div className="card-container">
              <img className="size" src={require("../assets/left.png")} />
              <InstructorCard
                name="John Smith"
                image={testImage}
                rating={3}
                description="I am John Smith"
              />
              <InstructorCard
                name="John Smith"
                image={testImage}
                rating={3}
                description="I am John Smith"
              />
              <InstructorCard
                name="John Smith"
                image={testImage}
                rating={3}
                description="I am John Smith"
              />
              <img className="size" src={require("../assets/right.png")} />
            </div>
          </div>
        </div>
        <div className="pure-u-1-1 featured-classes">
          <div className="featured-container">
            <h2>Featured Classes</h2>
            <Link to={"/classes"}>
              <Button className="button">More Classes</Button>
            </Link>
            <div className="card-container">
              <img className="size" src={require("../assets/left.png")} />
              <ClassCard
                name="Blockchain"
                instructor="Ryan Tan"
                image={blockchain}
                cost={40}
                description="This specialization introduces blockchain, a revolutionary technology that enables peer-to-peer transfer of digital assets without any intermediaries, and is predicted to be just as impactful as the Internet. "
              />
              <ClassCard
                name="Binary"
                instructor="Josh Hill"
                image={binary}
                cost={25}
                description="An introduction to binary and how it is used in a computer. 
                  You'll learn how there are 10 kinds of people in this world; those who understand binary, those who don't, and those who fall prey to off by one errors."
              />
              <ClassCard
                name="Artificial Intelligence"
                instructor="Sunny Feng"
                image={AI}
                cost={30}
                description="Learn the powers and dangers of AI and where it can take you. 
                  Additionally, this classcovers opportunities for AI, as well as ethical concerns surounding AI.  "
              />
              <img className="size" src={require("../assets/right.png")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
