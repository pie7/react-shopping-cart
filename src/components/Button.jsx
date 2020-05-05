import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const ButtonContainer = styled.button`
    color: #fafafa;
    box-sizing: border-box;
    text-transform: uppercase;
    cursor: pointer;
    border: 0;
    background-color: transparent;
    letter-spacing: 0.02857em;
    text-align: center;
    margin: 0;
    outline: 0;
    vertical-align: middle;
    font-weight: 500;
`

const Button = ({ className = '', clickEvent = null, children = null }) => {
    return (
        <ButtonContainer
            className={className}
            onClick={clickEvent}
        >
            {children}
        </ButtonContainer>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    clickEvent: PropTypes.func,
    children: PropTypes.node.isRequired
}

export default Button