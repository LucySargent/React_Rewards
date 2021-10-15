import React from "react";
import RewardForm from "./RewardForm";

//function to display the reward categories

function RewardCategories(props) {

  return (
    <div>
      <h2>Categories</h2>
      {/* <div>
        <button onClick={RewardForm}> Homework </button>
      </div> */}
      {/* <div>
        <button onClick={RewardForm}> Kindness </button>
      </div> */}
      <div>
        <button onClick={RewardForm}><h3>{props.category}</h3></button>
      </div>
      <div>
        <button onClick={RewardForm}><h3>{props.category}</h3></button>
      </div>
      <div>
        <button onClick={RewardForm}><h3>{props.category}</h3></button>
      </div>
    </div>
  );
}

export default RewardCategories;
