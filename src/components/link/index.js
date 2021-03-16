import React from "react"
import { CustomLink } from "./style"

const StyledLink = ({ path, children }) => {
  return <CustomLink to={`/${path}`}>{children}</CustomLink>
}

export default StyledLink
