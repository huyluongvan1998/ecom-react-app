import React from "react"
import { ToolbarContainer, ToolbarCenter } from "./style"
const Toolbar = ({ Path, Page, Route }) => {
  return (
    <ToolbarContainer>
      <ToolbarCenter>
        <h3>
          {Path} / {Page} {`${Route ? `/${Route}` : ""} `}
        </h3>
      </ToolbarCenter>
    </ToolbarContainer>
  )
}

export default Toolbar
