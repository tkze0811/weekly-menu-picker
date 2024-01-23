import styled from "styled-components";
import { FoodList } from "../components/foodList";
import { ShoppingList } from "../components/shoppingList";
import { WeeklyMenuTable } from "../components/weeklyMenuTable";
import { useShoppingList } from "../hooks/shoppingList";

export const WeeklyMenuScreen = () => {
  // 買うものリストに必要なものを返している
  const { shoppingList, lunchMenus, dinnerMenus, shuffleMenusToStorage } =
    useShoppingList();

  return (
    <AllContainer>
      <Header>
        <Title>今週の献立表</Title>
        <StyledLogoImage src="9898.png" />
      </Header>
      <MainContainer>
        <MenuContainer>
          <StyledWeeklyMenuTable
            lunchMenus={lunchMenus}
            dinnerMenus={dinnerMenus}
          />
          <ButtonContainer>
            <ShuffleButton onClick={shuffleMenusToStorage}>
              shuffle
            </ShuffleButton>
            <HistoryButton>
              <StyledHistoryImage src="history.png" />
            </HistoryButton>
          </ButtonContainer>
          <StyledLineImage src="cooking_line.png" />
          <StyledFoodList />
          <DetailButton>Detail</DetailButton>
          <StyledImage src="nezumi.png" />
          <StyledEndLineImage src="line.png" />
        </MenuContainer>
        <ShoppingListWrapper>
          <StyledShoppingList shoppingList={shoppingList} />
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
  color: #992f2f;
  letter-spacing: 1px;
  display: flex;
  padding-top: 50px;
  padding-left: 35px;
  gap: 15px;
  height: 70px;
  font-size: 18px;
  background-image: url("bg_header.gif");
  background-repeat: repeat-x;
  align-items: center;
`;
const StyledLogoImage = styled.img`
  height: 35px;
  display: flex;
  padding-top: 2px;
`;
const Title = styled.h1`
  font-size: 32px;
`;
const StyledWeeklyMenuTable = styled(WeeklyMenuTable)`
  margin-top: 50px;
  padding-bottom: 30px;
  text-align: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
`;
const ShuffleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  aspect-ratio: 1;
  color: #222;
  background-color: #eca65b;
  border-radius: 50%;
  box-shadow: 0px 0px 8px #fff, 4px 4px 8px rgb(0 0 0 / 24%);

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
  background-color: #f67b52;
  border-radius: 50%;
  box-shadow: 0px 0px 8px #fff, 4px 4px 8px rgb(0 0 0 / 24%);

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
  margin-top: 20px;
  margin-bottom: 25px;
`;
const StyledFoodList = styled(FoodList)`
  padding-right: 50px;
`;
const DetailButton = styled.button`
  height: 40px;
  width: 100px;
  background: #9ce2f4;
  color: #306eb1;
  position: relative;
  margin: 0 0 0 auto;
  letter-spacing: 2px;
  margin-bottom: 15px;
  &::before {
    content: "";
    position: absolute;
    top: calc(50% - 2px);
    right: -2em;
    transform: translateY(calc(-50% - 2px)) rotate(30deg);
    width: 10px;
    height: 2px;
    background-color: #6bb6ff;
    transition: 0.3s;
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -2em;
    transform: translateY(-50%);
    width: 60px;
    height: 2px;
    background-color: #6bb6ff;
    transition: 0.3s;
  }
  &:hover::after,
  &:hover:before {
    right: -2.5em;
  }
  &:hover {
    background: #d0f2fd;
    color: #6bb6ff;
  }
`;
const StyledImage = styled.img`
  height: 70px;
  width: 70px;
  display: flex;
  margin: 0 0 0 auto;
`;
const StyledEndLineImage = styled.img`
  margin-bottom: 15px;
`;
const ShoppingListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const StyledShoppingList = styled(ShoppingList)`
  margin: 0 auto;
`;
const Footer = styled.footer`
  display: flex;
  height: 70px;
  background-image: url("bg_header.gif");
  background-repeat: repeat-x;
`;
