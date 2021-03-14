import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

export const CustomLink = styled(Link)`
        color: #324d67;
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        text-decoration: none;
    `
const StyledLink = ({path, children}) => {


    return (
        <CustomLink to={`/${path}`} >
                {children}
        </CustomLink>
    )
}

export default StyledLink
