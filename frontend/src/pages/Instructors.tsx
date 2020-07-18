import React from "react";

import { InstructorCard } from "../components/Card";

import testImage from "../assets/test.webp";

const Instructors = () => {
  return (
    <div>
      <h1>Here's a list of our instructors</h1>
      <InstructorCard
        name="John Smith"
        image={testImage}
        rating={3}
        description="I am John Smith"
      />
    </div>
  );
};

export default Instructors;
