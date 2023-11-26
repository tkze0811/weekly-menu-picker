import styled from "styled-components";
import { FoodList } from "../components/foodList";
import { ShoppingList } from "../components/shoppingList";
import { WeeklyMenuTable } from "../components/weeklyMenuTable";
import { useShoppingList } from "../hooks/shoppingList";
//コンポーネントを宣言
export const WeeklyMenuScreen = () => {
  const { shoppingList, lunchMenus, dinnerMenus } = useShoppingList();
  //買うものリストに必要なものを返している

  return (
    <AllContainer>
      <MenuContainer>
        <Title>今週の献立表</Title>
        <StyledWeeklyMenuTable
          lunchMenus={lunchMenus}
          dinnerMenus={dinnerMenus}
        />
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
  padding-top: 30px;
`;
const Title = styled.h1`
  font-size: 32px;
`;
const StyledWeeklyMenuTable = styled(WeeklyMenuTable)`
  margin-top: 40px;
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
