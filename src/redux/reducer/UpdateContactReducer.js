import * as types from "../action/actionType";

const initialState = {
    data: [],
    loading: false,
};

const UpdateContactReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_CONTACT_START:
            return {
                ...state,
                loading: true,
            };

        case types.UPDATE_CONTACT_SUCCESS:
            return {
                ...state,
                loading: false,
                data:  action.payload, 
            };

        case types.UPDATE_CONTACT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default UpdateContactReducer;
