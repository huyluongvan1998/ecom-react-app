import React from "react";
import { ToolbarContainer, ToolbarCenter } from "./style";
const Toolbar = ({ Path, Page }) => {
  return (
    <ToolbarContainer>
      <ToolbarCenter>
        <h3>
          {Path} / {Page}
        </h3>
      </ToolbarCenter>
    </ToolbarContainer>
  );
};

export default Toolbar;
