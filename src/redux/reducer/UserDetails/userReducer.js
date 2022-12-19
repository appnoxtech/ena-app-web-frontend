import { CLEAR_USER_DETAILS, UPDATE_USER_DETAILS } from "./userTypes";

const initialState = {
    isLogin: false,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_DETAILS: {
            console.log('inside Action', action.payload.data);
            return {
                ...state,
                ...action.payload.data,
            }
        }
        case CLEAR_USER_DETAILS:
            return {
                ...initialState
            }
    
        default:
            return state;
    }
}

export default UserReducer;