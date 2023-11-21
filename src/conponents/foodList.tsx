import React from "react";
import FoodItem from "./foodItem";

function FoodList() {
  return (
    <div className="food-list">
      <div>
        <FoodItem imageSrc="/egg.png" imageName="卵" count={20} />
      </div>
    </div>
  );
}
export default FoodList;
