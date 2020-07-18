import React from "react";
import { RewardCard } from "../components/Card";

import who from "../assets/rewards/who.svg";
import unicef from "../assets/rewards/unicef-logo.png";
import spca from "../assets/rewards/spca.svg";
import kiwicoffee from "../assets/rewards/kiwicoffee.jpg";
import gridakl from "../assets/rewards/gridakl.jpg";
import coach from "../assets/rewards/coach.jpg";

interface OwnProps {
  user: String;
}

type RewardsProps = OwnProps;

const Rewards = (props: RewardsProps) => {
  return (
    <div>
      <h1>Rewards</h1>
      <p>Hi {props.user}, you currently have 5&#128176;</p>
      <p>
        Choose to donate to a charity or get a voucher you can spend at a local
        business!
      </p>
      <h2>Charities</h2>
      <RewardCard
        name="COVID-19 Fund"
        image={who}
        cost={20}
        address=""
        description="The World Health Organization is leading and coordinating the global effort, supporting countries to prevent, detect, and respond to the pandemic. By choosing this we will make a donation of $15 to COVID-Solidarity Response Fund for WHO"
      ></RewardCard>
      <RewardCard
        name="SPCA"
        image={spca}
        cost={20}
        address=""
        description="Together with our communities, SPCA has been protecting New Zealand’s animals for over 140 years – animals who are sick, injured, neglected, abused or simply abandoned. By choosing this we will make a donation of $15 to SPCA"
      ></RewardCard>
      <RewardCard
        name="UNICEF"
        image={unicef}
        cost={20}
        address=""
        description="When disaster strikes, UNICEF is there to save and protect children – no matter the circumstance. And right now, as the world battles with the COVID-19 pandemic, our life-saving work for children has never been more critical. By choosing this we will make a donation of $15 to UNICEF"
      ></RewardCard>
      <h2>Local Rewards</h2>
      <RewardCard
        name="Kiwi Coffee"
        image={kiwicoffee}
        cost={10}
        address="10A Queen Street, Auckland"
        description="One free coffee"
      ></RewardCard>
      <RewardCard
        name="Grid AKL"
        image={gridakl}
        cost={15}
        address="101 Pakenham Street West, Auckland"
        description="10% off shared office space"
      ></RewardCard>
      <RewardCard
        name="Career Coach"
        image={coach}
        cost={30}
        address="Online"
        description="We'll introduce to a local career coach, who will provide you with a free 30 minute zoom coaching session!"
      ></RewardCard>
    </div>
  );
};

export default Rewards;
