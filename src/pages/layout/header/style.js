import styled from 'styled-components';
import {ReactComponent  as Logo} from '../../../assets/images/brand-logo.svg';

export const Navbar = styled.header`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NavbarCenter = styled.div`
    width: 90vw;
    margin: 0px auto;
`

export const NavbarHeader = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NavbarLogo = styled(Logo)` 
    width: 40px;
    margin-left: -15px;
`

export const NavList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
`

export const NavItem = styled.li`
    color: #324d67;
    font-size: ${props => props.large ? '1.5rem' : '1rem' } ;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    padding: 0.5rem;
    
`
