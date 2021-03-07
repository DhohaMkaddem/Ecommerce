import shopActionsTypes from "./shop.types";

const INITIAL_STATE = {
  itemsPreviewCollections: [],
  fetchError: "",
  isLoading: true,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionsTypes.FETCH_NEW_ITEMS: {
      return action.payload.length
        ? {
            ...state,
            itemsPreviewCollections: [
              ...state.itemsPreviewCollections,
              ...action.payload,
            ],
          }
        : { ...state, fetchError: "sorry no more article in this section" };
    }

    case shopActionsTypes.SET_FETCH_ERROR:
      return {
        ...state,
        fetchError: action.payload,
      };

    case shopActionsTypes.SET_ITEM_LOADING:
        return {
            ...state, isLoading: false
        }  
    default:
      return state;
  }
};

export default shopReducer;
