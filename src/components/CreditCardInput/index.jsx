import React from 'react';
import styled from "styled-components"
import PropsType from 'prop-types';
import { connect } from 'react-redux';
import { updateCreditCardInfo } from "../../reducers/cart";

const CreditCardInputContainer = styled.div`
    .card__input {
        margin-bottom: 32px;
    }

    .creditCard {

        &__input {
            position: relative;
            margin: 8px;
            color: #fff;
            display: block;

            &::before {
                display: block;
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                content: "";
                border-bottom: 1px solid rgba(255, 255, 255, 0.7);
                pointer-events: none;
            }

            &--name,
            &--number,
            &--date,
            &--cvv {
                display: block;
                line-height: 1.5;
                color: #fff;
                background: none;
                border: 0;
                margin: 0;
            }
        }
    }

    .input__secruity {
        display: flex;
    }
`

const CreditCardInput = ({ updateCreditCardInfo }) => {
    return (
        <CreditCardInputContainer>
            <div className="card__input">
                <label className="creditCard__input">
                    Name
                    <input
                        type="text"
                        className="creditCard__input--name"
                        placeholder="PIE 7"
                        name="name"
                        onChange={e => updateCreditCardInfo(e)}
                    />
                </label>
                <label className="creditCard__input">
                    Credit Card Number
                    <input
                        type="text"
                        className="creditCard__input--number"
                        placeholder="•••• •••• •••• ••••"
                        name="number"
                        onChange={e => updateCreditCardInfo(e)}
                    />
                </label>
                <div className="input__secruity">
                    <label className="creditCard__input">
                        Expiry Date
                        <input
                            type="text"
                            className="creditCard__input--date"
                            placeholder="MM/YY"
                            name="expiryDate"
                            onChange={e => updateCreditCardInfo(e)}
                        />
                    </label>
                    <label className="creditCard__input" htmlFor="">
                        CVV
                    <input
                            type="number"
                            className="creditCard__input--cvv"
                            placeholder="•••"
                            name="ccv"
                            onChange={e => updateCreditCardInfo(e)}
                        />
                    </label>
                </div>
            </div>

        </CreditCardInputContainer>
    )
}

CreditCardInput.PropsType = {
    updateCreditCardInfo: PropsType.func.isRequired
}

export default connect(
    null,
    dispatch => ({
        updateCreditCardInfo: (e) => dispatch(updateCreditCardInfo(e))
    })
)(CreditCardInput)