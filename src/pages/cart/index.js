import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Toolbar from "../../components/toolbar/toolbar"
import currencyHelper from "../../helper/currency"
import {
  // CartAmountSelector,
  CartProductSelector,
  TotalSelector,
} from "../../store/modules/product/selector"
import {
  productDecrement,
  productIncrement,
  subTotal,
  deleteProduct,
  deleteAll
} from "../../store/modules/product/slice"
import {
  CartAmountContainer,
  CartAmountValue,
  CartLogicButton,
  ColorCube,
  Container,
  ContentHeader,
  MainContainer,
  ProductContainer,
  ProductTitle,
  StyledBreakBar,
  RemoveButton,
  LinkContainer,
  ContinueButton,
  TotalContainer,
  PriceTag,
  PriceValue,
} from "./style"
const CartPage = () => {
  // const cartAmount = useSelector(CartAmountSelector)
  const cartProduct = useSelector(CartProductSelector)
  const dispatch = useDispatch()
  const total = useSelector(TotalSelector)
  
  //Calculate Total Price
  useEffect(() => {
    dispatch(subTotal())
  }, [cartProduct, dispatch])
// Calculate Total Price

  const cartProducts =
    cartProduct.length > 0 ? (
      (cartProduct || []).map((product, idx) => (
        <ProductContainer key={idx}>
          <ProductTitle>
            <img src={product.images[0].url} alt="err" />
            <div>
              <h5>{product.name}</h5>
              <p>
                Color: <ColorCube></ColorCube>
              </p>
            </div>
          </ProductTitle>
          <PriceValue>${currencyHelper(product.price)}</PriceValue>
          <CartAmountContainer>
            <CartLogicButton
              className="pi pi-minus"
              onClick={() => {
                dispatch(productDecrement(product.id))
              }}
            />
            <CartAmountValue>{product.amount} </CartAmountValue>
            <CartLogicButton
              className="pi pi-plus"
              onClick={() => {
                dispatch(productIncrement(product.id))
              }}
            />
          </CartAmountContainer>
          <PriceTag>${currencyHelper(product.amount * product.price)}</PriceTag>
          <RemoveButton className="pi pi-trash" onClick={() => dispatch(deleteProduct(product.id))} />
        </ProductContainer>
      ))
    ) : (
      <div>Your Cart Is Empty!</div>
    )

  return (
    <div>
      <Toolbar Page="Cart" Path="Home" />
      <MainContainer>
        <Container>
          <div style={{ display: "block" }}>
            <ContentHeader>
              <h5>Item</h5>
              <h5>Price</h5>
              <h5>Quantity</h5>
              <h5>Subtotal</h5>
              <span></span>
            </ContentHeader>
            <StyledBreakBar />

            {cartProducts}

            <StyledBreakBar />
            <LinkContainer>
              <ContinueButton to="/product">Continue Shopping</ContinueButton>
              <button onClick={() => dispatch(deleteAll())}>Clear Shopping Cart</button>
            </LinkContainer>
            <TotalContainer>
              <div>
                <article>
                  <h5>
                    Sub Total: <span>${currencyHelper(total)}</span>
                  </h5>
                  <p>
                    Shipping Fee: <span>$5.34</span>
                  </p>
                  <StyledBreakBar />
                  <h4>
                    Order Total: <span>${currencyHelper(total + 534)}</span>
                  </h4>
                </article>
              </div>
            </TotalContainer>
          </div>
        </Container>
      </MainContainer>
    </div>
  )
}

export default CartPage
