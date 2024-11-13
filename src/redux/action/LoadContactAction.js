import { LoadContactApi } from "../api/ContactApi";
import * as types from "./actionType";

export const LoadContactStart = () => ({
    type:types.LOAD_CONTACT_START
})

export const LoadContactSuccess = (data) => ({
    type : types.LOAD_CONTACT_SUCCESS,
    payload : data
})

export const LoadContactError = (data) => ({
    type : types.LOAD_CONTACT_ERROR,
    payload : data
})

const LoadContactAction = () => {
    return function(dispatch){
        dispatch(LoadContactStart())
        LoadContactApi()
        .then((response) => {
            dispatch(LoadContactSuccess(response))
        })
        .catch((error) => {
            dispatch(LoadContactError(error))
        })
    }
}

export default LoadContactAction;