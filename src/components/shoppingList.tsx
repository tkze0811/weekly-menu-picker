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
      <Title>買うものリスト</Title>
      <List>
        {shoppingList.map((item, index) => (
          <Item key={index}>
            {item.name} ×{item.count}
          </Item>
        ))}
      </List>
    </ShoppingListContainer>
  );
};

const ShoppingListContainer = styled.div`
  padding: 20px 0;
  width: 300px;
  height: 500px;
  text-align: center;
  background-color: #f4ffff;
`;
const Title = styled.h3`
  font-size: 24px;
`;
const List = styled.ul`
  list-style: none;
  font-size: 18px;
  margin-top: 20px;
  padding: 0 20px;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
`;
const Item = styled.li`
  margin-bottom: 10px;
  padding-left: 25px;
  background: url("toriniku.png") left 0px top 10px no-repeat;
`;
