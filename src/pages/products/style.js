import styled from "styled-components"

export const Container = styled.div`
  min-height: calc(80vh - 10rem);
`

export const GridContainer = styled.div`
  grid-template-columns: 200px 1fr;
  display: grid;
  gap: 3rem 1.5rem;
  margin: 4rem auto;
  width: 74%;
`

export const SideBarContainer = styled.section`
  text-align: left;
`

export const SideBar = styled.div`
  position: sticky;
  top: 1rem;
`

//product Container

export const ProductSection = styled.section``

export const ProductGrid = styled.div`
  grid-template-columns: repeat(3, 1fr);
  display: grid;
  gap: 2rem 1.5rem;
`

export const ProductContainer = styled.article``

export const ProductHeader = styled.div`
  position: relative;
  background: #222;
  border-radius: 0.25rem;
`

export const ProductImage = styled.img`
  width: 100%;
  height: 175px;
  display: block;
  object-fit: cover;
  border-radius: 0.25rem;
  transition: all 0.3s linear;
`

export const ProductDesc = styled.p`
  color: #ab7a5f;
  letter-spacing: 0.1rem;
`

export const ProductFooter = styled.footer`
  margin-top: 1rem;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`

export const PriceContainer = styled.span`
  color: #ab7a5f;
  letter-spacing: 0.1rem;
`
export const SearchTitleStyled = styled.h5`
  margin: 1em 0;
  letter-spacing: 0.1rem;
  text-transform: capitalize;
  line-height: 1.25;
`

export const SearchColorContainer = styled.div`
  margin: 2em 0;
  display: flex;
  align-items: center;
`

export const SearchText = styled.input`
  padding: 0.5rem;
  background: #f1f5f8;
  border-radius: 0.25rem;
  border-color: transparent;
  letter-spacing: 0.1rem;
`

export const PriceTag = styled.span`
  margin-bottom: 0.25rem;

  color: #324d67;
`

export const SearchPrice = styled.input`
  float: left;
`
