import React from "react";
import { Link } from "react-router-dom";

interface OwnProps {
    challengeId: String;
    name: String;
    company: String;
    description: String;
}

type CompanyChallengeProps = OwnProps;

const CompanyChallenge = (props: CompanyChallengeProps) => {
    return (
        <div className="content">
            <h1>{props.name}</h1>

            <p>Posted by {props.company}</p>

            <p>{props.description}</p>
        </div>
    );
};

export default CompanyChallenge;
