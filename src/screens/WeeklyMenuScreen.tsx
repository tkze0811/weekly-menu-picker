import styled from "styled-components";
import { FoodList } from "../components/foodList";
import { ShoppingList } from "../components/shoppingList";
import { WeeklyMenuTable } from "../components/weeklyMenuTable";
import { useShoppingList } from "../hooks/shoppingList";

//コンポーネントを宣言
export const WeeklyMenuScreen = () => {
  // 買うものリストに必要なものを返している
  const { shoppingList, lunchIngredients, dinnerIngredients } =
    useShoppingList();

  return (
    <AllContainer>
      <MenuContainer>
        <Title>今週の献立表</Title>
        <StyledWeeklyMenuTable
          lunchIngredients={lunchIngredients}
          dinnerIngredients={dinnerIngredients}
        />
        <StyledFoodList />
        <StyledImgWrapper>
          <StyledImg src="kago.jpg" />
        </StyledImgWrapper>
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
  text-align: center;
`;
const StyledFoodList = styled(FoodList)`
  margin-top: 50px;
  padding-right: 50px;
`;
const StyledImgWrapper = styled.div`
  text-align: right;
`;
const StyledImg = styled.img`
  width: 500px;
  height: 300px;
  text-align: right;
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
