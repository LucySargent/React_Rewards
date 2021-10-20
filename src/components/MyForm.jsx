import React, { useState } from "react";

function MyForm(props) {
  const achievementTemplate = {
    text: "",
    date: new Date().toDateString(),
    category: props.category
  };

  console.log("Const achievementTemplate: ", achievementTemplate)
  
  const [formText, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formText) {
      return;
    }

    const newAchievement = {
      ...achievementTemplate, 
      text: formText
    }

    props.addAchievement(newAchievement);
    props.setPoints(5)
    setText("");
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        value={formText}
        type="text"
        placeholder="What I did..."
        onChange={(event) => setText(event.target.value)}
      />
    </form>
  );
}

export default MyForm;
