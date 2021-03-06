import React from "react";

import { ClassCard } from "../components/Card";

import AI from "../assets/classes/AI.jpeg";
import binary from "../assets/classes/binary.jpg";
import blockchain from "../assets/classes/Blockchain.jpeg";
import networking from "../assets/classes/networking.jpg";
import money from "../assets/classes/money.jpg";
import ICT from "../assets/classes/ICT.jpg";
import purpleComputer from "../assets/classes/purple comp.jpg";
import idea from "../assets/classes/idea.jpg";
import neuralNetworks from "../assets/classes/rainbow brain.jpeg";

const Classes = () => {
  return (
    <>
      <div className="content">
        <h1
          style={{
            margin: "1em",
            textAlign: "center",
            backgroundColor: "var(--text)",
            color: "var(--background-colour)",
          }}
        >
          Available Classes
        </h1>

        <form className="pure-form centered" style={{ paddingBottom: "1em" }}>
          <input
            type="search"
            id="search"
            placeholder="Search"
            className="pure-u-15-24"
          />
          <label htmlFor="sorting" style={{ padding: "0 1em" }}>
            Sort By:
          </label>
          <select id="sorting">
            <option>Class Name</option>
            <option>Instructor Name</option>
            <option>Price</option>
          </select>
          <label htmlFor="filtering" style={{ padding: "0 1em" }}>
            Filter:
          </label>
          <select id="filtering">
            <option>None</option>
            <option>Instructor Name</option>
            <option>Price</option>
          </select>
        </form>
      </div>
      <ClassCard
        name="Artificial Intelligence"
        instructor="Sunny Feng"
        image={AI}
        time="1pm-2pm"
        cost={30}
        description="Learn the powers and dangers of AI and where it can take you.
        Additionally, this classcovers opportunities for AI, as well as ethical concerns surounding AI.  "
      />
      <ClassCard
        name="Binary"
        instructor="Josh Hill"
        image={binary}
        time="3pm-4pm"
        cost={25}
        description="An introduction to binary and how it is used in a computer.
          You'll learn how there are 10 kinds of people in this world; those who understand binary, those who don't, and those who fall prey to off by one errors."
      />
      <ClassCard
        name="Blockchain"
        instructor="Ryan Tan"
        image={blockchain}
        time="1pm-2pm"
        cost={40}
        description="This specialization introduces blockchain, a revolutionary technology that enables peer-to-peer transfer of digital assets without any intermediaries, and is predicted to be just as impactful as the Internet. "
      />
      <ClassCard
        name="FPGAs"
        instructor="Hassaan Mirza"
        image={ICT}
        time="3pm-4pm"
        cost={25}
        description="Do you want to learn how to describe hardware?
          Want to be able to perform cool memory and interupt based projects on a programable logic device?
          Learning how to use FPGAs is the way forward for you!"
      />
      <ClassCard
        name="Machine Learning"
        instructor="Hassaan Mirza"
        image={purpleComputer}
        time="10am-11am"
        cost={27.5}
        description="Machine learning has given us self-driving cars, practical speech recognition, effective web search, and a vastly improved understanding of the human genome.
          Many think it is the best way to make progress towards human-level AI."
      />
      <ClassCard
        name="Money making"
        instructor="Kimberley Evans-Parker"
        image={money}
        time="11am-12pm"
        cost={25}
        description="Do you want your coding to convert into currency?
          Learn how programming can earn you money.
          Whether through corporate coding, high frequency trading or selling your code for cash, you will learn the way to the dollar here!"
      />
      <ClassCard
        name="Networking"
        instructor="Ryan Tan"
        image={networking}
        time="2pm-3pm"
        cost={35}
        description="Learn how computers network, while networking with networkers.
          During this course, you will learn the fundamentals of modern networking technologies and protocols.  "
      />
      <ClassCard
        name="Neural Networks"
        instructor="Ryan Tan"
        image={neuralNetworks}
        time="1pm-2pm"
        cost={30}
        description="Deep learning engineers are highly sought after, and mastering deep learning will give you numerous new career opportunities.
          This course will teach you how to to build, train and apply deep neural networks."
      />
      <ClassCard
        name="Start Up"
        instructor="Terence Qu"
        image={idea}
        time="4pm-5pm"
        cost={25}
        description="Learn how to create your own start up!
          In a world where jobs are scarce, learn how to create your own!"
      />
    </>
  );
};

export default Classes;
