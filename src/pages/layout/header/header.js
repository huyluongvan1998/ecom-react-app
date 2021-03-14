import "primeicons/primeicons.css";
import React from "react";
import {
    Navbar,

    NavbarCenter, NavbarHeader,

    NavbarLogo,

    NavItem, NavList
} from "./style";

import  StyledLink  from "../../../components/link/index";


const header = () => {
  return (
    <Navbar>
      <NavbarCenter>
        <NavbarHeader>
          <NavbarLogo />
          <NavList>
            <NavItem>
               <StyledLink path='Home'> Home </StyledLink> 
            </NavItem>
            <NavItem>
                <StyledLink path='About'> About </StyledLink> 
            </NavItem>
            <NavItem>
                <StyledLink path='Product'> Product </StyledLink> 
            </NavItem>
          </NavList>
          <NavList>
            <NavItem large grey>
              <i className="pi pi-shopping-cart"></i>
              Cart
            </NavItem>
            <NavItem large grey>
              <i className="pi pi-user-plus"></i>
              Login
            </NavItem>
          </NavList>
        </NavbarHeader>
      </NavbarCenter>
    </Navbar>
  );
};

export default header;
