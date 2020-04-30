import React, { useState } from 'react';
import styled from 'styled-components';

import { connect } from "react-redux";
import { updateVersion } from "../reducers/product";
import { updateItemVersion } from "../reducers/cart";

const RadioGroupContainer = styled.div`
    position: relative;

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

const RadioGroup = ({ id, defaultValue, updateVersion, updateItemVersion }) => {
    return (
        <RadioGroupContainer>
            <div className="radio__item">
                <input
                    className="input__item"
                    type="radio"
                    name={`${id}-color`}
                    id={`${id}-standard`}
                    defaultChecked={defaultValue === 'standard'}
                    onClick={() => { updateVersion('standard'); updateItemVersion(id, 'standard') }}
                />
                <label className="label__item" htmlFor={`${id}-standard`}>
                    Standard
            </label>
            </div>
            <div className="radio__item">
                <input
                    className="input__item"
                    type="radio"
                    name={`${id}-color`}
                    id={`${id}-long-range`
                    } defaultChecked={defaultValue === 'long-range'}
                    onClick={() => { updateVersion('long-range'); updateItemVersion(id, 'long-range') }}
                />
                <label className="label__item" htmlFor={`${id}-long-range`}>
                    Long Range
            </label>
            </div>
        </RadioGroupContainer>
    )
}
export default connect(
    null,
    dispatch => ({
        updateVersion: (version) => dispatch(updateVersion(version)),
        updateItemVersion: (id, cartItemVersion) => dispatch(updateItemVersion(id, cartItemVersion))
    })
)(RadioGroup)