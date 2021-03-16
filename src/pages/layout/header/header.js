import "primeicons/primeicons.css"
import React from "react"
import {
  Navbar,
  NavbarCenter,
  NavbarHeader,
  NavbarLogo,
  NavItem,
  NavList,
} from "./style"

import StyledLink from "../../../components/link/index"

const header = () => {
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
                <i className="pi pi-shopping-cart"></i>
                Cart
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
  )
}

export default header
