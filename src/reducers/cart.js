// Actions
const ADD_TO_CART = 'react-shopping-cart/cart/ADD_TO_CART'
const DELETE_ITEM = 'react-shopping-cart/cart/DELETE_ITEM'
const UPDATE_ITEM = 'react-shopping-cart/cart/UPDATE_ITEM'


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
        ]
}


// Reducer
export default function cartReducer(state = initialState, action = {}) {
    switch (action.type) {

        case ADD_TO_CART:
            return {
                ...state,
                cartItems: state.cartItems.concat(action.payload),
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
        default:
            return state
    }
}