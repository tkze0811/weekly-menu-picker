import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { LUNCH_MENUS } from "../consts/lunchMenus";
import { DINNER_MENUS } from "../consts/dinnerMenus";

type Props = {
  ref: HTMLDialogElement;
  closeDialog: () => void;
};

export const MenuDialog = forwardRef<HTMLDialogElement, Props>(
  ({ closeDialog }, ref) => {
    return (
      <Dialog ref={ref} onClick={closeDialog}>
        <MenuDialogContainer>
          <Title>MENU</Title>
          <DialogHeader>
            <CatCommentImg src="catcomment.png" />
            <CatImg src="neko.png"></CatImg>
          </DialogHeader>
          <LunchText>LunchMenu</LunchText>
          <LunchMenus>
            {LUNCH_MENUS.map((menu) => (
              <LunchMenu>
                <LunchImg src={menu.src} />
                <LunchMenuName>{menu.name}</LunchMenuName>
              </LunchMenu>
            ))}
          </LunchMenus>
          <DinnerText>DinnerMenu</DinnerText>
          <DinnerMenus>
            {DINNER_MENUS.map((menu) => (
              <DinnerMenu>
                <DinnerImg src={menu.src} />
                <DinnerMenuName>{menu.name}</DinnerMenuName>
              </DinnerMenu>
            ))}
          </DinnerMenus>
        </MenuDialogContainer>
      </Dialog>
    );
  }
);

const Dialog = styled.dialog`
  z-index: 1;
  position: absolute;
  margin: auto;
  width: 1000px;
  height: 700px;
  border-radius: 40px;
  border: none;
  background-color: #45794b;
  position: relative;
`;
const MenuDialogContainer = styled.div``;
const DialogHeader = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  right: 5%;
  top: 30px;
`;
const Title = styled.div`
  font-size: 50px;
  font-family: fantasy;
  color: #fbf1d9;
  letter-spacing: 3px;
  margin-left: 40px;
  margin-top: 30px;
`;
const CatImg = styled.img`
  height: 120px;
  width: auto;
`;
const CatCommentImg = styled.img`
  height: 100px;
  width: auto;
`;
const LunchText = styled.div`
  font-size: 30px;
  font-family: fantasy;
  color: #fbf1d9;
  letter-spacing: 1px;
  margin-left: 40px;
  margin-top: 30px;
`;
const LunchMenus = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 30px;
`;
const LunchMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LunchMenuName = styled.div`
  padding-left: 40px;
  color: #fbf1d9;
`;
const LunchImg = styled.img`
  height: 80px;
  padding-top: 10px;
  padding-left: 40px;
`;
const DinnerText = styled.div`
  font-size: 30px;
  font-family: fantasy;
  color: #fbf1d9;
  letter-spacing: 1px;
  margin-left: 40px;
  margin-top: 10px;
`;
const DinnerMenus = styled.div`
  display: flex;
  padding-top: 20px;
  flex-wrap: wrap;
`;
const DinnerMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DinnerMenuName = styled.div`
  padding-left: 40px;
  color: #fbf1d9;
`;
const DinnerImg = styled.img`
  height: 80px;
  width: 135px;
  padding-top: 10px;
  padding-left: 40px;
  object-fit: contain;
  object-fit: fill;
`;
