import styled from "styled-components";
import React, { forwardRef, useState } from "react";

type Props = {
  closeDialog: () => void;
  ref: HTMLDialogElement;
};
export const LunchMenuDialog = forwardRef<HTMLDialogElement, Props>(
  ({ closeDialog }, ref) => {
    return (
      <Dialog ref={ref} onClick={closeDialog}>
        <DialogContainer onClick={(e) => e.stopPropagation()}></DialogContainer>
      </Dialog>
    );
  }
);

const Dialog = styled.dialog`
  width: 500px;
  height: 500px;
  background-color: white;
  border: 1px solid black;
  padding: 20px;
`;
const DialogContainer = styled.div``;
