import styled, { css } from "styled-components";
import { WEEK_DAYS } from "../consts/weekdays";
import { Menu } from "../types/menu";

type Props = {
  lunchMenus: Menu[];
  dinnerMenus: Menu[];
  className?: string;
};

export const WeeklyMenuTable = ({
  lunchMenus,
  dinnerMenus,
  className,
}: Props) => {
  return (
    <table className={className}>
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
          {lunchMenus.map((menu, index) => (
            <Td key={index}>{menu.name}</Td>
          ))}
        </tr>
        <tr>
          <Th scope="row">夜ご飯</Th>
          {dinnerMenus.map((menu, index) => (
            <Td key={index}>{menu.name}</Td>
          ))}
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
