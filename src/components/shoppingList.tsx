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
      <StyledPencilImage src="catswalk.png" />
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
  bottom: 10px;
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
  font-size: 33px;
  margin-left: 30px;
  color: #e9691f;
  letter-spacing: 3px;
  font-family: fantasy;
`;
const List = styled.ul`
  list-style: none;
  font-size: 18px;
  margin-top: 10px;
  padding: 0 20px;
  width: 300px;
  height: 100px;
  text-align: left;
`;
const StyledPencilImage = styled.img`
  height: 50px;
  width: 400px;
  margin-left: 40px;
`;
const Item = styled.li`
  height: 27px;
  width: 300px;
  flex-wrap: wrap;
  letter-spacing: 2px;
  color: #8a3d17;
`;
