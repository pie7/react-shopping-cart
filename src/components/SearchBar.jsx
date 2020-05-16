import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateSearchInput, triggerSearch } from "../reducers/product";
import { ReactComponent as SearchWhite24dp } from "../assets/search-white-24dp.svg";

const SearchBarContainer = styled.div`
    position: relative;

    &::before {
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        content: "";
        border-bottom: 1px solid rgba(255, 255, 255, 0.7);
        pointer-events: none;
    }

    .search__input {
        font: inherit;
        color: #fff;
        width: 100%;
        border: 0;
        margin: 0;
        display: block;
        min-width: 0;
        background: none;
        box-sizing: content-box;

        &:focus {
            outline: none;
        }
    }
`

const SearchBar = ({ searchKeyword = '', updateSearchInput = null, triggerSearch = null }) => {
    return (
        <SearchBarContainer>
            <input
                type="text"
                className="search__input"
                placeholder="Search..."
                onChange={(e) => updateSearchInput(e)}
                onKeyDown={(e) => { e.key === 'Enter' && triggerSearch(searchKeyword) }}
                value={searchKeyword}
            />
        </SearchBarContainer>
    )
}

SearchBar.propTypes = {
    updateSearchInput: PropTypes.func.isRequired
}

export default connect(
    state => ({
        searchKeyword: state.product.searchKeyword
    }),
    dispatch => ({
        updateSearchInput: (e) => dispatch(updateSearchInput(e)),
        triggerSearch: (searchKeyword) => dispatch(triggerSearch(searchKeyword))
    })
)(SearchBar)