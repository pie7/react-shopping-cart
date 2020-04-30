// Actions
const ADD_TO_CART = 'react-shopping-cart/cart/ADD_TO_CART'
const DELETE_ITEM = 'react-shopping-cart/cart/DELETE_ITEM'
const UPDATE_ITEM = 'react-shopping-cart/cart/UPDATE_ITEM'
const TOGGLE_MODAL = 'react-shopping-cart/cart/TOGGLE_MODAL'
const UPDATE_VERSION = 'react-shopping-cart/cart/UPDATE_VERSION'
export const FETCH_PRODUCT = 'react-shopping-cart/cart/FETCH_PRODUCT'

// Action Createors
export function addToCart(id, user, views, previewURL, version) {
    return {
        type: ADD_TO_CART,
        payload: {
            id,
            title: user,
            price: views,
            previewURL,
            version
        }
    }
}

export function deleteCartItem(id) {
    return {
        type: DELETE_ITEM,
        payload: {
            id
        }
    }
}

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
    cartItems:
        [
            {
                id: 605334,
                title: "jarmoluk",
                price: 44601,
                previewURL: "https://cdn.pixabay.com/photo/2015/01/20/11/09/lamborghini-605334_150.jpg",
                version: "standard",
            }
        ],
    currentClickID: null,
    isModalOpen: false,
    version: 'standard'
}



// Reducer
export default function rootReducer(state = initialState, action = {}) {
    switch (action.type) {
        case FETCH_PRODUCT:
            return {
                ...state,
                products: action.payload.data.hits,
            }
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: state.cartItems.concat(action.payload),
                version: 'standard'
            }
        case DELETE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item =>
                    item.id !== action.payload.id
                )
            }
        case UPDATE_ITEM:
            return {
                ...state,
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