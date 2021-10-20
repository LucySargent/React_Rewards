import React, { useState } from "react";
import CategoryButton from "./components/CategoryButton";
import MyForm from "./components/MyForm";
import helping from "./helping.jpg";
import DisplayAchievement from "./components/DisplayAchievement";
import "./App.css";

const categories = [
  {
    categoryName: "I'm responsible",
    image: helping,
  },
  {
    categoryName: "I'm kind",
    image: helping,
  },
  {
    categoryName: "I'm organised",
    image: helping,
  },
  {
    categoryName: "I'm helpful",
    image: helping,
  },
];

function App() {
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
    </div>
  );
}

export default App;
