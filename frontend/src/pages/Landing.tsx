import React from "react";

import { Jumbotron, Button } from 'reactstrap';
import { InstructorCard, ClassCard } from '../components/Card';
import { Link } from "react-router-dom";

import testImage from "../assets/test.webp";

import './Landing.css'

const Landing = () => {
  return (
    <div>
      {/* <h1>Welcome to Upskill!</h1> */}
      <Jumbotron>
        <h1 className="display-3">Learn while networking in <br/> your local community </h1>
      </Jumbotron>
      <div className="pure-g">
        <div className="pure-u-1-1 featured-instructors">
          <div className="featured-container">
            <h2>Featured Instructors</h2>
            <Link to={'/instructors'}><Button className="button">More Instructors</Button></Link>
              <div className="card-container">
                <img className="size" src={require('../assets/left.png')}/>
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
                <img className="size" src={require('../assets/right.png')}/>
              </div>
          </div>
        </div>
        <div className="pure-u-1-1 featured-classes">
          <div className="featured-container">
            <h2>Featured Classes</h2>
            <Link to={'/classes'}><Button className="button">More Classes</Button></Link>
            <div className="card-container">
              <img className="size" src={require('../assets/left.png')}/>
              <ClassCard
              name="Blockchain"
              image={testImage}
              cost={15}
              description="An introduction to some blockchain basics"
              />
              <ClassCard
                name="Python 101"
                image={testImage}
                cost={10}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              />
              <ClassCard
                name="Python 101"
                image={testImage}
                cost={10}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              />
              <img className="size" src={require('../assets/right.png')}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
