import React from 'react';
import styled from 'styled-components';

import ProductPopup from "./ProductPopup";

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
            width: 960px;
            height: 600px;
            padding: 16px 32px 24px;
            background-color: #fff;
            box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),
                    0px 5px 8px 0px rgba(0,0,0,0.14),
                    0px 1px 14px 0px rgba(0,0,0,0.12);
        }
    }

`

const Modal = ({ imageLink, views, user, isModalOpen, }) => {
    return (
        <ModalContainer display={isModalOpen ? 'block' : 'none'}>
            <div className="modal__wrap">
                <div className="modal__body">
                    <ProductPopup
                        imageLink={imageLink}
                        views={views}
                        user={user}
                        desc={desc}
                    />
                </div>
            </div>
        </ModalContainer>
    )
}

export default Modal

Modal.defaultProps = {
    isModalOpen: false
}

const desc = `
It is a long established fact that a reader will be
 distracted by the readable content of a page
 when looking at its layout. The point of using Lorem
 `