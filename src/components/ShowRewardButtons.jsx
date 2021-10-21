import React from "react";
import "./RewardButton.css";

const awardValues = [
  {
    rewards: [ "Smoothie", "Ice-block", "Play a game", "Choose dinner", "$2"],
    value: 25
  },
  {
    rewards: [ "$5", "b", "c", "d"],
    value: 50
  },
  {
    rewards: [ "Game of tennis", "$10", "g", "h"],
    value: 75
  },
  {
    rewards: [ "Trip to the beach", "No chores day!", "Sleepover", "Go out with a friend", "$15"],
    value: 100
  },  
]


//function to display reward buttons
function ShowRewardButtons(props) {
  const { generateReward } = props

  return (
    <div className="Reward-Button-Section">
      {awardValues.map((award) => {
        return (
      <div>
        <button className="Reward-Button" onClick={() => generateReward(award.rewards, award.value)} >{award.value}</button>
      </div>
        )})}
    </div>
  );
}

export default ShowRewardButtons;
