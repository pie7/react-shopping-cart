import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import { connect } from "react-redux";
import CartItem from "./CartItem";
import cart_192x192 from "../assets/shopping_cart_white_192x192.png"
import Form from "./Form";

const CartContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 960px;
    padding: 32px;
    box-sizing: border-box;
    overflow: hidden;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        padding: 16px;
    }

    .button--delete {
        font-size: 24px;
        color: #212121;
    }

    .cart {
        &__items {
            flex: 2;
        }

        &__form {
            flex: 1;
            max-width: 375px;
        }
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

const Cart = ({ cartItems = [] }) => {
    return (
        <CartContainer>
            {cartItems.length > 0 ?
                <>
                    <div className="cart__items">
                        {cartItems.map((product, index) =>
                            <CartItem key={index} product={product} />
                        )}
                    </div>
                    <div className="cart__form">
                        <Form />
                    </div>
                </>
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

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired
}

export default connect(
    state => ({
        cartItems: state.cart.cartItems
    }),
    null
)(Cart)