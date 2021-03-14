import React from "react";
import Button from "../../components/button/index";
import { Content, ContentHolder, ContentTitle, GridContainer } from "./style";
const Home = () => {
  return (
    <div>
      <GridContainer>
        <ContentHolder>
          <ContentTitle>
            Design Your <br /> Comfort Zone
          </ContentTitle>
          <Content>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </Content>
          <Button content="SHOP NOW" />
        </ContentHolder>
        <img
          src="https://file.hstatic.net/1000360516/file/mua_do_noi_that_tra_gop_133596d9d80d44a0a9c33c3920c99980_grande.jpg"
          alt="err"
        ></img>
      </GridContainer>
    </div>
  );
};

export default Home;
