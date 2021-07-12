import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import ModalReducer from "./ModalReducer";

const rootReducer = combineReducers({
  modal: ModalReducer,
  cart: cartReducer,
});

export default rootReducer;
