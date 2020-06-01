import React from 'react';
import styled from "styled-components"
import PropsType from 'prop-types';
import { connect } from 'react-redux';
import { updateCreditCardInfo } from "../../reducers/cart";
import { useFormik } from 'formik';

const CreditCardInputContainer = styled.form`
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

    .error__message {
        color: #f00;
    }

    .checkout__button {
        cursor: pointer;
        color: #fff;
        border: 0px solid rgba(255,255,255,0.23);
        padding: 16px;
        border-radius: 4px;
        min-width: 64px;
        box-shadow: rgba(33, 203, 243, 0.3) 0px 3px 5px 2px;
        background: linear-gradient(45deg, rgb(33, 150, 243) 30%, rgb(33, 203, 243) 90%);
        width: 100%;
        font-size: 24px;
    }
`

const validate = values => {
    const errors = {}

    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less';
    }

    if (!values.number) {
        errors.number = 'Required';
    } else if (values.number.length > 12 || values.number.length < 12) {
        errors.number = 'Must be 12 numbers';
    }

    if (!values.expiryDate) {
        errors.expiryDate = 'Required';
    } else if (values.expiryDate.length < 4) {
        errors.expiryDate = 'Must be 4 numbers';
    }

    if (!values.cvv) {
        errors.cvv = 'Required';
    } else if (values.cvv.length < 3) {
        errors.cvv = 'Must be 3 numbers';
    }

    return errors
}

const CreditCardInput = ({ updateCreditCardInfo }) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            number: '',
            expiryDate: '',
            cvv: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    console.log(formik)
    return (
        <CreditCardInputContainer onSubmit={formik.handleSubmit}>
            <div className="card__input">
                <label className="creditCard__input">
                    Name
                    <input
                        type="text"
                        className="creditCard__input--name"
                        placeholder="PIE 7"
                        name="name"
                        maxLength="15"
                        onChange={(e) => { updateCreditCardInfo(e); formik.handleChange(e) }}
                        value={formik.values.name}
                    />
                </label>
                {formik.errors.name
                    ? <div className="error__message">{formik.errors.name}</div>
                    : null
                }
                <label className="creditCard__input">
                    Credit Card Number
                    <input
                        type="text"
                        className="creditCard__input--number"
                        placeholder="•••• •••• •••• ••••"
                        name="number"
                        maxLength="12"
                        onChange={e => { updateCreditCardInfo(e); formik.handleChange(e) }}
                    />
                </label>
                {formik.errors.number
                    ? <div className="error__message">{formik.errors.number}</div>
                    : null
                }
                <div className="input__secruity">
                    <div>
                        <label className="creditCard__input">
                            Expiry Date
                        <input
                                type="text"
                                className="creditCard__input--date"
                                placeholder="MM/YY"
                                name="expiryDate"
                                maxLength="4"
                                onChange={e => { updateCreditCardInfo(e); formik.handleChange(e) }}
                            />
                        </label>
                        {formik.errors.expiryDate
                            ? <div className="error__message">{formik.errors.expiryDate}</div>
                            : null
                        }
                    </div>
                    <div>
                        <label className="creditCard__input">
                            CVV
                    <input
                                type="text"
                                className="creditCard__input--cvv"
                                placeholder="•••"
                                name="cvv"
                                maxLength="3"
                                onChange={e => { updateCreditCardInfo(e); formik.handleChange(e) }}
                            />
                        </label>
                        {formik.errors.cvv
                            ? <div className="error__message">{formik.errors.cvv}</div>
                            : null
                        }
                    </div>
                </div>
            </div>
            <div>
                <button type="submit" className="checkout__button">Check Out</button>
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