import React from "react"
import StyledButton, { StyledSearchButton } from "./style"

const Button = ({ children, content }) => {
  return (
    <StyledButton>
      {children} {content}
    </StyledButton>
  )
}

export default Button

export const SearchButton = ({ text, color, clicked }) => {
  return (
    <StyledSearchButton color={color} onClick={clicked}>
      {text ? text : ""}
    </StyledSearchButton>
  )
}
