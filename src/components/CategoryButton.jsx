import React from "react";
import "./CategoryButton.css"


//function to display reward categories
function CategoryButton(props) {
  //destructuring
  const {image, categoryName, displayForm, setPoints} = props;

  return (
    <div>
      <button className="Category-Button" onClick={displayForm}>
        <h3>{categoryName}</h3>
        <img src={image} alt="picture" height="100" width="100" />
      </button>
    </div>
  );
}

export default CategoryButton;
