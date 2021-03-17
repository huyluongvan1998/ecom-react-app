import styled from "styled-components";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const StyledModal = styled.div`
  height: 10em;
  width: 15em;
  font-size: 2rem;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -200px;
  z-index: 9999;
  background: white;
`;
