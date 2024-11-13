import * as types from "../action/actionType"

const initilState = {
    data: [],
    loading: false
}

const CreateContactReducer = (state = initilState, action) => {
    switch (action.type) {
        case types.CREATE_CONTACT_START:
            return {
                loading: true,
            }

        case types.CREATE_CONTACT_SUCCESS:
            return {
                loading: false,
                data: action.payload,
            }

        case types.CREATE_CONTACT_ERROR:
            return {
                loading: false,
                data: action.payload,
            }

        default:
            return state
    }
}

export default CreateContactReducer;