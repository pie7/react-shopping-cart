import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleModal } from "../reducers/product";
import Price from "./Price";
import Button from "./Button";
import Modal from "./Modal";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 375px;

    .card {

        &__image {
            display: flex;
            min-height: 125px;
            align-items: center;

            & img {
                width: 100%;
                min-width: 215px;
            }
        }

        &__info {
            display: flex;
            justify-content: space-between;
            align-items: center;
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

const ProductCardList = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    box-sizing: boder-box;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),
                0px 1px 1px 0px rgba(0,0,0,0.14),
                0px 1px 3px 0px rgba(0,0,0,0.12);
    border-radius: 4px;
    margin-bottom: 16px;
    padding: 0 16px;
    box-sizing: border-box;
`;


const Card = ({
    id = 1,
    title = '',
    imgURL = '',
    alt = '',
    price = 0,
    isModalOpen = false,
    toggleModal = null,
    modalBody = null,
    currentClickID = null
}) => {
    return (
        <ProductCardList key={`li_${id}`}>
            <CardContainer key={`li123_${id}`}>
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
            {currentClickID === id &&
                <Modal key={id}>
                    {modalBody}
                </Modal>
            }
        </ProductCardList>
    )
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
    currentClickID: PropTypes.number,
    modalBody: PropTypes.node
}

export default connect(
    state => ({
        currentClickID: state.product.currentClickID,
        isModalOpen: state.product.isModalOpen
    }),
    dispatch => ({
        toggleModal: (currentClickID, isModalOpen) => dispatch(toggleModal(currentClickID, isModalOpen))
    })
)(Card)