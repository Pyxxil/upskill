import React from "react";

import { ClassCard } from "../components/Card";

import testImage from "../assets/test.webp";

const Classes = () => {
  return (
    <div>
      <h1>Here's a list of our classes</h1>
      <ClassCard
        name="Blockchain"
        image={testImage}
        cost={15}
        description="An introduction to some blockchain basics"
      ></ClassCard>
      <ClassCard
        name="Python 101"
        image={testImage}
        cost={10}
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      ></ClassCard>
    </div>
  );
};

export default Classes;
