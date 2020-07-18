import React from "react";

import { ChallengeCard } from "../components/Card";

import devsImage from "../assets/devs.png";

const CompanyChallenges = () => {
  return (
    <div>
      <h1>Here's a list of our challenges.</h1>
      <ChallengeCard
        name="Super Hard Challenge"
        image={devsImage}
        instructor="DEVS"
        description="This is a super hard challenge."
      ></ChallengeCard>
    </div>
  );
};

export default CompanyChallenges;
