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

export const ModalTitle = styled.div`
  display: block;
  margin: 5px auto;
  font-size: 2.5em;
  text-align: center;
  border-bottom: 2px solid #bcccdc;

  & > h3,
  i {
    font-weight: bolder;
    letter-spacing: 0.1rem;
    color: #dc3545;
  }
`;

export const ModalContent = styled.div`
  margin: 0.5em auto;
  display: block;
  text-align: center;
  & > h3 {
    font-size: 1em;
    letter-spacing: 0.1rem;
    font-weight: bolder;
  }

  & > span {
    letter-spacing: 0.1rem;
  }
`;

export const ButtonHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row;
  width: 100%;
  margin: 0 auto;
`;

export const StyledButton = styled.button`
  padding: 20px;
  background: ${(props) => (props.cancel ? "#fff" : "#2196f3")};
  color: ${(props) => (props.cancel ? "#607D8B" : "#fff")};
  margin: 0 auto;
  border: none;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
`;
