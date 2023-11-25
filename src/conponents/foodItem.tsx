import React, { useRef } from "react";
import styled from "styled-components";
import { FoodName } from "../types/food";
import { FOOD_LIST } from "../consts/foods";
import { FoodCounterDialog } from "./foodCounterDialog";

type Props = {
  name: FoodName;
  count: number;
};
const ImageContainerWrapper = styled.div`
  min-width: 65px;
`;
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

export const FoodItem = (props: Props) => {
  const { name, count } = props;
  const src = FOOD_LIST.find((food) => food.name === name)?.src ?? "";
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <>
      <ImageContainerWrapper className="food-list">
        <ImageContainer>
          <Image src={src} alt={name} />
          <NumOfFoodsText>×{count}</NumOfFoodsText>
        </ImageContainer>
      </ImageContainerWrapper>
      <FoodCounterDialog name={name} count={count} ref={ref} />
    </>
  );
};
