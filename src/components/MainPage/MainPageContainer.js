import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  change_page_index,
  is_loading,
  is_load_more_btn_active,
  is_search_input_active,
  set_books_array,
  set_books_descriptions,
  total_books_count,
} from "../../redux/actions/booksAction";
import { searchBooksAPI, showFullInfoAPI } from "../API/api";
import MainPageComponent from "./MainPageComponent";

const MainPageContainer = () => {
  const { totalBooksCount, booksArray, isLoading, isLoadMoreBtnActive } =
    useSelector((state) => state.Books);
  const { currentOrderBy, currentCategory, searchText } = useSelector(
    (state) => state.Books.searchData
  );
  const [pageIndex, setPageIndex] = useState(1);
  const dispatch = useDispatch();
  const loadMore = () => {
    dispatch(is_load_more_btn_active(true));
    try {
      searchBooksAPI(
        searchText,
        pageIndex,
        currentOrderBy,
        currentCategory
      ).then((response) => {
        dispatch(total_books_count(response.data.totalItems));
        dispatch(set_books_array(response.data.items));
        setPageIndex((prevState) => prevState + 1);
        dispatch(is_load_more_btn_active(false));
      });
    } catch (err) {
      throw new Error(err);
    }
  };
  const showFullInfo = async (bookId) => {
    dispatch(is_loading(true));
    try {
      dispatch(is_search_input_active(false));
      await showFullInfoAPI(bookId).then((response) => {
        dispatch(set_books_descriptions(response.data.volumeInfo));
      });
      dispatch(is_loading(false));
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <MainPageComponent
      loadMore={loadMore}
      totalBooksCount={totalBooksCount}
      booksArray={booksArray}
      showFullInfo={showFullInfo}
      isLoading={isLoading}
      isLoadMoreBtnActive={isLoadMoreBtnActive}
    />
  );
};

export default MainPageContainer;
