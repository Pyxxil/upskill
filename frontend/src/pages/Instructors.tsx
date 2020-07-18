import React from "react";

import { InstructorCard } from "../components/Card";

import JohnSmith from "../assets/profiles/John Smith.jpg";
import JoshHill from "../assets/profiles/Josh Hill.jpg";
import KimberleyEvansParker from "../assets/profiles/Kimberley Evans-Parker.jpg";
import SunnyFeng from "../assets/profiles/Sunny Feng.jpg";
import RyanTan from "../assets/profiles/Ryan Tan.png";

const Instructors = () => {
  return (
    <div>
      <h1>Here's a list of our instructors</h1>
      <InstructorCard
        name="John Smith"
        image={JohnSmith}
        rating={3}
        description="I am a doctor that teaches Physics.  
        This is one corner… of one country, in one continent, on one planet that’s a corner of a galaxy that’s a corner of a universe that is forever growing and shrinking and creating and destroying and never remaining the same for a single millisecond. And there is so much, so much to see.\n
        The world is vast and there's so much to explore, so much to see and so much to learn...
        Where do you want to start?"
      />
      <InstructorCard
        name="Josh Hill"
        image={JoshHill}
        rating={3}
        description="I am a problem solver by nature, and programming is the main tool with which I solve problems. I am passionate about designing creative, and efficient, solutions to problems with code. "
      />
      <InstructorCard
        name="Kimberley Evans-Parker"
        image={KimberleyEvansParker}
        rating={3}
        description="I am a problem solver that loves to program. This has lead to a deep interest in robotics and a passion for coding and algorithms. I also enjoy design and I am good at coming up with creative solutions and work well in a team.

        I'm currently doing Computer Systems Engineering, conjoint with Science; Logic and Computation. During this I'm learning a range of programming languages, as well as logic, mathematics, proofs and electrical systems."
      />
      <InstructorCard
        name="Ryan Tan"
        image={RyanTan}
        rating={3}
        description="As a newcomer in computer science and programming, I try to learn about the domain as much as I can to make up for lost time. The following quote inspired me to learn, grow and fail quickly - 'It's hard to achieve greatness by constantly looking back. It's constant forward hyper momentum' - Robert Herjavec."
      />
      <InstructorCard
        name="Sunny Feng"
        image={SunnyFeng}
        rating={3}
        description="I'm a Computer Science student who also has a passion for design!"
      />
    </div>
  );
};

export default Instructors;
