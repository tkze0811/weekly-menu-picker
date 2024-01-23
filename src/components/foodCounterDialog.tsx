import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { FOOD_LIST } from "../consts/foods";
import { FoodName } from "../types/food";
import { setFoodCounts } from "../utils/localStorage";

type Props = {
  ref: HTMLDialogElement;
  name: FoodName;
  initialCount: number;
  closeDialog: () => void;
  updateFoodItemCounter: (count: number) => void;
};

export const FoodCounterDialog = forwardRef<HTMLDialogElement, Props>(
  ({ name, initialCount, closeDialog, updateFoodItemCounter }, ref) => {
    const [count, setCount] = useState(initialCount);
    const src = FOOD_LIST.find((food) => food.name === name)?.src ?? "";

    const onClickPlusButton = () => setCount(count + 1);
    const onClickMinusButton = () => setCount(count - 1);
    const onClickSaveButton = () => {
      setFoodCounts(name, count);
      updateFoodItemCounter(count);
      closeDialog();
    };

    return (
      <Dialog ref={ref} onClick={closeDialog}>
        <DialogContainer onClick={(e) => e.stopPropagation()}>
          <DialogHeader>
            <Title>食材管理</Title>
            <StyledCookImage src="yudetamago.png" />
          </DialogHeader>
          <MainContainer>
            <ImageContainerWrapper>
              <ImageContainer>
                <Image src={src} alt={name} />
                <NumOfFoodsText>×{count}</NumOfFoodsText>
              </ImageContainer>
            </ImageContainerWrapper>
            <FoodText>{name}</FoodText>
            <CounterContainer>
              <CountButton onClick={onClickMinusButton}>-</CountButton>
              <CountButton onClick={onClickPlusButton}>+</CountButton>
            </CounterContainer>
            <ActionButtonContainer>
              <ActionButton onClick={closeDialog}>キャンセル</ActionButton>
              <OkButton onClick={onClickSaveButton}>OK</OkButton>
            </ActionButtonContainer>
          </MainContainer>
        </DialogContainer>
      </Dialog>
    );
  }
);

const Dialog = styled.dialog`
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 260px;
  height: 300px;
  border-radius: 10px;
  border: none;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #f8edd1;
`;
const DialogHeader = styled.div`
  background-color: #f0c072;
  display: flex;
  color: white;
  width: 100%;
  height: 35px;
  padding-left: 10px;
  align-items: center;
  gap: 5px;
`;
const StyledCookImage = styled.img`
  height: 22px;
  padding-top: 2px;
`;
const Title = styled.p`
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: bold;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;

const ImageContainerWrapper = styled.div`
  display: inline-block;
  margin: 0 auto;
  min-width: 65px;
`;
const ImageContainer = styled.div`
  cursor: pointer;
  position: relative;
  width: 70px;
  height: 70px;
  background-color: #fcf5f5;
  border-radius: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 70%;
`;
const NumOfFoodsText = styled.p`
  position: absolute;
  right: -15px;
  bottom: -5px;
  height: 25px;
  width: 38px;
  text-align: center;
  color: #725252;
  font-weight: 500;
  border: #c4c1c1 1px solid;
  background-color: white;
  border-radius: 12px;
  box-shadow: 3px 3px 6px rgb(0 0 0 / 12%);
`;
const FoodText = styled.div`
  letter-spacing: 3px;
  font-weight: bold;
  color: #843f3f;
  font-size: large;
`;
const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
`;
const CountButton = styled.button`
  cursor: pointer;
  width: 50px;
  height: 28px;
  background-color: white;
  border: #b9b7b7 1px solid;
  border-radius: 15px;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  color: #725252;
  box-shadow: 3px 3px 6px rgb(0 0 0 / 12%);
  &:hover {
    box-shadow: none;
    transform: translate(3px, 3px);
  }
`;
const ActionButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;
const ActionButton = styled.button`
  cursor: pointer;
  width: 100px;
  height: 28px;
  font-weight: 500;
  color: #472f2f;
  background-color: white;
  border: #b9b7b7 1px solid;
  border-radius: 15px;
  text-align: center;
  box-shadow: 3px 3px 6px rgb(0 0 0 / 12%);
  &:hover {
    box-shadow: none;
    transform: translate(3px, 3px);
  }
`;
const OkButton = styled(ActionButton)`
  background-color: #bdebbd;
`;
