import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import { connect } from "react-redux";

import ProductPopup from "./ProductPopup";
import Card from "./Card";

const ProductCardContainer =styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    top: -32px;
    width: 60%;
    justify-content: space-around;

    &::after {
        height: 0;
        width: 65%;
        content: "";
    }

    @media (max-width: 768px) {
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        width: 100%;
        top: 32px;
    }
`


const ProductList = ({ products = [] }) => {
    return (
        <ProductCardContainer>
            {products && products.map(item => {
                const modalBody = (
                    <ProductPopup
                        id={item.id}
                        previewURL={item.previewURL}
                        imageLink={item.webformatURL}
                        desc={desc}
                        title={item.user}
                        price={item.views}
                        tags={item.tags}
                    />
                )
                return (
                    <Card key={item.id}
                        id={item.id}
                        title={item.user}
                        imgURL={item.previewURL}
                        alt={item.tags}
                        price={item.views}
                        modalBody={modalBody}
                    />
                )
            })}
        </ProductCardContainer>
    )
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired
}

export default connect(
    state => ({
        products: state.product.products
    }),
    null
)(ProductList)

const desc = `
It is a long established fact that a reader will be
 distracted by the readable content of a page
 when looking at its layout. The point of using Lorem
 `