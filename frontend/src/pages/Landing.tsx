import React from "react";

import { Jumbotron } from "reactstrap";
import { InstructorCard, ClassCard } from "../components/Card";
import { Link } from "react-router-dom";

import JoshHill from "../assets/profiles/Josh Hill.png";
import KimberleyEvansParker from "../assets/profiles/Kimberley Evans-Parker.jpg";
import HassaanMirza from "../assets/profiles/Hassaan Mirza.jpg";
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
        <div className="pure-u-1 featured-instructors">
          <div className="featured-container pure-u-1">
            <h2>Featured Instructors</h2>
            <Link to={"/instructors"}>
              <button className="pure-button">More Instructors</button>
            </Link>
            <div className="card-container pure-u-1">
              <img
                className="size pure-u-1-24"
                src={require("../assets/left.png")}
                alt="left arrow"
              />
              <InstructorCard
                name="Hassaan Mirza"
                image={HassaanMirza}
                rating={3}
                description="I am currently a final year student at the University of Auckland in Computer Systems Engineering. I am inspired by innovation and a desire to use my skills to improve the world around me. Well developed leadership and teamwork capabilities, through group projects, workplace, competitions, and personal projects. Made several projects both within university syllabus and out. Gained experience working in a professional manner from internship as well as prior customer service jobs. "
              />
              <InstructorCard
                name="Josh Hill"
                image={JoshHill}
                rating={5}
                description="I am a problem solver by nature, and programming is the main tool with which I solve problems. I am passionate about designing creative, and efficient, solutions to problems with code. "
              />
              <InstructorCard
                name="Kimberley E-P"
                image={KimberleyEvansParker}
                rating={4}
                description="I am a problem solver that loves to program. This has lead to a deep interest in robotics and a passion for coding and algorithms. I also enjoy design and I am good at coming up with creative solutions and work well in a team.
          I'm currently doing Computer Systems Engineering, conjoint with Science; Logic and Computation. During this I'm learning a range of programming languages, as well as logic, mathematics, proofs and electrical systems."
              />
              <img
                className="size pure-u-1-24"
                src={require("../assets/right.png")}
                alt="right arrow"
              />
            </div>
          </div>
        </div>
        <div className="pure-u-1 featured-classes">
          <div className="featured-container pure-u-1">
            <h2>Featured Classes</h2>
            <Link to={"/classes"}>
              <button className="pure-button">More Classes</button>
            </Link>
            <div className="card-container">
              <img
                className="size pure-u-1-24"
                src={require("../assets/left.png")}
                alt="left arrow"
              />
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
              <img
                className="size pure-u-1-24"
                src={require("../assets/right.png")}
                alt="right arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
