const initialState = {
    count: 0,
};

export const CartReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'UPDATE_CART': {
            return {
                count: action.count,
            }
        }
        case 'INCREASE_CART_COUNT': {
            return {
                ...state,
                count: state.count + 1,
            }
        }
        case 'DECREASE_CART_COUNT': {
            return {
                ...state,
                count: state.count - 1,
            }
        }
    
        default:
            return state;
    }
};

export const updateUserCart = (count) => {
    return {
        type: 'UPDATE_CART',
        count,
    }
}

export const increaseCartCount = () => {
    return {
        type: 'INCREASE_CART_COUNT',
    }
}

export const decreaseCartCount = () => {
    return {
        type: 'DECREASE_CART_COUNT',
    }
}