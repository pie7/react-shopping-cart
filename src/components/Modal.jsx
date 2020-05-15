import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import { connect } from "react-redux";
import { toggleModal } from "../reducers/product";
import Button from "./Button";
import { ReactComponent as Close } from "../assets/close-24px.svg";

const ModalContainer = styled.div`
    display: ${ props => props.display };
    position: fixed;
    right: 0px;
    bottom: 0px;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);

    .modal {

        &__wrap {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        &__body {
            position: relative;
            width: 960px;
            padding: 16px 32px 24px;
            background-color: #fff;
            box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),
                    0px 5px 8px 0px rgba(0,0,0,0.14),
                    0px 1px 14px 0px rgba(0,0,0,0.12);

            @media (max-width: 768px) {
                width: 275px;
            }
        }
    }

    .button--close {
        position: absolute;
        top: 16px;
        right: 16px;
        font-size: 24px;
        font-weight: 700;
        color: #212121;
    }

`

const Modal = ({ isModalOpen = false, children = null, toggleModal = null }) => {
    useEffect(() => {
        if (isModalOpen) {
            disableBodyScroll()
        }

        return () => rmoveBodyElementStyle()
    })

    const disableBodyScroll = () => {
        document.body.style.overflow = 'hidden'
    }

    const rmoveBodyElementStyle = () => {
        document.body.removeAttribute('style')
    }

    return (
        <ModalContainer display={isModalOpen ? 'block' : 'none'}>
            <div className="modal__wrap">
                <div className="modal__body">
                    <Button
                        className="button--close"
                        clickEvent={() => { toggleModal(null, isModalOpen) }}
                    >
                        <Close />
                    </Button>
                    {children}
                </div>
            </div>
        </ModalContainer>
    )
}

Modal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    toggleModal: PropTypes.func.isRequired
}

export default connect(
    state => ({
        isModalOpen: state.product.isModalOpen
    }),
    dispatch => ({
        toggleModal: (currentClickID, isModalOpen) => dispatch(toggleModal(currentClickID, isModalOpen))
    })
)(Modal)