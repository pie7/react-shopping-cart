import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import { connect } from "react-redux";
import { addToCart } from "../reducers/cart";
import { toggleModal, updateVersion } from "../reducers/product";
import RadioGroup from "./RadioGroup";
import Price from "./Price";
import Button from "./Button";

const ProductPopupContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;

    .popup__wrap {
        display: flex;
        flex-direction: row;
    }

    .product {

        &__info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 0 16px;
        }

        &__title {
            font-size: 32px;
        }

        &__purchase {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        &__image {
            width: 75%;
        }

    }

    .button--add-to-cart {
        width: 100%;
        background-color: #7b1fa2;
        line-height: 1.75;
        border-radius: 4px;
        padding: 6px 16px;
        font-size: 0.875rem;
        min-width: 64px;
        box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),
                    0px 2px 2px 0px rgba(0,0,0,0.14),
                    0px 1px 5px 0px rgba(0,0,0,0.12);
    }
`

const ProductPopup = ({
    imageLink = '',
    price = 0,
    title = '',
    desc = '',
    addToCart = null,
    id = 1,
    version = 'standard',
    previewURL = ''
}) => {
    const addToCartData = { id, title, price, previewURL, version }
    return (
        <ProductPopupContainer>
            <div className="popup__wrap">
                <img className="product__image" src={imageLink} alt={title} />
                <div className="product__info">
                    <div className="product__title">
                        {title}
                    </div>
                    <div className="product__desc">
                        {desc}
                    </div>
                    <div>
                        <RadioGroup
                            id={id}
                            defaultValue={'standard'}
                        />
                        <Price
                            amount={price}
                            color={'#8E2DE2'}
                            marginBottom={16}
                            fontSize={24}
                        />
                        <Button
                            className="button--add-to-cart"
                            clickEvent={() => addToCart(addToCartData)}
                        >
                            ADD TO CART
                        </Button>
                    </div>
                </div>
            </div>
        </ProductPopupContainer>
    )
}

ProductPopup.propTypes = {
    imageLink: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    addToCart: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    version: PropTypes.string.isRequired,
    previewURL: PropTypes.string.isRequired
}

export default connect(
    state => ({
        version: state.product.version
    }),
    dispatch => ({
        addToCart: (addToCartData) => {
            dispatch(addToCart(addToCartData))
            dispatch(toggleModal(null, true))
            dispatch(updateVersion('standard'))
        }
    })
)(ProductPopup)