import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducer/rootReducer";
const middleware = [thunk];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middleware));
 
export default store;