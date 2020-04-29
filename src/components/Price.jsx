import React from 'react';
import styled from 'styled-components';

const PriceContainer = styled.div`
    font-size: ${props => props.fontSize}px;
    color: ${props => props.color};
    margin-bottom: ${props => props.marginBottom}px;
`

const Price = ({ amount, color, marginBottom, fontSize }) => {
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
export default Price