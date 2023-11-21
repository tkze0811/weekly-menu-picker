import React from "react";
import "./App.css";

function App() {
  const weekdays: string[] = ["月", "火", "水", "木", "金"];

  return (
    <div className="App">
      <h2>献立</h2>
      <table>
        <thead>
          <tr>
            <th scope="col"></th>
            {weekdays.map((weekday, index) => {
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
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">夜ご飯</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
