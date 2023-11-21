import React from "react";
import styled from "styled-components";

type Props = {
  imageName: string;
  imageSrc: string;
  count: number;
};
const ImageContainer = styled.div`
  cursor: pointer;
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

function FoodItem(props: Props) {
  const { imageName, imageSrc, count } = props;
  return (
    <div className="food-list">
      <div>
        <ImageContainer>
          <Image src={imageSrc} alt={imageName} />
          <NumOfFoodsText>×{count}</NumOfFoodsText>
        </ImageContainer>
      </div>
    </div>
  );
}
export default FoodItem;
