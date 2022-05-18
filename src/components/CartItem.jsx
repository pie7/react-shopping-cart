import React from 'react';
import styled from "styled-components"
import PropTypes from 'prop-types';
import Price from "./Price";
import RadioGroup from "./RadioGroup";
import InputStepper from "./InputStepper";
import Button from './Button';
import { connect } from "react-redux";
import { ReactComponent as Close24px } from "../assets/close-24px.svg";
import { deleteCartItem } from "../reducers/cart";

const CartItemContainer = styled.div`
    .product {
        &__wrap {
            display: flex;
            flex-direction: row;
            border: 1px solid #9e9e9e;
            margin-bottom: 16px;
            background: #fff;
            padding: 16px;
            justify-content: space-between;
            align-items: center;
            min-height: 150px;
        }

        &__info {
            flex-grow: 1;
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            @media (max-width: 768px) {
                flex-direction: column;
                margin-left: 8px;
            }
        }

        &__image {
            width: 25%;
            min-width: 10rem;
            margin-right: 1rem;

            @media (max-width: 768px) {
                width: 50%;
            }

            img {
                width: 100%;
            }
        }

        &__desc,
        &__category,
        &__qty,
        &__price {
            margin-bottom: 8px;
        }

        &__id {
            color: #9e9e9e
        }
    }
`

export const CartItem = ({ product, deleteCartItem = null }) => {
    return (
        <CartItemContainer>
            <div key={product.id} className="product__wrap">
                <div className="product__image">
                    <img src={product.previewURL} alt={product.title} />
                </div>
                <div className="product__info">
                    <div className="product__desc">
                        <div className="product__title">
                            {product.title}
                        </div>
                        <div className="product__id">
                            {`# ${product.id}`}
                        </div>
                    </div>
                    <div className="product__category">
                        <RadioGroup
                            defaultValue={product.version}
                            id={product.id}
                            radios={product.radios}
                        />
                    </div>
                    <div className="product__qty">
                        <InputStepper id={product.id} />
                    </div>
                    <div className="product__price">
                        <Price amount={product.price} />
                    </div>
                    <div className="product__delete" >
                        <Button
                            className={'button--delete'}
                            clickEvent={() => deleteCartItem(product.id)}>
                            <Close24px />
                        </Button>
                    </div>
                </div>
            </div>
        </CartItemContainer>
    )
}

CartItem.propTypes = {
    product: PropTypes.object.isRequired,
    deleteCartItem: PropTypes.func.isRequired
}

export default connect(
    null,
    dispatch => ({
        deleteCartItem: (id) => dispatch(deleteCartItem(id))
    })
)(CartItem)