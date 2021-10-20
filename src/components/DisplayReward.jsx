import React from "react";

//function to show Reward after reward button is clicked

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

function DisplayReward() {
  const reward = GetRandomReward25
  return (
  <h2>You win + {reward}</h2>
  )
}

export default DisplayReward;
