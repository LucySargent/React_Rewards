import React from "react";

const DisplayAchievement = (props) => {
  const { achievement } = props;
  return (
    <div className="Achievements">
      <div>
        <p>{achievement.category}</p>
      </div>
      <div>
        <p>{achievement.date}</p>
      </div>
      <div>
        <p>{achievement.text}</p>
      </div>
      <div>
      <p><button>Edit</button></p>
      </div>
      <div>
        <p><button>Remove</button></p>
      </div>
    </div>
  );
};

export default DisplayAchievement;
