import React from "react";
import "./RewardButton.css";


const rewards25 = [
  {
    reward25Item: "Smoothie",
  },
  {
    reward25Item: "Ice-block",
  },
  {
    reward25Item: "Play a game",
  },
];

const GetRandomReward25 = () =>
  rewards25[Math.floor(Math.random() * rewards25.length)];

//function to display reward buttons
function RewardButton() {
  // const help = () => {
  //   alert("Here's some help");
  // } 

  const GetRandomReward25 = () =>
  rewards25[Math.floor(Math.random() * rewards25.length)];


  return (
    <div className="Reward-Button-Section">
      <div>
        <button className="Reward-Button" onClick={a}>25</button>
      </div>
      <div>
        <button className="Reward-Button">50</button>
      </div>
      <div>
        <button className="Reward-Button">75</button>
      </div>
      <div>
        <button className="Reward-Button">100</button>
      </div>
      <div>
        <button className="Reward-Button">500</button>
      </div>
    </div>
  );
}

export default RewardButton;
