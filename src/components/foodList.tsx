import React from "react";
import { FoodItem } from "./foodItem";
import styled from "styled-components";

type Props = { className?: string };

export const FoodList = ({ className }: Props) => {
  return (
    <FoodListContainer className={className}>
      <FoodItem name="卵" />
      <FoodItem name="牛乳" />
      <FoodItem name="バター" />
      <FoodItem name="チーズ" />
      <FoodItem name="油" />
      <FoodItem name="豚肉" />
      <FoodItem name="鶏肉" />
      <FoodItem name="ひき肉" />
      <FoodItem name="豚ロース" />
      <FoodItem name="玉ねぎ" />
      <FoodItem name="じゃがいも" />
      <FoodItem name="人参" />
      <FoodItem name="トマト" />
      <FoodItem name="パン" />
      <FoodItem name="パスタ" />
      <FoodItem name="ラーメン" />
      <FoodItem name="うどん" />
      <FoodItem name="納豆" />
    </FoodListContainer>
  );
};

const FoodListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 6px;
  width: 60vw;
`;
