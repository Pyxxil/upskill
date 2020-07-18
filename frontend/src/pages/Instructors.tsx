import React from "react";

import { InstructorCard } from "../components/Card";

import RyanTan from "../assets/profiles/Ryan Tan.png";
import JoshHill from "../assets/profiles/Josh Hill.jpg";
import KimberleyEvansParker from "../assets/profiles/Kimberley Evans-Parker.jpg";
import SunnyFeng from "../assets/profiles/Sunny Feng.jpg";
import HassaanMirza from "../assets/profiles/Hassaan Mirza.jpg";
import TerrenceQu from "../assets/profiles/Terrence Qu.jpg";

const Instructors = () => {
  return (
    <div>
      <h1>Here's a list of our instructors</h1>
      <InstructorCard
        name="Ryan Tan"
        image={RyanTan}
        rating={4}
        description="As a newcomer in computer science and programming, I try to learn about the domain as much as I can to make up for lost time. The following quote inspired me to learn, grow and fail quickly - 'It's hard to achieve greatness by constantly looking back. It's constant forward hyper momentum' - Robert Herjavec."
      />
      <InstructorCard
        name="Josh Hill"
        image={JoshHill}
        rating={5}
        description="I am a problem solver by nature, and programming is the main tool with which I solve problems. I am passionate about designing creative, and efficient, solutions to problems with code. "
      />
      <InstructorCard
        name="Kimberley Evans-Parker"
        image={KimberleyEvansParker}
        rating={4}
        description="I am a problem solver that loves to program. This has lead to a deep interest in robotics and a passion for coding and algorithms. I also enjoy design and I am good at coming up with creative solutions and work well in a team.
          I'm currently doing Computer Systems Engineering, conjoint with Science; Logic and Computation. During this I'm learning a range of programming languages, as well as logic, mathematics, proofs and electrical systems."
      />
      <InstructorCard
        name="Sunny Feng"
        image={SunnyFeng}
        rating={5}
        description="I'm a Computer Science student who also has a passion for design!"
      />
      <InstructorCard
        name="Hassaan Mirza"
        image={HassaanMirza}
        rating={3}
        description="I am currently a final year student at the University of Auckland in Computer Systems Engineering. I am inspired by innovation and a desire to use my skills to improve the world around me. Well developed leadership and teamwork capabilities, through group projects, workplace, competitions, and personal projects. Made several projects both within university syllabus and out. Gained experience working in a professional manner from internship as well as prior customer service jobs. "
      />
      <InstructorCard
        name="Terrence Qu"
        image={TerrenceQu}
        rating={3}
        description=""
      />
    </div>
  );
};

export default Instructors;
