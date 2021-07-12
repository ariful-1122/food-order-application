import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// const tools = [thunk];

const store = createStore(rootReducer, composeWithDevTools());

export default store;
