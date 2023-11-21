import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  width: 50px;
`;
const Image = styled.img`
  width: 100%;
`;
const NumOfFoodsText = styled.p`
  position: absolute;
  right: -15px;
  bottom: -5px;
  border: black 1px solid;
  background-color: white;
`;

function FoodList() {
  return (
    <div className="food-list">
      <div>
        <ImageContainer>
          <Image src="/egg.png" alt="卵" />
          <NumOfFoodsText>×20</NumOfFoodsText>
        </ImageContainer>
      </div>
    </div>
  );
}
export default FoodList;
