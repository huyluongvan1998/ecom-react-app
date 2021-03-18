import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Toolbar from "../../components/toolbar/toolbar";
import ConvertStarHelper from "../../helper/starReview";
import currencyHelper from "../../helper/currency";
import {
  BackHomeLink,
  PageContainer,
  ProductGrid,
  ImageHolder,
  GalleryContainer,
  Image,
  ProductTitle,
  PriceTag,
  ContentHolder,
  StyledParagraph,
  ContentSubTitle,
  SubTitle,
  StyledBreak,
  ColorButton,
  ColorButtonContainer,
  AmountContainer,
  LogicButton,
  AmountValue,
  ColorContainer,
  CartButton,
} from "./style";
import {
  fetchProduct,
  increment,
  decrement,
  addToCart,
  checkProductId,
} from "../../store/modules/product/slice";
import {
  ProductSelector,
  AmountSelector,
  LoadingSelector,
} from "../../store/modules/product/selector";
const ProductDetail = ({ match }) => {
  // GET PARAMS FROM URL AND DISPATCH
  const paramsUrl = match.params.id;
  const dispatch = useDispatch();

  // USE SELECTOR SECTION
  const product = useSelector(ProductSelector);
  const isLoading = useSelector(LoadingSelector);
  const amount = useSelector(AmountSelector);
  // USE SELECTOR SECTION

  const starReview = ConvertStarHelper(product.stars);

  const [currentImage, setCurrentImage] = useState();

  //GET Product By ID in the INITIAL STATE;
  useEffect(() => {
    dispatch(fetchProduct(paramsUrl));
  }, [dispatch, paramsUrl]);

  useEffect(() => {
    if (product && product.images && product.images.length > 0) {
      setCurrentImage(product.images[0].url);
    }
  }, [product]);
  //USEEFFECT SECTION
  const productDetails = !isLoading ? (
    <section>
      <ImageHolder
        src={product.images ? currentImage : "loading..."}
        alt="err"
      ></ImageHolder>
      <GalleryContainer>
        {(product.images || []).map((img) => (
          <Image
            key={img.id}
            src={img.url}
            alt="err"
            onClick={() => setCurrentImage(img.url)}
          />
        ))}
      </GalleryContainer>
    </section>
  ) : (
    <div>loading...</div>
  );

  return (
    <div>
      <Toolbar Path="Home" Page="Product" Route="Name" />
      <PageContainer>
        <BackHomeLink to="/product">Back To Products</BackHomeLink>
        {/* Product Session */}
        {!isLoading && (
          <ProductGrid>
            {/* Product Details (IMG and Gallery) */}
            {productDetails}
            {/* Product Details (IMG and Gallery) */}

            {/* Product Content Section */}
            <ContentHolder>
              <ProductTitle>{product.name} </ProductTitle>
              {/* Printing Stars */}
              {starReview.map((el, idx) =>
                el === 1 ? (
                  <i key={idx} className="fa fa-star" />
                ) : el === 2 ? (
                  <i key={idx} className="fa fa-star-half-o" />
                ) : el === 3 ? (
                  <i key={idx} className="fa fa-star-o" />
                ) : null
              )}
              {/* Printing Stars */}
              <StyledParagraph>
                {" "}
                ({product.reviews} customer reviews){" "}
              </StyledParagraph>
              <PriceTag>${currencyHelper(product.price)} </PriceTag>
              <StyledParagraph>{product.description} </StyledParagraph>

              {/* SubContent Section */}
              <ContentSubTitle>
                <SubTitle>Available: </SubTitle>
                {product.stock > 0 ? "In Stock" : "Out Of Stock"}{" "}
              </ContentSubTitle>
              <ContentSubTitle>
                <SubTitle>SKU: </SubTitle>
                {product.id}{" "}
              </ContentSubTitle>
              <ContentSubTitle>
                <SubTitle>Brand: </SubTitle>
                {product.company}{" "}
              </ContentSubTitle>

              <StyledBreak />

              {/* Color and Amount Section */}
              <ColorContainer>
                <SubTitle>Colors: </SubTitle>
                <ColorButtonContainer>
                  {(product.colors || []).map((color) => (
                    <ColorButton key={color} color={color} />
                  ))}{" "}
                </ColorButtonContainer>
              </ColorContainer>

              <AmountContainer>
                <LogicButton
                  className="pi pi-minus"
                  onClick={() => dispatch(decrement())}
                ></LogicButton>
                <AmountValue>{amount}</AmountValue>
                <LogicButton
                  className="pi pi-plus"
                  onClick={() => dispatch(increment())}
                ></LogicButton>
              </AmountContainer>

              <CartButton onClick={() => dispatch(checkProductId(product))}>
                Add To Cart
              </CartButton>
            </ContentHolder>
          </ProductGrid>
        )}
      </PageContainer>
    </div>
  );
};

export default ProductDetail;
