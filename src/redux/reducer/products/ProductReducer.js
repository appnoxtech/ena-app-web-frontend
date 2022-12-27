const initialState = {
    vegName: '',
    engVegName: '',
    image: '',
    quantity: '',
    categorieId: '',
    price: '',
    priceWithTax: '',
    unit: '',
    orderQuantity: '',
    totalQuantity: '',
    description: '',
};

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UDATE_DATA':{
            return {
                ...state,
                ...action.data
            }
        }

        case 'RESET_PRODUCT': {
            return {...initialState}
        }

        default: return state
    }
}

export const UpdateEditProduct = (data) => {
    return {
        type: 'UDATE_DATA',
        data,
    }
}

export const ResetProductData = () => {
    return {
        type: 'RESET_PRODUCT'
    }
}