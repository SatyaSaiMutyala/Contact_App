import { UpdateContactApi } from "../api/ContactApi"; 
import * as types from "./actionType";

export const UpdateContactStart = () => ({
    type: types.UPDATE_CONTACT_START,
});

export const UpdateContactSuccess = (data) => ({
    type: types.UPDATE_CONTACT_SUCCESS,
    payload: data,
});

export const UpdateContactError = (error) => ({
    type: types.UPDATE_CONTACT_ERROR,
    payload: error,
});

const UpdateContactAction = (id, updatedData) => {
    return function (dispatch) {
        dispatch(UpdateContactStart());
        UpdateContactApi(id, updatedData) 
            .then((response) => {
                dispatch(UpdateContactSuccess(response));
            })
            .catch((error) => {
                dispatch(UpdateContactError(error));
            });
    };
};

export default UpdateContactAction;
