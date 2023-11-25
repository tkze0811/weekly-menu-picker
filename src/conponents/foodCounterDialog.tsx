import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.05);
`;

export const FoodCounterDialog = () => {
  return (
    <>
      <Overlay />
      <div></div>
    </>
  );
};
