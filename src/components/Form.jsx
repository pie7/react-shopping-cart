import React from 'react';
import styled from "styled-components"
import CreditCard from "./CreditCard";
import CreditCardInput from "./CreditCardInput";

const FormContainer = styled.div`
    border-radius: 8px;
    padding: 16px 24px;
    margin: 0 16px;
    margin-left: 48px;
    background-color: rgba(0,0,0, .7);

    .form__title {
        font-size: 28px;
        color: #fff;
        margin-bottom: 32px;
    }
`

export const Form = ({ title = '' }) => {
    return (
        <FormContainer>
            <div className="form__title">Card Details</div>
            <CreditCard />
            <CreditCardInput />
        </FormContainer>
    )
}
export default Form