import { DeleteContactApi } from "../api/ContactApi"; // Import the delete API
import * as types from "./actionType";

export const DeleteContactStart = () => ({
    type: types.DELETE_CONTACT_START,
});

export const DeleteContactSuccess = (id) => ({
    type: types.DELETE_CONTACT_SUCCESS,
    payload: id, 
});

export const DeleteContactError = (error) => ({
    type: types.DELETE_CONTACT_ERROR,
    payload: error,
});

const DeleteContactAction = (id) => {
    return function (dispatch) {
        dispatch(DeleteContactStart());
        DeleteContactApi(id) 
            .then(() => {
                dispatch(DeleteContactSuccess(id));
            })
            .catch((error) => {
                dispatch(DeleteContactError(error));
            });
    };
};

export default DeleteContactAction;
