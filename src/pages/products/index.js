import React from 'react'
import Toolbar from '../../components/toolbar/toolbar';
import {
        Container,
        GridContainer,
        SideBar,
        SideBarContainer
    } from "./style";
import { fetchProduct } from "../../store/modules/product/slice";
import { useDispatch } from "react-redux";

const ProductPage = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <Toolbar  Path='Home' Page='Product' /> 
            <Container >
                <GridContainer>
                    <SideBarContainer>
                        <SideBar>
                            <button onClick={() => dispatch(fetchProduct())} >Fetch Test</button>
                        </SideBar>
                    </SideBarContainer>




                    {/* PRODUCT SECTIONS */}
                    <div>Product </div>
                </GridContainer>
            </Container>
        </div>
    )
}

export default ProductPage
