import React, { forwardRef } from "react";
import styled from "styled-components";
import { FoodName } from "../types/food";
import { FOOD_LIST } from "../consts/foods";

type Props = {
  ref: HTMLDialogElement;
  name: FoodName;
  count: number;
};

export const FoodCounterDialog = forwardRef<HTMLDialogElement, Props>(
  ({ name, count }, ref) => {
    const src = FOOD_LIST.find((food) => food.name === name)?.src ?? "";

    return (
      <>
        <Overlay />
        <Dialog ref={ref}>
          <DialogContainer>
            <ImageContainerWrapper>
              <ImageContainer>
                <Image src={src} alt={name} />
                <NumOfFoodsText>×{count}</NumOfFoodsText>
              </ImageContainer>
            </ImageContainerWrapper>
            <CounterContainer>
              <CountButton>-</CountButton>
              <CountButton>+</CountButton>
            </CounterContainer>
            <ActionButtonContainer>
              <ActionButton>キャンセル</ActionButton>
              <ActionButton>OK</ActionButton>
            </ActionButtonContainer>
          </DialogContainer>
        </Dialog>
      </>
    );
  }
);

const Overlay = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.05);
`;
const Dialog = styled.dialog`
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 260px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
`;
const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  text-align: center;
`;
const ImageContainerWrapper = styled.div`
  display: inline-block;
  margin: 0 auto;
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
const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
`;
const CountButton = styled.button`
  cursor: pointer;
  width: 45px;
  height: 28px;
  background-color: white;
  border: solid 1px black;
  border-radius: 5px;
  text-align: center;
`;
const ActionButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;
const ActionButton = styled.button`
  cursor: pointer;
  width: 92px;
  height: 28px;
  background-color: white;
  border: solid 1px black;
  border-radius: 5px;
  text-align: center;
`;
