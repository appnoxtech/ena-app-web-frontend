import { UPDATE_USER_DETAILS } from "./userTypes"
import { RESET_USER_DETAILS } from "./userTypes"

export const updateUserData = (data) => {
    return {
       type: UPDATE_USER_DETAILS,
       payload: {data}
    }
}

export const resetUserData = () => {
    return {
        type: RESET_USER_DETAILS,
    }
}
