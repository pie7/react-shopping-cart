import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { toggleModal } from "../reducers/product";
import Button from "./Button";

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
            height: 600px;
            padding: 16px 32px 24px;
            background-color: #fff;
            box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),
                    0px 5px 8px 0px rgba(0,0,0,0.14),
                    0px 1px 14px 0px rgba(0,0,0,0.12);
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

const Modal = ({ isModalOpen, children, toggleModal }) => {
    return (
        <ModalContainer display={isModalOpen ? 'block' : 'none'}>
            <div className="modal__wrap">
                <div className="modal__body">
                    <Button
                        className="button--close"
                        clickEvent={() => { toggleModal(null, isModalOpen) }}
                    >
                        ✕
                    </Button>
                    {children}
                </div>
            </div>
        </ModalContainer>
    )
}

Modal.defaultProps = {
    isModalOpen: false,
    children: null
}

export default connect(
    state => ({
        isModalOpen: state.product.isModalOpen
    }),
    dispatch => ({
        toggleModal: (currentClickID, isModalOpen) => dispatch(toggleModal(currentClickID, isModalOpen))
    })
)(Modal)