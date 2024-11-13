import * as types from "../action/actionType";

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const DeleteContactReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DELETE_CONTACT_START:
            return {
                ...state,
                loading: true,
            };

        case types.DELETE_CONTACT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };

        case types.DELETE_CONTACT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default DeleteContactReducer;
