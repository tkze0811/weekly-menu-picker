import React from "react";
import FoodList from "../conponents/foodList";
import WeeklyMenuTable from "../conponents/weeklyMenuTable";

function WeeklyMenuScreen() {
  return (
    <>
      <h2>献立</h2>
      <WeeklyMenuTable />
      <FoodList />
    </>
  );
}
export default WeeklyMenuScreen;
