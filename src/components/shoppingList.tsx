import React from "react";
import styled from "styled-components";
import { Ingredient } from "../types/menu";

type Props = {
  className?: string;
  shoppingList: Ingredient[];
};
export const ShoppingList = ({ className, shoppingList }: Props) => {
  return (
    <ShoppingListContainer className={className}>
      <ShoppingListImg src="orangelist.png" />
      <ListContent>
        <Title>SHOPPING LIST</Title>
        <List>
          {shoppingList.map((item, index) => (
            <Item key={index}>
              {item.name} ×{item.count}
            </Item>
          ))}
        </List>
      </ListContent>
      <StyledCatwalkImage src="catswalk.png" />
    </ShoppingListContainer>
  );
};

const ShoppingListContainer = styled.div`
  position: relative;
`;
const ShoppingListImg = styled.img`
  height: 600px;
  width: 420px;
  position: absolute;
  bottom: 0px;
  left: 10%;
  position: relative;
`;
const ListContent = styled.div`
  position: absolute;
  flex-direction: column;
  left: 23%;
  top: 27%;
`;
const Title = styled.h3`
  font-size: 35px;
  margin-left: 23px;
  color: #e9691f;
  letter-spacing: 3px;
  font-family: fantasy;
`;
const List = styled.ul`
  list-style: none;
  font-size: 18px;
  margin-top: 14px;
  margin-left: 55px;
  width: auto;
  height: 290px;
  overflow-y: scroll;
  scrollbar-color: #f9f5f3 #e9691f;
  scrollbar-width: thin;

  ::-webkit-scrollbar-thumb {
  }
`;
const StyledCatwalkImage = styled.img`
  height: 50px;
  width: 400px;
  margin-left: 40px;
  margin-top: 10px;
`;
const Item = styled.li`
  letter-spacing: 4px;
  color: #8a3d17;
`;
