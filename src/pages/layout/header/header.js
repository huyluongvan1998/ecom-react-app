import "primeicons/primeicons.css";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Navbar,
  NavbarCenter,
  NavbarHeader,
  NavbarLogo,
  NavItem,
  NavList,
  CartValue,
  CartContainer,
} from "./style";

import StyledLink from "../../../components/link/index";
import { CartAmountSelector } from "../../../store/modules/product/selector";
import useLocalStorage from "hooks/localHook";

const Header = () => {
  const cartAmount = useSelector(CartAmountSelector);
  const [cartAmountValue, setCartAmountValue] = useLocalStorage(
    "cartAmount",
    0
  );

  useEffect(() => {
    setCartAmountValue(cartAmount);
  }, [cartAmount, setCartAmountValue]);
  return (
    <Navbar>
      <NavbarCenter>
        <NavbarHeader>
          <NavbarLogo />
          <NavList>
            <NavItem>
              <StyledLink path="home"> Home </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink path="about"> About </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink path="product"> Product </StyledLink>
            </NavItem>
          </NavList>
          <NavList>
            <StyledLink path="cart">
              <NavItem large grey>
                <CartContainer>
                  <i className="pi pi-shopping-cart"></i>
                  <CartValue>{cartAmountValue}</CartValue>
                  Cart
                </CartContainer>
              </NavItem>
            </StyledLink>
            <StyledLink path="home">
              <NavItem large grey>
                <i className="pi pi-user-plus"></i>
                Login
              </NavItem>
            </StyledLink>
          </NavList>
        </NavbarHeader>
      </NavbarCenter>
    </Navbar>
  );
};

export default Header;
