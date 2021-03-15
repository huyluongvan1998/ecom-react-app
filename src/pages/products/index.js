import React, { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SearchButton } from "../../components/button"
import {
  ResetFilterButton,
  SearchCategoryButton,
} from "../../components/button/style"
import SelectOption from "../../components/select"
import Toolbar from "../../components/toolbar/toolbar"
import currencyHelper from "../../helper/currency"
import { SearchListHelper } from "../../helper/searchList"
import { ProductsSelector } from "../../store/modules/product/selector"
import { fetchAllProduct } from "../../store/modules/product/slice"
import {
  Container,
  GridContainer,
  PriceContainer,
  PriceTag,
  ProductContainer,
  ProductFooter,
  ProductGrid,
  ProductHeader,
  ProductImage,
  ProductSection,
  SearchColorContainer,
  SearchPrice,
  SearchText,
  SearchTitleStyled,
  SideBar,
  SideBarContainer,
} from "./style"

const ProductPage = () => {
  const dispatch = useDispatch()
  const products = useSelector(ProductsSelector)
  // search State;
  const [productArray, setProductArr] = useState([])
  const [filterState, setFilterState] = useState({
    searchText: "",
    searchCategory: "",
    searchCompany: "",
    searchColor: "",
    searchPrice: 309999,
  })
  // End Search State

  //Category List
  const categoryType = SearchListHelper("category")
  let categoryList = ([...categoryType] || []).map((cate, idx) => (
    <div key={idx}>
      <SearchCategoryButton
        onClick={(e) =>
          setFilterState((prev) => ({
            ...prev,
            searchCategory: cate,
          }))
        }
      >
        {cate}
      </SearchCategoryButton>
    </div>
  ))
  //CategoryList

  // Company List
  const companyType = SearchListHelper("company")
  let companyList = [...companyType]
  // Company List

  //Color List
  const colorType = SearchListHelper("color")
  let colorList = ([...colorType] || []).map((color, idx) => (
    <SearchButton
      key={idx}
      color={color}
      clicked={(e) =>
        setFilterState((prev) => ({
          ...prev,
          searchColor: color,
        }))
      }
      text={color === "All" ? color : ""}
    ></SearchButton>
  ))
  //Color List

  // Submit Function
  const resetState = () => {
    setFilterState({
      searchText: "",
      searchCategory: "All",
      searchCompany: "All",
      searchColor: "All",
      searchPrice: 309999,
    })
  }

  const filterProduct = useCallback(() => {
    let temp_arr = products || []
    console.log(filterState.searchText)
    //______________________________________________________Search by condition_______________________________________________________
    if (filterState.searchText) {
      temp_arr = temp_arr.filter((p) =>
        p.name.toLowerCase().includes(filterState.searchText.toLowerCase())
      )
    }
    if (filterState.searchCategory) {
      temp_arr =
        filterState.searchCategory !== "All"
          ? temp_arr.filter((p) => p.category === filterState.searchCategory)
          : temp_arr
    }
    if (filterState.searchCompany) {
      temp_arr =
        filterState.searchCompany !== "All"
          ? temp_arr.filter((p) => p.company === filterState.searchCompany)
          : temp_arr
    }
    if (filterState.searchColor) {
      temp_arr =
        filterState.searchColor !== "All"
          ? temp_arr.filter((p) => p.colors.includes(filterState.searchColor))
          : temp_arr
    }
    if (filterState.searchPrice) {
      temp_arr = temp_arr.filter((p) => p.price <= filterState.searchPrice)
    }
    setProductArr(temp_arr)
  }, [filterState, products])
  //______________________________________________________Search by condition_______________________________________________________

  //*****************************************Initial Function ***************************************** */
  useEffect(() => {
    dispatch(fetchAllProduct())
  }, [dispatch])

  useEffect(() => {
    if (products.length > 0) {
      setProductArr([...products])
    }
  }, [products])

  useEffect(() => {
    filterProduct()
  }, [filterProduct, filterState])
  //*****************************************Initial Function ***************************************** */

  let productCard =
    productArray.length > 0 ? (
      (productArray || []).map((product) => (
        <ProductContainer key={product.id}>
          <ProductHeader>
            <ProductImage src={product.image}></ProductImage>
          </ProductHeader>
          <ProductFooter>
            <h5 style={{ marginBottom: " 0px", fontWeight: "400" }}>
              {product.name.toUpperCase()}
            </h5>
            <PriceContainer>${currencyHelper(product.price)}</PriceContainer>
          </ProductFooter>
        </ProductContainer>
      ))
    ) : (
      <div>
        <h4>Sorry No Product Meet Your Search !</h4>
      </div>
    )

  return (
    <div>
      <Toolbar Path="Home" Page="Product" />
      <Container>
        <GridContainer>
          <SideBarContainer>
            <SideBar>
              {/* Search Function */}

              <SearchText
                name="searchText"
                placeholder="Search"
                id="searchText"
                type="text"
                value={filterState.searchText}
                onChange={(e) =>
                  setFilterState((prev) => ({
                    ...prev,
                    searchText: e.target.value,
                  }))
                }
              />

              {/* search By category */}
              <SearchTitleStyled>Category</SearchTitleStyled>
              {categoryList}

              {/* search By company */}
              <SearchTitleStyled>Company</SearchTitleStyled>
              <SelectOption
                name="companySearch"
                id="companySearch"
                options={companyList}
                handleChange={(e) =>
                  setFilterState((prev) => ({
                    ...prev,
                    searchCompany: e.target.value,
                  }))
                }
              />

              <br />
              {/* search By color */}
              <SearchColorContainer>
                <SearchTitleStyled>Color: </SearchTitleStyled>
                {colorList}
              </SearchColorContainer>

              {/* search By Price */}
              <SearchTitleStyled>Price </SearchTitleStyled>
              <PriceTag>${currencyHelper(filterState.searchPrice)}</PriceTag>
              <br />
              <SearchPrice
                type="range"
                name="price"
                min="0"
                max="309999"
                id="priceValue"
                value={filterState.searchPrice}
                onChange={(e) =>
                  setFilterState((prev) => ({
                    ...prev,
                    searchPrice: e.target.value,
                  }))
                }
              />
              <br />
              <label>
                FreeShipping
                <input
                  type="checkbox"
                  id="freeship"
                  name="freeship"
                  value="freeshiping"
                />
              </label>
              <ResetFilterButton onClick={() => resetState()}>
                Clear Filter
              </ResetFilterButton>
            </SideBar>
          </SideBarContainer>

          {/* PRODUCT SECTIONS */}
          <ProductSection>
            <ProductGrid>{productCard}</ProductGrid>
          </ProductSection>
        </GridContainer>
      </Container>
    </div>
  )
}

export default ProductPage
