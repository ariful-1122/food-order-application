import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cart/cart";

const cartInitialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const totalAmount =
        state.totalAmount + action.item.price * action.item.qty;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingItem = state.items[existingItemIndex];

      let updatedItems;
      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          qty: existingItem.qty + action.item.qty,
        };
        updatedItems = [...state.items];
        console.log(updatedItem);
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
      return {
        items: updatedItems,
        totalAmount: totalAmount,
      };
    }

    case CART_REMOVE_ITEM:
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[existingItemIndex];
      let updatedItems;
      const totalAmount = state.totalAmount - existingItem.price;
      if (existingItem.qty > 1) {
        const updatedItem = { ...existingItem, qty: existingItem.qty - 1 };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      }

      return {
        items: updatedItems,
        totalAmount: totalAmount,
      };

    default:
      return state;
  }
};

export default cartReducer;
