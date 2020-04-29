import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "./Button";
import cart_48x48 from "../assets/shopping_cart_white_48x48.png"

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
        align-items: center;
        min-width: 960px;
    }

    .navbar {

        &__cart {
            display: flex;
            align-items: center;
        }
    }

    .button--home {
        font-size: 18px;
    }

    .button--cart {
        border: 1px solid rgba(255, 255, 255, 0.9);
        border-radius: 32px;
        height: 32px;
        width: 32px;
    }
`

const Navbar = ({ cartItems }) => {
    return (
        <NavbarContainer>
            <div className="navbar__wrap">
                <Link to="/">
                    <Button className="button--home">
                        Home
                    </Button>
                </Link>
                <Link to="/cart">
                    <span className="navbar__cart">
                        <Button
                            className="button--cart"
                        >
                            {cartItems.length}
                        </Button>
                        <img src={cart_48x48} alt="cart" />
                    </span>
                </Link>
            </div>
        </NavbarContainer>
    )
}
export default connect(
    state => ({
        cartItems: state.cartItems
    })
)(Navbar)