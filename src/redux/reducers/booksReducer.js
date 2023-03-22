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

let initialState = {
  booksArray: [],
  totalBooksCount: null,
  searchData: {
    currentOrderBy: "relevance",
    currentCategory: "",
    searchText: null,
  },
  bookDescriptions: {},
  isSearchInputActive: false,
  isLoading: false,
  isLoadMoreBtnActive: false,
};
let BooksReducers = (state = initialState, action) => {
  let books = [];

  switch (action.type) {
    case IS_LOAD_MORE_BTN_ACTIVE:
      return {
        ...state,
        isLoadMoreBtnActive: action.payload,
      };
    case IS_SEARCH_INPUT_ACTIVE:
      return {
        ...state,
        isSearchInputActive: action.payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case BOOK_DESCRIPTION:
      let book = action.payload;
      return {
        ...state,
        bookDescriptions: book,
      };
    case TOTAL_BOOKS_COUNT:
      return {
        ...state,
        totalBooksCount: action.payload,
      };
    case SET_BOOKS_ITEMS:
      books = state.booksArray.concat(action.payload);
      return {
        ...state,
        booksArray: books,
      };
    case SET_SEARCH_DATA:
      return {
        ...state,
        searchData: action.payload,
      };
    case CLEAR_BOOKS_ITEMS:
      books = action.payload;
      return {
        ...state,
        booksArray: action.payload,
      };
    // case LOAD_MORE:
    //   return {
    //     ...state,
    //     pageIndex: action.pageIndex,
    //   };
    default:
      return state;
  }
};
export default BooksReducers;
