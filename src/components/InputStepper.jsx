import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { updateQTY } from "../reducers/cart";
import Button from "./Button";

const InputStepperContainer = styled.div`

    .stepper {

        &__input {
            width: 32px;
            font-size: 18px;
            outline: none;
            border-width:0;
            border:none;
            text-align: center;

            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
        }

        &__button {
            font-size: 16px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background-color: #fff;
            color: rgba(0,0,0 ,.54);
            border: 2px solid rgba(0,0,0 ,.54);

            &:focus {
                outline:0;
            }
        }
    }
`

const InputStepper = ({ id, qty, updateQTY }) => {
    return (
        <InputStepperContainer>
            <Button
                className="stepper__button"
                clickEvent={() => { qty > 1 && updateQTY(id, qty - 1) }}
            >
                －
            </Button>
            <input className="stepper__input" type="number" value={qty} readOnly />
            <Button
                className="stepper__button"
                clickEvent={() => { qty < 5 && updateQTY(id, qty + 1) }}
            >
                ＋
            </Button>
        </InputStepperContainer>
    )
}
export default connect(
    state => ({ qty: state.cart.qty }),
    dispatch => ({
        updateQTY: (id, qty) => dispatch(updateQTY(id, qty))
    })
)(InputStepper)