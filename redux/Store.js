import {createStore} from "redux";
import userReducer from "./userReducer";
// import logger from "redux-logger";
// import thunk from "redux-thunk";
// import {composeWithDevTools} from "redux-devtools-extension";

// const store = createStore(userReducer, composeWithDevTools(applyMiddleWare(logger,thunk)));

const store = createStore(userReducer);
export default store;