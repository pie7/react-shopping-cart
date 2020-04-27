import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
    display: felx;
    justify-context: center;
    align-items: center;
    background-color: #8E2DE2;
    width: 100%;
    height: 175px;

    .navbar__wrap {
        flex:0 0 60%;
        display: flex;
        justify-content: space-between;
        min-width: 960px;
    }

    .button--home {
        color: #fff;
        cursor: pointer;
    }

    .button--shopping-cart {
        color: #fff;
        cursor: pointer;
    }
`

const Navbar = () => {
    return (
        <NavbarContainer>
            <div className="navbar__wrap">
                <Link to="/">
                    <span className="button--home">
                        Home
                </span>
                </Link>
                <Link to="/cart">
                    <span className="button--shopping-cart">
                        <span role="img" aria-label="111" >&#128722;</span>
                        <span>Cart</span>
                    </span>
                </Link>
            </div>
        </NavbarContainer>
    )
}
export default Navbar