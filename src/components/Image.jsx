import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";


const ImageContainer = styled.div`
    display: flex;
    position: relative;
    min-width: 640px;
    min-height: 480px;

    @media (max-width: 768px) {
        min-width: 275px;
        min-height: 215px;
    }

    img {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 100%;
    }

    .image {

        &__placeholder {
            filter: blur(4px);
            transition: opacity 700ms linear;

            &--none {
                opacity: 0;
            }
        }
    }
`

const Image = ({ imageLink, title, previewURL }) => {
    const [isLoad, setIsLoad] = useState(false)
    return (
        <ImageContainer>
            <img
                onLoad={() => setIsLoad(true)}
                src={imageLink}
                alt={title}
            />
            <img
                className={`image__placeholder${isLoad ? '--none' : ''}`}
                src={previewURL}
                alt={title}
            />
        </ImageContainer>
    )
}

Image.propTypes = {
    imageLink: PropTypes.string,
    title: PropTypes.string.isRequired,
    previewURL: PropTypes.string
}

export default Image
