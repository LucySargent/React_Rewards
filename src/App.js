import React, { useState } from "react";
import CategoryButton from "./components/CategoryButton";
import MyForm from "./components/MyForm";

//data - generally top level. Static array outside function.
const categories = [
  {
    categoryName: "Homework",
    image: "",
  },
  {
    categoryName: "Kindness",
    image: "",
  },
  {
    categoryName: "Organisation",
    image: "",
  },
  {
    categoryName: "Helping at home",
    image: "",
  },
];

function App() {
  //array destructuring
  //useState returns a stateful value (eg string, boolean, number) and a function to update it
  const [isFormShowing, setIsFormShowing] = useState(false); //starting value is boolean here
  const [points, setPoints] = useState(0);
  const [activeCategory, setActiveCategory] = useState("");
  const [achievements, setAchievements] = useState([{
    text: "swept the floor - use Achievement.jsx to define what an achievement looks like on the page",
    date: new Date().toDateString(),
    category: "helping at home"
  }]);
  
  //complex function
  //a is an achievement object
  const addAchievement = (a) => setAchievements([...achievements, a]);

  return (
    <div>
      <h1>My Rewards Chart!</h1>
      {/* inject values from javascript const into html with {}*/}
      <h2>My Points {points}</h2>
      {/* looping with .map over each category in categories array */}
      {categories.map((category, index) => {
        return (
          <CategoryButton
            categoryName={category.categoryName}
            image={category.image}
            // displays form (isFormShowing div below)
            displayForm={() => {
              setActiveCategory(category.categoryName);
              setIsFormShowing(true);
            }}
            setPoints={() => setPoints(points + 5)}
          />
        );
      })}
      {achievements.map((achievement) => (
        <div>{achievement.text}</div>
      ))}
      {/* && is shorthand React conditional logic */}
      {isFormShowing && (
        // <div>I'm the form!</div>
        <MyForm
          addAchievement={addAchievement}
          category={activeCategory}
        />
      )}
    </div>
  );
}

export default App;
