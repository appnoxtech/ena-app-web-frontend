const initialState = {
    categorieList: [],
    currentCategorie: {},
};

export default function CategoriesReducer(state = initialState, action) {
    switch (action.type) { 
        case 'UPDATE_CATEGORY':{
            return {
                ...state,
                categorieList: [...action.data],
            }
        }

        case 'UPDATE_CURRENT_CATEGORIE': {
             return {
                ...state,
                currentCategorie: action.data,
             }
        }

        case 'RESET': {
            return {
                ...initialState,
            }
        }
    
        default: {
            return state;
        }
    }
}

export const updateProductCategory = (data) => {
    return {
       type: 'UPDATE_CATEGORY',
       data,
    }
}

export const updateCuurentCategorie = (data) => {
    return {
        type: 'UPDATE_CURRENT_CATEGORIE',
        data,
    }
}

export const resetCategorieData  = () => {
    return {
        type: 'RESET',
    }
}
