import { combineReducers } from "redux";
import LoadContactReducer from "./LoadContactReducer";
import CreateContactReducer from "./CreateContactReducer";
import UpdateContactReducer from "./UpdateContactReducer";
import DeleteContactReducer from "./DeleteContactReducer";

const rootReducer = combineReducers({
    AllContacts : LoadContactReducer,
    CreateContact : CreateContactReducer,
    UpdateContact : UpdateContactReducer,
    DeleteContact : DeleteContactReducer,
})

export default rootReducer;