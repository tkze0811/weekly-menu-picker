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
      <h3>買うものリスト</h3>
      <List>
        {shoppingList.map((item, index) => (
          <li key={index}>
            {item.name} ×{item.count}
          </li>
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
`;
const List = styled.ul`
  margin-top: 20px;
  padding-left: 40px;
  padding-right: 20px;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
`;
