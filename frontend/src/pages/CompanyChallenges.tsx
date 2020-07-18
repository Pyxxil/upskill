import React from "react";

import { ChallengeCard } from "../components/Card";

import devsImage from "../assets/devs.png";
import potentiaImage from "../assets/potentia.png";
import centralityImage from "../assets/centrality.jpg";

const CompanyChallenges = () => {
    return (
        <div>
            <h1>Here's a list of our challenges.</h1>
            <ChallengeCard
                name="48 Hour Challenge"
                image={devsImage}
                instructor="DEVS"
                description="This is a super hard challenge."
            ></ChallengeCard>
            <ChallengeCard
                name="Potentia Challenge"
                image={potentiaImage}
                instructor="Potentia"
                description="This is an extra hard challenge."
            ></ChallengeCard>
            <ChallengeCard
                name="Centrality Challenge"
                image={centralityImage}
                instructor="Centrality"
                description="This is an extra hard challenge."
            ></ChallengeCard>
        </div>
    );
};

export default CompanyChallenges;
