import styled, { css } from "styled-components";
import { WEEK_DAYS } from "../consts/weekdays";

type Props = {
  lunchMenus: string[];
  dinnerMenus: string[];
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
          <Th scope="row">Lunch</Th>
          {lunchMenus.map((menu, index) => (
            <Td key={index}>{menu}</Td>
          ))}
        </tr>
        <tr>
          <Th scope="row">Dinner</Th>
          {dinnerMenus.map((menu, index) => (
            <Td key={index}>{menu}</Td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

const tableCellStyle = css`
  border: 1px solid #cdad9f;
  padding: 15px;
  background-color: #f7f1f1;
  letter-spacing: 2px;
`;
const Th = styled.td`
  ${tableCellStyle}
`;
const Td = styled.td`
  ${tableCellStyle}
`;
