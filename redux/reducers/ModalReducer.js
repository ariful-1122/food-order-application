import {
  SHOW_CART_MODAL,
  HIDE_CART_MODAL,
} from "../constants/modal/modalConstants";

const modalInitialState = {
  isShown: false,
};

const ModalReducer = (state = modalInitialState, action) => {
  switch (action.type) {
    case SHOW_CART_MODAL:
      return {
        isShown: true,
      };

    case HIDE_CART_MODAL:
      return {
        isShown: false,
      };

    default:
      return state;
  }
};

export default ModalReducer;
