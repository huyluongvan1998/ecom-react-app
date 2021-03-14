import React, { useEffect } from 'react'
import Toolbar from '../../components/toolbar/toolbar';
import {
        Container,
        GridContainer,
        SideBar,
        SideBarContainer
    } from "./style";
import { fetchProduct } from "../../store/modules/product/slice";
import { useDispatch, useSelector } from "react-redux";
import { ProductSelector } from "../../store/modules/product/selector";

const ProductPage = () => {
    const dispatch = useDispatch();

    useSelector(ProductSelector)
    useEffect(() => {
        
        console.log('test ');
    })
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
