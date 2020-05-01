import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";

import Modal from "./Modal";
import ProductPopup from "./ProductPopup";
import Card from "./Card";

const ProductCardContainer =styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    top: -32px;
    width: 60%;
    min-width: 960px;
    justify-content: space-around;

    &::after {
        height: 0;
        width: 65%;
        content: "";
    }
`

const ProductCardList = styled.li`
    display: flex;
    flex-direction: column;
    flex: 0 0 25%;
    justify-content: space-around;
    align-items: center;
    max-width: 175px;
    min-height: 315px;
    background-color: #fff;
    box-sizing: boder-box;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),
                0px 1px 1px 0px rgba(0,0,0,0.14),
                0px 1px 3px 0px rgba(0,0,0,0.12);
    border-radius: 4px;
    margin-bottom: 16px;
    padding: 8px;
    box-sizing: border-box;
`;

const ProductList = ({ currentClickID, products }) => {
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
                    />
                )
                return (
                    <ProductCardList key={item.id}>
                        <Card
                            id={item.id}
                            title={item.user}
                            imgURL={item.previewURL}
                            alt={item.tag}
                            price={item.views}
                        />
                        {currentClickID === item.id &&
                            <Modal>
                                {modalBody}
                            </Modal>
                        }
                    </ProductCardList>
                )
            })}
        </ProductCardContainer>
    )
}
export default connect(
    state => ({
        currentClickID: state.product.currentClickID,
        products: state.product.products
    }),
null
)(ProductList)

const desc = `
It is a long established fact that a reader will be
 distracted by the readable content of a page
 when looking at its layout. The point of using Lorem
 `