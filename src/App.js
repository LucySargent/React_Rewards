import React, { useState } from "react";
import CategoryButton from "./components/CategoryButton";
import DisplayAchievement from "./components/DisplayAchievement";
import MyForm from "./components/MyForm";
import ShowRewardButtons from "./components/ShowRewardButtons";

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


function App() {
  const [isFormShowing, setIsFormShowing] = useState(false);
  const [reward25, setReward25] = useState("");
  const [points, setPoints] = useState(0);
  const [activeCategory, setActiveCategory] = useState("");
  const [achievements, updateAchievements] = useState([
    {
      category: "I'm helpful",
      date: new Date().toDateString(),
      text: "I fed the fish",
    }
  ]);
  
  const rewards25 = [ "Smoothie", "Ice-block", "Play a game", "Choose dinner"];
  
  const generateReward = () => {
    const RandomReward = () => rewards25[Math.floor(Math.random() * rewards25.length)];
    setReward25(RandomReward)
  }

  //shorthand arrow function. Right of arrow is the function return.
  const addAchievement = (newAchievementStuff) =>
    updateAchievements([...achievements, newAchievementStuff]);

  return (
    <div className="App">
      <h1>My Rewards Chart!</h1>
      <h2>Select a category</h2>
      <div className="Categories">
        {categories.map((category, index) => {
          return (
            <CategoryButton 
              categoryName={category.categoryName}
              image={category.image}
              displayForm={() => {
                setActiveCategory(category.categoryName);
                setIsFormShowing(true);
              }}/>
          );
        })}
      </div>
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
        <ShowRewardButtons />
        <button onClick={() => generateReward()}>25 POINTS</button>
        <h3>Your reward is: {reward25}</h3> 
      </div>
    </div>
  )
};

export default App;
