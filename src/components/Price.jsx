import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const PriceContainer = styled.div`
    font-size: ${props => props.fontSize}px;
    color: ${props => props.color};
    margin-bottom: ${props => props.marginBottom}px;
`

const Price = ({ amount = 0, color = '', marginBottom = 0, fontSize = 18 }) => {
    return (
        <PriceContainer
            fontSize={fontSize}
            color={color}
            marginBottom={marginBottom}
        >
            {`$ ${Number(amount).toLocaleString()}`}
        </PriceContainer>
    )
}

Price.propTypes = {
    amount: PropTypes.number.isRequired,
    color: PropTypes.string,
    marginBottom: PropTypes.number,
    fontSize: PropTypes.number
}

export default Price