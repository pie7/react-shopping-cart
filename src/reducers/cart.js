// Actions
const ADD_TO_CART = 'react-shopping-cart/cart/ADD_TO_CART'
const DELETE_ITEM = 'react-shopping-cart/cart/DELETE_ITEM'
const UPDATE_QTY = 'react-shopping-cart/cart/UPDATE_QTY'
const UPDATE_ITEM_VERSION = 'react-shopping-cart/cart/UPDATE_ITEM_VERSION'


// Action Createors
export function addToCart(addToCartData) {
    const { id, title, price, previewURL, version } = addToCartData
    return {
        type: ADD_TO_CART,
        payload: {
            id,
            title,
            price,
            previewURL,
            version
        }
    }
}

export function updateQTY(id, qty) {
    return {
        type: UPDATE_QTY,
        payload: {
            id,
            qty
        }
    }
}

export function updateItemVersion(id, version) {
    return {
        type: UPDATE_ITEM_VERSION,
        payload: {
            id,
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
                qty: 1
            }
        ],
    currentUpdateItemID: null,
    qty: 1
}


// Reducer
export default function cartReducer(state = initialState, action = {}) {
    switch (action.type) {
        case ADD_TO_CART:
            const newCartItems = state.cartItems.concat(action.payload)
            console.log()
            return {
                ...state,
                cartItems: [...new Map(newCartItems.map(item => [item.id, item])).values()]
            }
        case UPDATE_QTY:
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload.id
                        ? {
                            ...item,
                            qty: action.payload.qty
                        }
                        : item
                ),
                qty: action.payload.qty
            }
            case UPDATE_ITEM_VERSION:
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.id === action.payload.id
                            ? {
                                ...item,
                                version: action.payload.version
                            }
                            : item
                    )
                }
        case DELETE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item =>
                    item.id !== action.payload.id
                )
            }
        default:
            return state
    }
}