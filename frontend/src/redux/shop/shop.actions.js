import shopActionsTypes from "./shop.types";
import axios from "axios";

export const getCollectionByCategory = (category) => async (dispatch) => {
  try {
    const { data } = await axios.get('/items/hats');
    
    dispatch(fetchPreviewCollection(data));
    dispatch(setItemLoading());

  } catch (error) {
    dispatch(fetchCollectionError(error.message));
  }
};
export const fetchCollectionError = (errorMessage) => ({
  type: shopActionsTypes.SET_FETCH_ERROR,
  payload: errorMessage,
});
export const fetchPreviewCollection = (collection) => ({
  type: shopActionsTypes.FETCH_NEW_ITEMS,
  payload: collection,
});
export const setItemLoading = () => ({
    type: shopActionsTypes.SET_ITEM_LOADING
})