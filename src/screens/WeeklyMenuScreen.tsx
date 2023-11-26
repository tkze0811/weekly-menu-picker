import React from "react";
import styled from "styled-components";
import { FoodList } from "../components/foodList";
import { WeeklyMenuTable } from "../components/weeklyMenuTable";
import { ShoppingList } from "../components/shoppingList";

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

export const WeeklyMenuScreen = () => {
  return (
    <AllContainer>
      <MenuContainer>
        <h1>献立</h1>
        <WeeklyMenuTable />
        <FoodList />
      </MenuContainer>

      <ShoppingListWrapper>
        <StyledShoppingList />
      </ShoppingListWrapper>
    </AllContainer>
  );
};
