import React from "react"
import StyledButton, { StyledSearchButton } from "./style"

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>
}

export default Button

export const SearchButton = ({ text, color, clicked }) => {
  return (
    <StyledSearchButton color={color} onClick={clicked}>
      {text ? text : ""}
    </StyledSearchButton>
  )
}
