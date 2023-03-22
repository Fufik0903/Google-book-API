import {
  BOOK_DESCRIPTION,
  CLEAR_BOOKS_ITEMS,
  IS_LOADING,
  IS_LOAD_MORE_BTN_ACTIVE,
  IS_SEARCH_INPUT_ACTIVE,
  SET_BOOKS_ITEMS,
  SET_SEARCH_DATA,
  TOTAL_BOOKS_COUNT,
} from "../constants/constants";

export const total_books_count = (count) => {
  return {
    type: TOTAL_BOOKS_COUNT,
    payload: count,
  };
};
export const set_books_array = (data) => {
  return {
    type: SET_BOOKS_ITEMS,
    payload: data,
  };
};
export const set_search_data = (data) => {
  return {
    type: SET_SEARCH_DATA,
    payload: data,
  };
};
export const clear_books_array = (data) => {
  return {
    type: CLEAR_BOOKS_ITEMS,
    payload: data,
  };
};
export const set_books_descriptions = (data) => {
  return {
    type: BOOK_DESCRIPTION,
    payload: data,
  };
};
export const is_loading = (data) => {
  return {
    type: IS_LOADING,
    payload: data,
  };
};
export const is_search_input_active = (data) => {
  return {
    type: IS_SEARCH_INPUT_ACTIVE,
    payload: data,
  };
};
export const is_load_more_btn_active = (data) => {
  return {
    type: IS_LOAD_MORE_BTN_ACTIVE,
    payload: data,
  };
};
