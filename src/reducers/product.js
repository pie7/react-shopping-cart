// Actions
export const FETCH_PRODUCT = 'react-shopping-cart/product/FETCH_PRODUCT'
export const SWITCH_PRODUCT = 'react-shopping-cart/product/SWITCH_PRODUCT'
const TOGGLE_MODAL = 'react-shopping-cart/product/TOGGLE_MODAL'
const UPDATE_VERSION = 'react-shopping-cart/product/UPDATE_VERSION'
export const UPDATE_SEARCH_INPUT = 'react-shopping-cart/product/UPDATE_SEARCH_INPUT'
export const TRIGGER_SEARCH = 'react-shopping-cart/product/TRIGGER_SEARCH'

// Action Createors
export function toggleModal(currentClickID, isModalOpen) {
    return {
        type: TOGGLE_MODAL,
        payload: {
            currentClickID,
            isModalOpen
        }
    }
}

export function updateSearchInput(e) {
    return {
        type: UPDATE_SEARCH_INPUT,
        payload: {
            searchKeyword: e.target.value
        }
    }
}

export function triggerSearch(searchKeyword) {
    return {
        type: TRIGGER_SEARCH,
        payload: {
            searchKeyword
        }
    }
}

export function updateVersion(version) {
    return {
        type: UPDATE_VERSION,
        payload: {
            version
        }
    }
}

const initialState = {
    products: [],
    currentClickID: null,
    isModalOpen: false,
    version: '',
    searchKeyword: ''
}

// Reducer
export default function productReducer(state = initialState, action = {}) {
    switch (action.type) {
        case FETCH_PRODUCT:
            return {
                ...state,
                products: action.payload.data.hits
            }
        case TOGGLE_MODAL:
            return {
                ...state,
                currentClickID: action.payload.currentClickID,
                isModalOpen: !action.payload.isModalOpen
            }
        case UPDATE_VERSION:
            return {
                ...state,
                version: action.payload.version
            }
        case TRIGGER_SEARCH:
            return {
                ...state,
                searchKeyword: ''
            }
        case UPDATE_SEARCH_INPUT:
            return {
                ...state,
                searchKeyword: action.payload.searchKeyword
            }
        case SWITCH_PRODUCT:
            return {
                ...state,
                products: action.payload.data.hits,
                searchKeyword: ''
            }
        default:
            return state
    }
}