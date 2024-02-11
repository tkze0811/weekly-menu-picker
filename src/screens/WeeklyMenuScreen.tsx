import styled from "styled-components";
import { FoodList } from "../components/foodList";
import { ShoppingList } from "../components/shoppingList";
import { WeeklyMenuTable } from "../components/weeklyMenuTable";
import { MenuDialog } from "../components/menuDialog";
import { useShoppingList } from "../hooks/shoppingList";
import React, { useRef, useState } from "react";

export const WeeklyMenuScreen = () => {
  const { shoppingList, lunchMenus, dinnerMenus, shuffleMenusToStorage } =
    useShoppingList();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    console.log("openDialog");
    console.log(dialogRef.current);
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };
  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };
  return (
    <AllContainer>
      <Header>
        <StyledLeftImage src="star.png" />
        <Title>WEEKLY MENU</Title>
        <StyledRightImage src="star.png" />
      </Header>
      <MainContainer>
        <MenuContainer>
          <StyledWeeklyMenuTable
            lunchMenus={lunchMenus}
            dinnerMenus={dinnerMenus}
          />
          <ButtonContainer>
            <ShuffleButton onClick={shuffleMenusToStorage}>
              Shuffle
            </ShuffleButton>
            <MenuButton onClick={openDialog}>MENU</MenuButton>
            <MenuDialog closeDialog={closeDialog} ref={dialogRef} />

            <HistoryButton>
              <StyledHistoryImage src="history.png" />
            </HistoryButton>
          </ButtonContainer>
          <StyledLineImage src="line_vegetable.png" />
          <StyledFoodList />
          <DetailButton>Detail</DetailButton>
          <StyledImage src="nezumi.png" />
          <StyledEndLineImage src="popline.png" />
        </MenuContainer>
        <ShoppingListWrapper>
          <StyledShoppingList shoppingList={shoppingList} />
          <StyledBalloonImage src="" />
          <StyledWoodImage src="" />
        </ShoppingListWrapper>
      </MainContainer>
      <Footer />
    </AllContainer>
  );
};

const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 35px;
`;
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.header`
  letter-spacing: 5px;
  display: flex;
  padding-top: 50px;
  padding-left: 22px;
  height: 70px;
  gap: 45px;
  background-image: url("bg_header.gif");
  background-repeat: repeat-x;
  align-items: center;
`;
const StyledLeftImage = styled.img`
  margin-top: 50px;
  height: 150px;
  width: 300px;
`;
const Title = styled.h1`
  font-size: 45px;
  font-family: fantasy;
  color: #992f2f;
  border-bottom: 4px solid #992f2f;
  display: inline-block;
  padding-bottom: 5px;
`;
const StyledRightImage = styled.img`
  margin-top: 50px;
  height: 150px;
  width: 300px;
`;
const StyledWeeklyMenuTable = styled(WeeklyMenuTable)`
  margin-top: 45px;
  padding-bottom: 20px;
  text-align: center;
`;
const ButtonContainer = styled.div`
  margin-left: 14px;
  display: flex;
  gap: 24px;
  margin-top: 5px;
`;
const ShuffleButton = styled.button`
  width: 70px;
  aspect-ratio: 1;
  font-family: fantasy;
  background-color: #3c5b98;
  color: #f7efdc;
  font-size: 18px;
  border-radius: 50%;
  box-shadow: 0px 0px 8px #b1b1b1, 4px 4px 8px rgb(0 0 0 / 24%);

  &:hover {
    box-shadow: none;
    transform: translate(3px, 3px);
  }
`;
const MenuButton = styled.button`
  width: 70px;
  aspect-ratio: 1;
  font-family: fantasy;
  background-color: #588f5e;
  color: #f7efdc;
  font-size: 20px;
  border-radius: 50%;
  box-shadow: 0px 0px 8px #b1b1b1, 4px 4px 8px rgb(0 0 0 / 24%);

  &:hover {
    box-shadow: none;
    transform: translate(3px, 3px);
  }
`;

const HistoryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  aspect-ratio: 1;
  background-color: #f59056;
  border-radius: 50%;
  box-shadow: 0px 0px 8px #b1b1b1, 4px 4px 8px rgb(0 0 0 / 24%);

  &:hover {
    box-shadow: none;
    transform: translate(3px, 3px);
  }
`;
const StyledHistoryImage = styled.img`
  width: 40px;
  height: 37px;
`;
const StyledLineImage = styled.img`
  height: 35px;
  width: 900px;
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 13px;
`;
const StyledFoodList = styled(FoodList)`
  margin-bottom: 14px;
  padding-right: 40px;
  padding-left: 20px;
`;
const DetailButton = styled.button`
  top: 60px;
  right: 60px;
  background-color: #f2ac60;
  border-radius: 10px;
  width: 100px;
  height: 50px;
  margin-bottom: 15px;
  margin: 0 0 0 auto;
  font-size: 30px;
  color: #f7efdc;
  font-family: fantasy;
  font-weight: 400;
  border: 2px solid #f2ac60;
  &:hover {
    color: #f2ac60;
    background: #f8f3e6;
    transition-duration: 0.4s;
  }
`;
const StyledImage = styled.img`
  height: 70px;
  width: 70px;
  display: flex;
  margin: 0 0 0 auto;
  margin-top: 5px;
`;
const StyledEndLineImage = styled.img`
  height: 10px;
  margin-bottom: 8px;
`;
const ShoppingListWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  margin-left: 30px;
  background-size: 20px;
  background-image: url("");
  background-repeat: repeat-y;
`;

const StyledWoodImage = styled.img``;
const StyledBalloonImage = styled.img`
  height: 100px;
`;
const StyledShoppingList = styled(ShoppingList)`
  margin: 0 auto;
`;
const Footer = styled.footer`
  display: flex;
  height: 13px;
  background-image: url("header.jpg");
  background-repeat: repeat-x;
`;
