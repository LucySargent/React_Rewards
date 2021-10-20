import React, { useState } from "react";
import CategoryButton from "./components/CategoryButton";
import DisplayAchievement from "./components/DisplayAchievement";
import MyForm from "./components/MyForm";
import RewardButton from "./components/RewardButton";

import helping from "./helping.jpg";
import responsible from "./responsible.jpg";
import organised from "./organised.jpg";
import kind from "./kind.jpg";

import "./App.css";

const categories = [
  {
    categoryName: "I'm responsible",
    image: responsible,
  },
  {
    categoryName: "I'm kind",
    image: kind,
  },
  {
    categoryName: "I'm organised",
    image: organised,
  },
  {
    categoryName: "I'm helpful",
    image: helping,
  },
];

// const rewards25 = [
//   {
//     reward25Item: "Smoothie",
//   },
//   {
//     reward25Item: "Ice-block",
//   },
//   {
//     reward25Item: "Play a game",
//   },
// ];

// const GetRandomReward25 = () =>
//   rewards25[Math.floor(Math.random() * rewards25.length)];

function App() {
  const [reward25, setReward25] = useState("");
  const [isFormShowing, setIsFormShowing] = useState(false);
  const [points, setPoints] = useState(0);
  const [activeCategory, setActiveCategory] = useState("");
  const [achievements, updateAchievements] = useState([
    {
      category: "I'm helpful",
      date: new Date().toDateString(),
      text: "I fed the fish",
    },
  ]);

  //complex function
  //a is an achievement object
  //shorthand arrow function. Right of arrow is the function return.
  const addAchievement = (newAchievementStuff) =>
    updateAchievements([...achievements, newAchievementStuff]);

  
  return (
    <div className="App">
      <h1>My Rewards Chart!</h1>
      <h2>Select a category</h2>
      <div className="Categories">
        {/* DISPLAY CATEGORIES */}
        {categories.map((category, index) => {
          return (
            <CategoryButton 
              categoryName={category.categoryName}
              image={category.image}
              displayForm={() => {
                setActiveCategory(category.categoryName);
                setIsFormShowing(true);
              }}
            />
          );
        })}
      </div>
      {/* DISPLAY FORM */}
      <div>
        {isFormShowing && (
          <MyForm 
            addAchievement={addAchievement} 
            category={activeCategory} 
            setPoints={(value) => setPoints(points + value)}
          />
        )}
      </div>
    {/* DISPLAY ACHIEVEMENTS */}
      <h2>My Achievements</h2>
      {achievements.map((achievement) => {
        return <DisplayAchievement achievement={achievement} />;
      })}
      {/* DISPLAY POINTS */}
      <div>
        <h2>My Points {points}</h2>
      </div>
      {/* DISPLAY REWARD BUTTONS */}
      <div>
        <h2>Collect a reward!</h2>
        <h4>Collect a reward when you have enough points or carry on earning for a bigger reward!</h4>
        <RewardButton/>
        
      </div>
    </div>
  );
}

export default App;
