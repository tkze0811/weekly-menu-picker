import React from "react";
import styled from "styled-components";
import { FoodList } from "../components/foodList";
import { WeeklyMenuTable } from "../components/weeklyMenuTable";
import { ShoppingList } from "../components/shoppingList";
import { DINNER_MENUS } from "../consts/dinnerMenus";
import { LUNCH_MENUS } from "../consts/lunchMenus";
import { shuffleArray } from "../utils/shuffleArray";

export const WeeklyMenuScreen = () => {
  const lunchMenus = shuffleArray(LUNCH_MENUS).splice(0, 5);
  const dinnerMenus = shuffleArray(DINNER_MENUS).splice(0, 5);

  return (
    <AllContainer>
      <MenuContainer>
        <h1>献立</h1>
        <WeeklyMenuTable lunchMenus={lunchMenus} dinnerMenus={dinnerMenus} />
        <StyledFoodList />
      </MenuContainer>

      <ShoppingListWrapper>
        <StyledShoppingList />
      </ShoppingListWrapper>
    </AllContainer>
  );
};

const AllContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 35px;
`;
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ShoppingListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const StyledShoppingList = styled(ShoppingList)`
  margin: 0 auto;
  border: solid 1px black;
  border-radius: 5px;
`;
const StyledFoodList = styled(FoodList)`
  margin-top: 50px;
`;
