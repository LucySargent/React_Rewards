import React, { useState } from "react";

function MyForm(props) {
  const newAchievement = {
    text: "",
    date: new Date().toDateString(),
    category: props.category
  };

  console.log("Const newAchievement: ", newAchievement)
  
  const [formText, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formText) {
      return;
    }
    props.addAchievement({ ...newAchievement, text: formText });
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
