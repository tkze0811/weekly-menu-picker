import React from "react";
import FoodItem from "./foodItem";

function FoodList() {
  return (
    <div className="food-list">
      <div>
        <FoodItem name="卵" count={20} />
        <FoodItem name="牛乳" count={10} />
      </div>
    </div>
  );
}
export default FoodList;
