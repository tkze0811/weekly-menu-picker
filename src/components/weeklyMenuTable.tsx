import styled, { css } from "styled-components";
import { WEEK_DAYS } from "../consts/weekdays";
import { Menu } from "../types/menu";

type Props = {
  lunchIngredients: Menu[];
  dinnerIngredients: Menu[];
  className?: string;
};

export const WeeklyMenuTable = ({
  lunchIngredients,
  dinnerIngredients,
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
          {lunchIngredients.map((lunchIngredient, index) => (
            <Td key={index}>{lunchIngredient.name}</Td>
          ))}
        </tr>
        <tr>
          <Th scope="row">夜ご飯</Th>
          {dinnerIngredients.map((dinnerIngredient, index) => (
            <Td key={index}>{dinnerIngredient.name}</Td>
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
