import React from 'react'
import 'primeicons/primeicons.css';

import { 
    Navbar,
    NavbarHeader,
    NavbarCenter,
    NavbarLogo,
    NavList,
    NavItem,
 } from "./style";

const header = () => {
    return (
        <Navbar>
            <NavbarCenter>
                <NavbarHeader>
                    <NavbarLogo />
                        <NavList>
                            <NavItem>Home</NavItem>
                            <NavItem>About</NavItem>
                            <NavItem>Products</NavItem>
                        </NavList>
                        <NavList>
                            <NavItem large grey>
                            <i className="pi pi-shopping-cart"></i>
                                Cart</NavItem>
                            <NavItem large grey>
                                <i className='pi pi-user-plus'></i>
                                Login</NavItem>
                        </NavList>
                </NavbarHeader>
            </NavbarCenter>
        </Navbar>
    )
}

export default header
