import React from "react";
import styled, { keyframes } from "styled-components";

type Props = {
  className?: string;
};

export const Loading = ({ className }: Props) => {
  return (
    <LoadingContainer>
      <LoadingImg src="nezumicart2.png" />
      <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 1;
  }
  to {
    display: none;
    opacity: 0;
  }
`;
const slidein = keyframes`
from {
  margin-left: -10%;
}   
to{
  margin-left: 10%;
   
}
`;
const LoadingContainer = styled.div`
  animation: ${fadeIn} 0.5s 3s ease-in-out forwards;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #e9691f;
  position: absolute;
`;
const LoadingImg = styled.img`
  animation: 3.5s linear infinite ${slidein};
  height: 150px;
  width: 230px;
  position: absolute;
  top: 40%;
  left: 40%;
`;
const LoadingText = styled.div`
  font-size: 35px;
  color: #fbf1d9;
  font-weight: 700;
  letter-spacing: 0.1em;
  position: absolute;
  top: 59%;
  left: 45%;
`;
