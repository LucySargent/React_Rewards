import React from "react";
import RewardForm from "./MyForm";

//function to display the reward categories

function CategoryButton(props) {
  // const image = props.image;
  // const categoryName = props.categoryName;
  // const onCategoryClick = props.onCategoryClick;
  const {image, categoryName, displayForm, setPoints} = props;

  return (
    <div>
      {/*when clicked do the onCategoryClick action  */}
      <button onClick={displayForm}>
        <h3>{categoryName}</h3>
      </button>
    </div>
  );
}

export default CategoryButton;