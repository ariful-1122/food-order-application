import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import ModalReducer from "./ModalReducer";
import productSearchReducer from "./searchReducer";

const rootReducer = combineReducers({
  modal: ModalReducer,
  cart: cartReducer,
  search: productSearchReducer,
});

export default rootReducer;
