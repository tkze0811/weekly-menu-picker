import React from "react";
import styled from "styled-components";

type Props = {
  className?: string;
};

const ShoppingListContainer = styled.div`
  width: 300px;
  height: 500px;
`;

export const ShoppingList = ({ className }: Props) => {
  return (
    <ShoppingListContainer className={className}>
      <h3>買うものリスト</h3>
      <ul>
        <li>じゃがいも ×3</li>
        <li>バター ×3</li>
        <li>トマト ×3</li>
      </ul>
    </ShoppingListContainer>
  );
};
