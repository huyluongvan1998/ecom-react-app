import { Link } from "react-router-dom"
import styled from "styled-components"

export const PageContainer = styled.div`
  min-height: calc(80vh - 10rem);
  width: 95vw;
  margin: 0 auto;
  max-width: 1170px;
  padding: 5rem 0;
`

export const BackHomeLink = styled(Link)`
  text-transform: uppercase;
  background: #ab7a5f;
  color: #eaded7;
  padding: 0.75rem 0.9rem;
  letter-spacing: 0.1rem;
  display: inline-flex;
  font-weight: 400;
  transition: all 0.3s linear;
  font-size: 0.875rem;
  cursor: pointer;
  box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
  border-radius: 0.25rem;
  position: relative;
  right: 35em;
  border-color: transparent;
`
export const ProductGrid = styled.div`
  grid-template-columns: 1fr 1fr;
  align-items: center;
  display: grid;
  gap: 4rem;
  margin-top: 2rem;
`

export const Image = styled.img`
  width: 100%;
  display: block;
  border-radius: 0.25rem;
  object-fit: cover;
`

export const ImageHolder = styled(Image)`
  height: 500px;
`

export const GalleryContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;

  & > img {
    height: 75px;
  }
`
export const ContentHolder = styled.section`
  text-align: left;
`

export const ProductTitle = styled.h2`
  font-size: 2.5em;
  letter-spacing: 0.1rem;
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
`
export const PriceTag = styled.h5`
  font-size: 2.5rem;
  color: #ab7a5f;
`

export const StyledParagraph = styled.p`
  line-height: 2;
  max-width: 45em;
  margin-bottom: 1.25rem;
`
export const SubTitle = styled.span`
  font-weight: 700;
`
export const ContentSubTitle = styled.p`
  text-transform: capitalize;
  width: 300px;
  display: grid;
  grid-template-columns: 125px 1fr;
  margin: 1.25rem 0;
`
export const StyledBreak = styled.hr`
  border-top: 2px solid #bcccdc;
`
export const ColorButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: ${(props) =>
    props.color ? `${props.color}` : "rgb(34, 34, 34)"};
  margin-right: 0.5rem;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ColorButtonContainer = styled.div`
  display: flex;
`
export const ColorContainer = styled.div`
  text-transform: capitalize;
  width: 300px;
  display: grid;
  grid-template-columns: 125px 1fr;
  margin: 1.25rem 0;
`

export const AmountContainer = styled.div`
  display: grid;
  width: 140px;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
`

export const LogicButton = styled.button`
  background: transparent;
  border-color: transparent;
  cursor: pointer;
  padding: 1rem 0px;
  width: 2rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const AmountValue = styled.h2`
  line-height: 1;
  font-size: 2.5rem;
`
export const CartButton = styled(Link)`
  text-transform: uppercase;
  background: #ab7a5f;
  color: #eaded7;
  padding: 0.375rem 0.75rem;
  letter-spacing: 0.1rem;
  display: inline-block;
  font-weight: 400;
  transition: all 0.3s linear;
  font-size: 0.875rem;
  cursor: pointer;
  box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
  border-radius: 0.25rem;
  border-color: transparent;
`
