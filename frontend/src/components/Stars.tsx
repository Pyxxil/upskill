import React from "react";

interface StarProps {
  value: number;
}

const Stars = (props: StarProps) => {
  return <div>Rating: {props.value}</div>;
};

export default Stars;
