import { CreateContactApi } from "../api/ContactApi";
import * as types from "./actionType";

export const CreateContactStart = () => ({
    type:types.CREATE_CONTACT_START
})

export const CreateContactSuccess = (data) => ({
    type : types.CREATE_CONTACT_SUCCESS,
    payload : data
})

export const CreateContactError = (data) => ({
    type : types.CREATE_CONTACT_ERROR,
    payload : data
})

const CreateContactAction = (values) => {
    return function(dispatch){
        dispatch(CreateContactStart())
        CreateContactApi(values)
        .then((response) => {
            dispatch(CreateContactSuccess(response))
        })
        .catch((error) => {
            dispatch(CreateContactError(error))
        })
    }
}

export default CreateContactAction;