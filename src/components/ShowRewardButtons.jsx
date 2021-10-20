import React from "react";
import "./RewardButton.css";


//function to display reward buttons
function ShowRewardButtons() {

  return (
    <div className="Reward-Button-Section">
      <div>
        <button className="Reward-Button">25</button>
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

export default ShowRewardButtons;
