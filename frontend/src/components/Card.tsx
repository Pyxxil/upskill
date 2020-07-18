import React from "react";

import "./card.css";

interface InstructorCardProps {
  name: String;
}

export const InstructorCard = (props: InstructorCardProps) => {
  return (
    <div className="card content pure-u-6-24">
      <div className="card-image">
        <h1 className="card-title pure-u-6-24">{props.name}</h1>
      </div>
      <div className="card-content">
        <p>This is some test content</p>
      </div>
    </div>
  );
};

interface ClassCardProps {
  name: String;
}

export const ClassCard = (props: ClassCardProps) => {
  return (
    <div className="card content pure-u-6-24">
      <div className="card-image">
        <h1 className="card-title pure-u-6-24">{props.name}</h1>
      </div>
      <div className="card-content">
        <p>This is some test content</p>
      </div>
    </div>
  );
};
