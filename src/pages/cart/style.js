import { Link } from "react-router-dom"
import styled from "styled-components"
import {
  StyledBreak,
  LogicButton,
  AmountValue,
  AmountContainer,
} from "../productDetails/style"

export const MainContainer = styled.main`
  min-height: calc(80vh - 10rem);
`

export const Container = styled.section`
  width: 95vw;
  margin: 0 auto;
  padding: 5rem 0;
  max-width: 1170px;
`
export const ContentHeader = styled.div`
  display: grid;
  grid-template-columns: 316px 1fr 1fr 1fr auto;
  justify-items: center;
  column-gap: 1rem;

  & > h5 {
    font-weight: 400;
    color: #617d98;
  }
`
export const StyledBreakBar = styled(StyledBreak)`
  margin-top: 1rem;
  margin-bottom: 3rem;
`

export const ProductContainer = styled.article`
  grid-template-columns: 1fr 1fr 1fr 1fr auto;
  align-items: center;
  grid-template-rows: 75px;
  display: grid;
  gap: 3rem 1rem;
  place-items: center;
  margin-bottom: 3rem;
`
export const PriceValue = styled.h5`
  display: block;
  font-size: 1rem;
  color: #ab7a5f;
  font-weight: 400;
`

export const ProductTitle = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 100px 200px;
  align-items: center;
  gap: 1rem;
  text-align: left;
  grid-template-rows: 75px;

  & > img {
    height: 100%;
    width: 100%;
    display: block;
    border-radius: 0.25rem;
    object-fit: cover;
  }
  & > div {
    text-align: left;

    & > h5 {
      font-size: 0.85rem;
    }
    & > p {
      font-size: 0.85rem;
    }
  }
`

export const ColorCube = styled.span`
  width: 0.75rem;
  height: 0.75rem;
  display: inline-block;
  margin-left: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.85rem;
  background: ${(props) =>
    props.color ? `${props.color}` : "rgb(255, 0, 0);"};
`

export const CartLogicButton = styled(LogicButton)`
  font-size: 1rem;
`
export const CartAmountValue = styled(AmountValue)`
  font-size: 1.5rem;
`
export const CartAmountContainer = styled(AmountContainer)``

export const PriceTag = styled.h5`
  display: block;
  margin-bottom: 0px;
  color: #617d98;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  text-transform: capitalize;
  padding-left: 2em;
  line-height: 1.25;
`

export const RemoveButton = styled.button`
  color: #fff;
  border: transparent;
  letter-spacing: 0.1rem;
  background: #bb2525;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  cursor: pointer;
`
export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  & > button {
    border-color: transparent;
    background: #222;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    color: #fff;
    border-radius: 0.25rem;
    letter-spacing: 0.1rem;
    font-weight: 400;
    cursor: pointer;
  }
`

export const ContinueButton = styled(Link)`
  border-color: transparent;
  text-transform: capitalize;
  padding: 0.25rem 0.5rem;
  background: #ab7a5f;
  color: #fff;
  border-radius: 0.25rem;
  letter-spacing: 0.1rem;
  font-weight: 400;
  cursor: pointer;
`

export const TotalContainer = styled.section`
  justify-content: flex-end;
  margin-top: 3rem;
  display: flex;

  & > div {
    width: 40%;
    & > article {
      border: 1px solid #bcccdc;
      border-radius: 0.25rem;
      padding: 1.5rem 3rem;
      text-align: left;

      & > * {
        display: grid;
        grid-template-columns: 200px 1fr;
      }

      & > h4 {
        margin-top: 2rem;
        line-height: 1;
      }

      & > h5 {
        color: #102a42;
        text-transform: capitalize;
        line-height: 1.25;
        margin-bottom: 0.75rem;

        & > span {
          font-size: 1rem;
        }
      }
      & > p {
        text-transform: capitalize;

        margin-bottom: 1.25rem;
      }
    }
  }
`
