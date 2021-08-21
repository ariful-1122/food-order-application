export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";

const initialState = {
  keyword: "",
};

const productSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PRODUCTS:
      return {
        keyword: action.payload,
      };

    default:
      return state;
  }
};

export default productSearchReducer;
