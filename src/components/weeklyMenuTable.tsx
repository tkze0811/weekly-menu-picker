import React from "react";
import { DINNER_MENUS } from "../consts/dinnerMenus";
import { LUNCH_MENUS } from "../consts/lunchMenus";
import { WEEK_DAYS } from "../consts/weekdays";
import { shuffleArray } from "../utils/shuffleArray";
import styled, { css } from "styled-components";

export const WeeklyMenuTable = () => {
  const lunchMenus = shuffleArray(LUNCH_MENUS);
  const dinnerMenus = shuffleArray(DINNER_MENUS);

  return (
    <table>
      <thead>
        <tr>
          <Th scope="col"></Th>
          {WEEK_DAYS.map((weekday, index) => {
            return (
              <Th key={index} scope="col">
                {weekday}
              </Th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          <Th scope="row">昼ご飯</Th>
          {lunchMenus.map((menu, index) => {
            if (index <= 4) {
              return <Td key={index}>{menu.name}</Td>;
            }
          })}
        </tr>
        <tr>
          <Th scope="row">夜ご飯</Th>
          {dinnerMenus.map((menu, index) => {
            if (index <= 4) {
              return <Td key={index}>{menu.name}</Td>;
            }
          })}
        </tr>
      </tbody>
    </table>
  );
};

const tableCellStyle = css`
  border: 1px solid rgb(190, 190, 190);
  padding: 10px;
`;
const Th = styled.td`
  ${tableCellStyle}
`;
const Td = styled.td`
  ${tableCellStyle}
`;
