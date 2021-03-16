import styled from "styled-components";

export const toolbar = styled.div`
    background: #eaded7;
    width: 100%;
    min-height: 20vh;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: #453227;
`
export const toolbarCenter = styled.div`
    width: 90vw;
    margin: 0 auto;
    max-width: 100vw;
`

export const GridContainer = styled.section`
  height: calc(100vh - 5rem);
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  min-height: 60vh;
  display: grid;
  place-items: center;
  margin: 0 auto;
  max-width: 1170px;
`;

export const ContentHolder = styled.article`
  text-align: left;
`;

export const ContentTitle = styled.h1`
  font-size: 3em;
`;
export const Content = styled.p`
  font-size: 1.25rem;
  line-height: 2;
  max-width: 45em;
  margin-bottom: 2rem;
  color: #617d98;
`;
