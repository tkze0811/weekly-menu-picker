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
      <Title>SHOPPING LIST</Title>
      <List>
        {shoppingList.map((item, index) => (
          <Item key={index}>
            {item.name} ×{item.count}
          </Item>
        ))}
      </List>
      <StyledPencilImage src="receipt.png" />
    </ShoppingListContainer>
  );
};

const ShoppingListContainer = styled.div`
  padding: 20px 0;
  width: 350px;
  height: 600px;
  text-align: center;
  box-shadow: 0 0px 8px #f7f1f1, 4px 4px 8px rgb(0 0 0 / 24%);

  margin: 2em auto;
  padding: 2.5em; /*内側余白*/
  background-color: #f7f1f1; /*背景色*/
  position: relative;
  &:after {
    position: absolute;
    content: "";
    right: 0px;
    top: 0px;
    border-width: 0 40px 40px 0;
    border-style: solid;
    border-color: #ccc #f8edd1 #e9691f;
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15);
  }
`;
const Title = styled.h3`
  font-size: 33px;
  color: #e9691f;
  letter-spacing: 2px;
  font-family: fantasy;
`;
const List = styled.ul`
  list-style: none;
  font-size: 18px;
  margin-top: 20px;
  padding: 0 20px;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  letter-spacing: 1px;
`;
const StyledPencilImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 120px;
  width: auto;
`;
const Item = styled.li`
  margin-bottom: 10px;
  padding-left: 25px;
`;
