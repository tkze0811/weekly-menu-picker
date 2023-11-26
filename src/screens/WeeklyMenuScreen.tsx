import styled from "styled-components";
import { FoodList } from "../components/foodList";
import { ShoppingList } from "../components/shoppingList";
import { WeeklyMenuTable } from "../components/weeklyMenuTable";
import { useShoppingList } from "../hooks/shoppingList";

export const WeeklyMenuScreen = () => {
  const { shoppingList, lunchMenus, dinnerMenus } = useShoppingList();

  return (
    <AllContainer>
      <MenuContainer>
        <h1>献立</h1>
        <WeeklyMenuTable lunchMenus={lunchMenus} dinnerMenus={dinnerMenus} />
        <StyledFoodList />
      </MenuContainer>

      <ShoppingListWrapper>
        <StyledShoppingList shoppingList={shoppingList} />
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
