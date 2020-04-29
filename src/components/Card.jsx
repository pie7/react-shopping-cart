import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { toggleModal } from "../reducers/cart";
import Price from "./Price";
import Button from "./Button";

const CardContainer = styled.div`
    .card {

        &__title {
            padding: 8px;
            margin-right: auto;
        }

        &__image {
            display: flex;
            width: 150px;
            min-height: 125px;
            margin:10px;
            align-items: center;
        }

        &__info {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;

        }
    }

    .button--card {
        border: 1px solid rgba(255, 255, 255, 0.23);
        padding: 5px 15px;
        border-radius: 4px;
        min-width: 64px;
        background: #8E2DE2;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #4A00E0, #8E2DE2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
`

const Card = ({ id, title, imgURL, alt, price, isModalOpen, toggleModal }) => {
    return (
        <CardContainer>
            <div className="card__title">{title}</div>
            <div className="card__image">
                <img src={imgURL} alt={alt} />
            </div>
            <div className="card__info">
                <Price
                    amount={price}
                />
                <Button
                    className={'button--card'}
                    clickEvent={() => { toggleModal(id, isModalOpen) }}
                >
                    View
                </Button>
            </div>
        </CardContainer>
    )
}
export default connect(
    state => ({
        isModalOpen: state.isModalOpen
    }),
    dispatch => ({
        toggleModal: (currentClickID, isModalOpen) => dispatch(toggleModal(currentClickID, isModalOpen))
    })
)(Card)