import React from "react";
import styled from "styled-components";

type Props = {
  className?: string;
};

export const ShoppingList = ({ className }: Props) => {
  return (
    <ShoppingListContainer className={className}>
      <h3>買うものリスト</h3>
      <List>
        <li>じゃがいも ×3</li>
        <li>バター ×3</li>
        <li>トマト ×3</li>
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
