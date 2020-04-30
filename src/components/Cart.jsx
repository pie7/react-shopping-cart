import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { deleteCartItem } from "../reducers/cart";
import Price from "./Price";
import RadioGroup from "./RadioGroup";
import InputStepper from "./InputStepper";
import cart_192x192 from "../assets/shopping_cart_white_192x192.png"
import Button from './Button';

const CartContainer = styled.div`
    width: 60%;
    min-width: 960px;
    padding: 32px;

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

        &__id {
            color: #9e9e9e
        }
    }

    .button--delete {
        font-size: 24px;
        color: #212121;
    }
`

const CartEmpty = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;

    .empty__icon img {
        background-color: #eee;
        border-radius: 50%;
        padding: 36px;
    }

    .empty__message {
        font-size: 36px;
        margin-top: 24px;
    }
`

const Cart = ({ cartItems, deleteCartItem }) => {
    return (
        <CartContainer>
            {cartItems.length > 0 ?
                cartItems.map(product => {
                    return (
                        <div key={product.id} className="product__wrap">
                            <div className="product__image">
                                <img src={product.previewURL} alt={product.title} />
                            </div>
                            <div className="product__desc">
                                <div className="product__title">
                                    {product.title}
                                </div>
                                <div className="product__id">
                                    {`# ${product.id}`}
                                </div>
                            </div>
                            <div className="product__category">
                                <RadioGroup defaultValue={product.version} id={product.id} />
                            </div>
                            <div className="product__qty">
                                <InputStepper />
                            </div>
                            <Price amount={product.price} />
                            <div className="product__delete" >
                                <Button
                                    className={'button--delete'}
                                    clickEvent={() => deleteCartItem(product.id)}>
                                    ✕
                                </Button>
                            </div>
                        </div>
                    )
                })
                :
                <CartEmpty>
                    <div className="empty__icon">
                        <img src={cart_192x192} alt="cart" />
                    </div>
                    <div className="empty__message">
                        Your Cart Is Empty
                    </div>
                </CartEmpty>
            }
        </CartContainer>
    )
}

Cart.defaultProps = {
    cartItems: []
}
export default connect(
    state => ({
        cartItems: state.cart.cartItems
    }),
    dispatch =>({
        deleteCartItem: (id) => dispatch(deleteCartItem(id))
    })
)(Cart)