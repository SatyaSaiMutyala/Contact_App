
import * as types from "../action/actionType"

const initialState = {
    data: [],
    loading: false
}

const LoadContactReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_CONTACT_START:
            return {
                ...state,
                loading: true,
            }

        case types.LOAD_CONTACT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        case types.LOAD_CONTACT_ERROR:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        default:
            return state
    }
}

export default LoadContactReducer;