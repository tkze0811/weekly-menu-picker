import React from "react";
import "./App.css";
import { DINNER_MENUS } from "./consts/dinnerMenus";
import { LUNCH_MENUS } from "./consts/lunchMenus";
import { WEEK_DAYS } from "./consts/weekdays";
import { shuffleArray } from "./utils/shuffleArray";
import FoodList from "./conponents/foodList";

function App() {
  const lunchMenus = shuffleArray(LUNCH_MENUS);
  const dinnerMenus = shuffleArray(DINNER_MENUS);

  return (
    <div className="App">
      <h2>献立</h2>
      <table>
        <thead>
          <tr>
            <th scope="col"></th>
            {WEEK_DAYS.map((weekday, index) => {
              return (
                <th key={index} scope="col">
                  {weekday}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">昼ご飯</th>
            {lunchMenus.map((menu, index) => {
              if (index <= 4) {
                return <td key={index}>{menu}</td>;
              }
            })}
          </tr>
          <tr>
            <th scope="row">夜ご飯</th>
            {dinnerMenus.map((menu, index) => {
              if (index <= 4) {
                return <td key={index}>{menu}</td>;
              }
            })}
          </tr>
        </tbody>
      </table>

      <FoodList />
    </div>
  );
}
export default App;
