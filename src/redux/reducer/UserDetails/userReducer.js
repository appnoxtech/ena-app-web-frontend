import { CLEAR_USER_DETAILS, RESET_USER_DETAILS, UPDATE_USER_DETAILS } from "./userTypes";

const initialState = {
    isLogin: false,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userType: 'customer'
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_DETAILS: {
            return {
                ...state,
                ...action.payload.data,
            }
        }
        case RESET_USER_DETAILS: {
            return {...initialState}
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