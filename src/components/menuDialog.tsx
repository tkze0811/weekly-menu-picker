import React, { forwardRef, useState } from "react";
import styled from "styled-components";

type Props = {
  ref: HTMLDialogElement;
  closeDialog: () => void;
};

export const MenuDialog = forwardRef<HTMLDialogElement, Props>(
  ({ closeDialog }, ref) => {
    return (
      <Dialog ref={ref} onClick={closeDialog}>
        <MenuDialogContainer>
          <DialogHeader></DialogHeader>
          <Title>MENU</Title>
        </MenuDialogContainer>
      </Dialog>
    );
  }
);

const Dialog = styled.dialog`
  z-index: 1;
  position: absolute;
  margin: auto;
  width: 1000px;
  height: 700px;
  border-radius: 40px;
  border: none;
  background-color: #588f5e;
`;
const MenuDialogContainer = styled.div``;
const DialogHeader = styled.div``;
const Title = styled.div`
  font-size: 45px;
  font-family: fantasy;
  color: #f7efdc;
  margin-left: 30px;
  margin-top: 20px;
`;
