import React from "react";
import { useDispatch } from "react-redux";
import { toggleShow } from "store/modules/product/slice";

import {
  BackDrop,
  ButtonHolder,
  ModalContent,
  ModalTitle,
  StyledModal,
  StyledButton,
} from "./style";

const Modal = ({ content, title, clicked, icon }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <StyledModal>
        <ModalTitle>
          <i className={`pi ${icon ? icon : ""}`} />
        </ModalTitle>
        <ModalContent>
          <h3>{title}</h3>
          <span>{content}</span>
        </ModalContent>
        <ButtonHolder>
          <StyledButton onClick={clicked}>Confirm</StyledButton>
          <StyledButton
            cancel
            onClick={() => {
              dispatch(toggleShow());
            }}
          >
            Cancel
          </StyledButton>
        </ButtonHolder>
      </StyledModal>

      <BackDrop />
    </div>
  );
};

export default Modal;
