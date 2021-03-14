import styled from "styled-components";

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
