import React from "react";
import styled from "styled-components";
import { FoodName } from "../types/food";
import { FOOD_LIST } from "../consts/foods";

type Props = {
  name: FoodName;
  count: number;
};
const ImageContainer = styled.div`
  cursor: pointer;
  position: relative;
  width: 50px;
`;
const Image = styled.img`
  width: 100%;
`;
const NumOfFoodsText = styled.p`
  position: absolute;
  right: -15px;
  bottom: -5px;
  border: black 1px solid;
  background-color: white;
`;

function FoodItem(props: Props) {
  const { name, count } = props;
  const src = FOOD_LIST.find((food) => food.name === name)?.src ?? "";

  return (
    <div className="food-list">
      <div>
        <ImageContainer>
          <Image src={src} alt={name} />
          <NumOfFoodsText>×{count}</NumOfFoodsText>
        </ImageContainer>
      </div>
    </div>
  );
}
export default FoodItem;
