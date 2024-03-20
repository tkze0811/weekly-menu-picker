import styled from "styled-components";
import { FoodList } from "../components/foodList";
import { ShoppingList } from "../components/shoppingList";
import { WeeklyMenuTable } from "../components/weeklyMenuTable";
import { MenuDialog } from "../components/menuDialog";
import { useShoppingList } from "../hooks/shoppingList";
import React, { useRef, useState } from "react";
import { Loading } from "../components/loading";

export const WeeklyMenuScreen = () => {
  const { shoppingList, lunchMenus, dinnerMenus, shuffleMenusToStorage } =
    useShoppingList();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
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
      <Loading />
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
          </ButtonContainer>

          <StyledLineImage src="otiba.png" />
          <StyledFoodList />

          <StyledImage src="nezumi.png" />

          <StyledPopLineImage src="green_orangeline.png" />
        </MenuContainer>

        <ShoppingListWrapper>
          <StyledShoppingList shoppingList={shoppingList} />
          <StyledCatImage src="cats.png" />
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
  position: relative;
`;
const Header = styled.header`
  letter-spacing: 5px;
  display: flex;
  padding-top: 60px;
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
  font-size: 50px;
  font-family: fantasy;
  color: #e9691f;
  border-bottom: 4px solid #f9b57a;
  display: inline-block;
  padding-bottom: 5px;
`;
const StyledRightImage = styled.img`
  margin-top: 50px;
  height: 150px;
  width: 300px;
`;
const StyledWeeklyMenuTable = styled(WeeklyMenuTable)`
  margin-top: 55px;
  padding-bottom: 15px;
  text-align: center;
  color: #8a3d17;
`;
const ButtonContainer = styled.div`
  margin-left: 30px;
  display: flex;
  gap: 30px;
  margin-top: 5px;
`;
const ShuffleButton = styled.button`
  width: 75px;
  aspect-ratio: 1;
  font-family: fantasy;
  background-color: #e9691f;
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
  width: 75px;
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
const StyledLineImage = styled.img`
  height: 30px;
  margin-top: 20px;
  margin-bottom: 15px;
`;
const StyledFoodList = styled(FoodList)`
  margin-bottom: 30px;
  padding-left: 20px;
`;
const StyledImage = styled.img`
  position: absolute;
  right: 60px;
  bottom: 15px;
  height: 80px;
  width: 80px;
`;
const StyledPopLineImage = styled.img`
  height: 10px;
  width: 950px;
`;
const ShoppingListWrapper = styled.div`
  display: block;
  width: 100%;
  margin-left: 30px;
`;

const StyledCatImage = styled.img`
  height: 120px;
  width: auto;
  right: 2%;
  bottom: 6%;
  position: absolute;
`;
const StyledShoppingList = styled(ShoppingList)`
  margin: 0 auto;
`;
const Footer = styled.footer`
  display: flex;
  height: 13px;
  margin-top: 23px;
  background-image: url("header.jpg");
  background-repeat: repeat-x;
`;
