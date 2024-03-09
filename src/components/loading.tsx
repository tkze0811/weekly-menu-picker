import React from "react";
import styled, { keyframes } from "styled-components";

type Props = {
  className?: string;
};

export const Loading = ({ className }: Props) => {
  return (
    <LoadingContainer>
      <></>
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
const LoadingContainer = styled.div`
  animation: ${fadeIn} 0.5s 3s ease-in-out forwards;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vw;
  background-color: #9ccbf4;
`;
