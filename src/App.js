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
  const [error, showError] = useState("");
  const [reward, setReward] = useState("");
  const [points, setPoints] = useState(95);
  const [activeCategory, setActiveCategory] = useState("");
  const [achievements, updateAchievements] = useState([
    {
      category: "I'm helpful",
      date: new Date().toDateString(),
      text: "I fed the fish",
    }
  ]);
  
 
  const generateReward = (arrayOfAwards, awardValue) => {
    const RandomReward = () => arrayOfAwards[Math.floor(Math.random() * arrayOfAwards.length)];
    if (points >= awardValue){
    setReward(RandomReward)
    setPoints(points - awardValue)
    } else
    alert("Sorry, not enough points yet")
  }

  //shorthand arrow function. Right of arrow is the function return.
  const addAchievement = (newAchievementStuff) =>
    updateAchievements([...achievements, newAchievementStuff]);

  
    
  // function addToLocalStorage(todoItems) {
  //     // convert array to string then store it.
  //   localStorage.setItem('achievements', JSON.stringify(achievements));

  return (
    <div className="App">
      <h1>Millie's Rewards Chart!</h1>
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
        <ShowRewardButtons generateReward={generateReward}/>
        <h3>Your reward is: {reward}</h3> 
      </div>
    </div>
  )
};

export default App;
