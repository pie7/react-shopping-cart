import React from 'react';
import styled from "styled-components"
import Proptyps from 'prop-types';
import { connect } from 'react-redux';

const CreditCardContainer = styled.div`
    border-radius: 8px;
    width: 100%;
    height: 160px;
    background: #ddd;
    margin-left: -50px;
    color: #fff;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;

    .card__content {
        width: 90%;
    }

    .card {

        &__number {
            margin-bottom: 16px;
        }

        &__namd-expiry {
            display: flex;
            justify-content: space-between;
        }

        &__name,
        &__expiry {
            font-size: 20px;
        }
    }

    .card__shiny {
        position: relative;
        display: flex;
        align-items: center;
        width: 50px;
        height: 35px;
        border-radius: 5px;
        background: #CCC;
        margin-bottom: 16px;

        &::before {
            content: " ";
            display: block;
            width: 70%;
            height: 60%;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            background: #d9d9d9;
        }
    }
`

export const CreditCard = ({ creditCard = {} }) => {
    return (
        <CreditCardContainer>
            <div className="card__content">
                <div className="card__shiny"></div>
                <div className="card__number">{(creditCard.number || "•••• •••• •••• ••••")}</div>
                <div className="card__namd-expiry">
                    <span className="card__name">{creditCard.name}</span>
                    <span className="card__expiry">{creditCard.expiryDate}</span>
                </div>
            </div>
        </CreditCardContainer>
    )
}

CreditCard.proptyps = {
    creditCard: Proptyps.object.isRequired
}

export default connect(
    state => ({
        creditCard: state.cart.creditCard
    }),
    null
)(CreditCard)