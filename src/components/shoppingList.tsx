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
      <ShoppingListImg src="1.png" />
      <Title>SHOPPING LIST</Title>
      <List>
        {shoppingList.map((item, index) => (
          <Item key={index}>
            {item.name} ×{item.count}
          </Item>
        ))}
      </List>
      <StyledPencilImage src="" />
    </ShoppingListContainer>
  );
};

const ShoppingListContainer = styled.div`
  position: relative;
`;
const ShoppingListImg = styled.img`
  height: 620px;
  object-fit: contain;
  object-fit: fill;
`;
const Title = styled.h3`
  position: absolute;
  left: 15px;
  top: 170px;
  font-size: 33px;
  margin-top: 5px;
  margin-left: 23%;
  color: #e9691f;
  letter-spacing: 2px;
  font-family: fantasy;
`;
const List = styled.ul`
  position: absolute;
  left: 15px;
  top: 220px;
  list-style: none;
  font-size: 18px;
  margin-top: 10px;
  padding: 0 60px;
  width: 300px;
  height: 100px;
  text-align: left;
  flex-direction: column;
  flex-wrap: wrap;
`;
const StyledPencilImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 90px;
  width: auto;
`;
const Item = styled.li`
  padding-left: 25px;
  height: 25px;
  width: 300px;
  flex-wrap: wrap;
  letter-spacing: 1px;
`;
