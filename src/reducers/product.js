// Actions
export const FETCH_PRODUCT = 'react-shopping-cart/product/FETCH_PRODUCT'
const TOGGLE_MODAL = 'react-shopping-cart/product/TOGGLE_MODAL'
const UPDATE_VERSION = 'react-shopping-cart/cart/UPDATE_VERSION'

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
    version: 'standard'
}

// Reducer
export default function productReducer(state = initialState, action = {}) {
    switch (action.type) {
        case FETCH_PRODUCT:
            return {
                ...state,
                products: action.payload.data.hits,
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
        default:
            return state
    }
}