import React from "react";
import styled from "styled-components";

  const Footer = styled.footer`
    height: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #222;
    text-align: center;
  `;
  const FooterTitle = styled.h5`
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
    color: ${(props) => (props.brown ? "#ab7a5f" : "#fff")};
  `;
  const FooterContent = styled.h5`
    color: #fff;
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  `;
  
const footer = () => {

  return (
    <Footer>
      <FooterTitle>© </FooterTitle>
      <FooterTitle brown> Jack's Store </FooterTitle>
      <FooterContent>All Right Reserved </FooterContent>
    </Footer>
  );
};

export default footer;
