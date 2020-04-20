import React from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;

    .button--close {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 24px;
        font-weight: 700;
    }

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

        &__price {
            font-size: 24px;
            color: #8E2DE2;
            margin-bottom: 16px;
        }

        &__image {
            width: 75%;
        }

    }

    .button--add-to-cart {
        width: 100%;
        color: #fff;
        border: 0;
        cursor: pointer;
        background-color: #7b1fa2;
        font-weight: 500;
        line-height: 1.75;
        border-radius: 4px;
        letter-spacing: 0.02857em;
        text-transform: uppercase;
        padding: 6px 16px;
        font-size: 0.875rem;
        min-width: 64px;
        box-sizing: border-box;
        box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),
                    0px 2px 2px 0px rgba(0,0,0,0.14),
                    0px 1px 5px 0px rgba(0,0,0,0.12);    color: #fff;
                    border: 0;
                    cursor: pointer;
                    background-color: #7b1fa2;
                    font-weight: 500;
                    line-height: 1.75;
                    border-radius: 4px;
                    letter-spacing: 0.02857em;
                    text-transform: uppercase;
                    padding: 6px 16px;
                    font-size: 0.875rem;
                    min-width: 64px;
                    box-sizing: border-box;
                    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),
                                0px 2px 2px 0px rgba(0,0,0,0.14),
                                0px 1px 5px 0px rgba(0,0,0,0.12);
    }

    .selector--radio {
        position: relative;
    }

    .radio__item {
        position: relative;
        display: flex;
        margin-bottom: 16px;
    }

    .input__item {
        opacity: 0;
        z-index: 0;

        &:checked + label {
            &::before {
                border-color: #3f51b5;
            }

            &::after {
                transform: scale(1.5, 1.5);
            }
        }
    }

    .label__item {
        display: block;
        padding: 0 0 0 24px;
        cursor: pointer;

        &::before {
            content: '';
            position: absolute;
            top: 2px;
            left: -2px;
            width: 16px;
            height: 16px;
            background-color: transparent;
            border: 2px solid rgba(0, 0, 0 , .54);
            border-radius: 14px;
            z-index: 1;
            transition: border-color 0.28s cubic-bezier(.4, 0, .2, 1);
        }

        &::after {
            content: '';
            position: absolute;
            top: 8px;
            left: 4px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            z-index: 2;
            transform: scale(0, 0);
            transition: transform 0.28s cubic-bezier(.4, 0, .2, 1);
            background-color: #3f51b5;
        }
    }
`

const ProductPopup = ({ imageLink, views, user, desc }) => {
    return (
        <ProductContainer>
            <span className="button--close">✕</span>
            <div className="popup__wrap">
                <img className="product__image" src={imageLink} alt={user} />
                <div className="product__info">
                    <div className="product__title">
                        {user}
                    </div>
                    <div className="product__desc">
                        {desc}
                    </div>
                    <div>
                        <div className="selector--radio">
                            <div className="radio__item">
                                <input className="input__item" type="radio" name="color" id="standard" />
                                <label className="label__item" htmlFor={"standard"}>
                                    Standard
                                </label>
                            </div>
                            <div className="radio__item">
                                <input className="input__item" type="radio" name="color" id="long-range" />
                                <label className="label__item" htmlFor={"long-range"}>
                                    Long Range
                                </label>
                            </div>
                        </div>
                        <div className="product__price">
                            {`$ ${Number(views).toLocaleString()}`}
                        </div>
                        <button className="button--add-to-cart">
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </ProductContainer>
    )
}
export default ProductPopup