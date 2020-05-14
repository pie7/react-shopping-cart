import React from 'react';
import PropTypes from "prop-types";
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


const RadioGroup = ({
    id = 1,
    defaultValue = '',
    updateVersion = null,
    updateItemVersion = null,
    radios = []
}) => {
    return (
        <RadioGroupContainer>
            {radios && radios.map((radio, index) =>
                <div className="radio__item" key={`${index}_${radio.name}`}>
                    <input
                        className="input__item"
                        type="radio"
                        name={`${id}-color`}
                        id={`${id}-${radio.name}`}
                        defaultChecked={defaultValue ? defaultValue === radio.name : index === 0}
                        onClick={() => { updateVersion(radio.name); updateItemVersion(id, radio.name) }}
                    />
                    <label
                        className="label__item"
                        htmlFor={`${id}-${radio.name}`}
                    >
                        {radio.name}
                    </label>
                </div>
            )}
        </RadioGroupContainer>
    )
}

RadioGroup.propTypes = {
    id: PropTypes.number.isRequired,
    defaultValue: PropTypes.string,
    updateVersion: PropTypes.func.isRequired,
    updateItemVersion: PropTypes.func.isRequired,
    radios: PropTypes.array.isRequired
}

export default connect(
    null,
    dispatch => ({
        updateVersion: (version) => dispatch(updateVersion(version)),
        updateItemVersion: (id, cartItemVersion) => dispatch(updateItemVersion(id, cartItemVersion))
    })
)(RadioGroup)