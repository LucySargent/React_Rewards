import React, { useState } from "react";
import CategoryButton from "./components/CategoryButton";
import MyForm from "./components/MyForm";
import helping from "./helping.jpg" 


import "./App.css";

const categories = [
  {
    categoryName: "Being Responsible",
    image: ""
  },
  {
    categoryName: "Being Kind",
    image: "",
  },
  {
    categoryName: "Being Organised",
    image: "",
  },
  {
    categoryName: "Being Helpful",
    image: "",
  },
];

function App() {
  //array destructuring
  const [isFormShowing, setIsFormShowing] = useState(false);
  const [points, setPoints] = useState(0);
  const [activeCategory, setActiveCategory] = useState("");
  const [achievements, updateAchievements] = useState([
    // {
    //   category: "Being Helpful",
    //   date: new Date().toDateString(),
    //   text: "Fed the fish",
    // },
  ]);

  //complex function
  //a is an achievement object
  //shorthand arrow function. Right of arrow is the function return.
  const addAchievement = (a) => updateAchievements([...achievements, a]);

  return (
    <div>
      <h1>My Rewards Chart!</h1>
      <h2>Select a category</h2>
{/* DISPLAY CATEGORIES */}
      <div className="Categories">
        <img src={helping} alt="helping" height="100" width="100"/>
        {categories.map((category, index) => {
          return (
            <CategoryButton
            categoryName={category.categoryName}
            image={category.image}
            displayForm={() => {
                setActiveCategory(category.categoryName);
                setIsFormShowing(true);
              }}
              setPoints={() => setPoints(points + 5)}
            />
          );
        })}
      </div>
{/* DISPLAY FORM */}
      <div>
        {isFormShowing && (
          <MyForm addAchievement={addAchievement} category={activeCategory} />
        )}
      </div>
{/* DISPLAY ACHIEVEMENTS */}
      <h2>My Achievements</h2>
      {achievements.map((achievement) => {
        return (
          <div>
            <p>
              {achievement.category}
              {achievement.date}
              {achievement.text}
              <button>Edit</button>
              <button>Remove</button>
            </p>
          </div>
        );
      })}
{/* DISPLAY POINTS */}
      <div>
        <h2>My Points {points}</h2>
      </div>
    </div>
  );
}

export default App;
