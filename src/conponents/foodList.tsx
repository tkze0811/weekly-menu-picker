import React from "react";
import { FoodItem } from "./foodItem";
import styled from "styled-components";

const FoodListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 6px;
  width: 60vw;
`;

export const FoodList = () => {
  return (
    <FoodListContainer>
      <FoodItem name="卵" count={20} />
      <FoodItem name="牛乳" count={10} />
      <FoodItem name="バター" count={1} />
      <FoodItem name="チーズ" count={10} />
      <FoodItem name="油" count={10} />
      <FoodItem name="豚肉" count={10} />
      <FoodItem name="鶏肉" count={10} />
      <FoodItem name="ひき肉" count={10} />
      <FoodItem name="豚ロース" count={10} />
      <FoodItem name="玉ねぎ" count={10} />
      <FoodItem name="じゃがいも" count={10} />
      <FoodItem name="人参" count={10} />
      <FoodItem name="トマト" count={10} />
      <FoodItem name="パン" count={10} />
      <FoodItem name="パスタ" count={10} />
      <FoodItem name="ラーメン" count={10} />
      <FoodItem name="うどん" count={10} />
      <FoodItem name="納豆" count={10} />
    </FoodListContainer>
  );
};
