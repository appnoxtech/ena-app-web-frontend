const initialState = {
    orderId: ''
};

const AssignedOrderIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ASSIGNED_ORDER_ID':{
            return {
                ...state,
                orderId: action.id
            }
        }
    
        default:{
            return state;
        }
    }
}

export default AssignedOrderIdReducer;


export const UpdateAssignedOrderId = (id) => {
    return {
        type: 'UPDATE_ASSIGNED_ORDER_ID',
        id,
    }
}