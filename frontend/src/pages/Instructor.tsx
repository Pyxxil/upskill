import React from "react";
import "./Instructor.css";
import { ClassCard, BadgeCard } from "../components/Card";

import StarRatingComponent from "react-star-rating-component";

import RyanTan from "../assets/profiles/Ryan Tan 2.png";
import binary from "../assets/classes/binary.jpg";
import blockchain from "../assets/classes/Blockchain.jpeg";
import networking from "../assets/classes/networking.jpg";
import purpleComputer from "../assets/classes/purple comp.jpg";
import idea from "../assets/classes/idea.jpg";
import neuralNetworks from "../assets/classes/rainbow brain.jpeg";
import centrality from "../assets/centrality.jpg";
import devs from "../assets/devs.png";

interface OwnProps {
  instructorId: number;
  name: string;
  stars: number;
  description: string;
}

type InstructorProps = OwnProps;

const Instructor = (props: InstructorProps) => {
  return (
    <>
      <div className="content">
        <h1>{props.name}</h1>
        <div>
          <img src={RyanTan} alt={props.name} className="profile" />
          <StarRatingComponent
            name={"rating"}
            value={props.stars}
            editing={false}
          />
          <p className="link">View CV</p>
        </div>
        <h2>Description</h2>
        {props.description.split("\\n").map((line: string) => {
          return <p>{line}</p>;
        })}
      </div>
      <div>
        <h2>Available Classes</h2>
        <ClassCard
          name="Blockchain"
          instructor="Ryan Tan"
          image={blockchain}
          cost={40}
          description="This specialization introduces blockchain, a revolutionary technology that enables peer-to-peer transfer of digital assets without any intermediaries, and is predicted to be just as impactful as the Internet. "
        />
        <ClassCard
          name="Networking"
          instructor="Ryan Tan"
          image={networking}
          cost={35}
          description="Learn how computers network, while networking with networkers.
          During this course, you will learn the fundamentals of modern networking technologies and protocols.  "
        />
        <ClassCard
          name="Neural Networks"
          instructor="Ryan Tan"
          image={neuralNetworks}
          cost={30}
          description="Deep learning engineers are highly sought after, and mastering deep learning will give you numerous new career opportunities.
          This course will teach you how to to build, train and apply deep neural networks."
        />
        <h2>Classes I've taken</h2>
        <ClassCard
          name="Binary"
          instructor="Josh Hill"
          image={binary}
          cost={25}
          description="An introduction to binary and how it is used in a computer.
          You'll learn how there are 10 kinds of people in this world; those who understand binary, those who don't, and those who fall prey to off by one errors."
        />
        <ClassCard
          name="Start Up"
          instructor="Terence Qu"
          image={idea}
          cost={25}
          description="Learn how to create your own start up!
          In a world where jobs are scarce, learn how to create your own!"
        />
        <ClassCard
          name="Machine Learning"
          instructor="Hassaan Mirza"
          image={purpleComputer}
          cost={27.5}
          description="Machine learning has given us self-driving cars, practical speech recognition, effective web search, and a vastly improved understanding of the human genome.
          Many think it is the best way to make progress towards human-level AI."
        />
        <h2>Badges</h2>
        <BadgeCard
          name="First Place!"
          image={centrality}
          challenge="Super Hard Challenge"
          description="Got first place out of everyone!"
        />
        <BadgeCard
          name="Participation"
          image={devs}
          challenge="48 Hour Hackathon"
          description="Got first place out of everyone!"
        />
        <h2>Endorsements</h2>
        <p className="centered">
          "One of my best students." - David Tennant 19/07/2020
        </p>
        <p className="centered">
          "Completely unbelievable! One of the best teachers I've seen, explains
          things really well" - Terence Qu
        </p>
      </div>
    </>
  );
};

export default Instructor;
