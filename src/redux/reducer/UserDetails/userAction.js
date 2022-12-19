import { UPDATE_USER_DETAILS } from "./userTypes"

export const updateUserData = (data) => {
    return {
       type: UPDATE_USER_DETAILS,
       payload: {data}
    }
}
