import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clear_books_array,
  is_loading,
  is_search_input_active,
  set_books_array,
  set_search_data,
  total_books_count,
} from "../../redux/actions/booksAction";
import { searchBooksAPI } from "../API/api";
import HeaderComponent from "./HeaderComponent";

const HeaderContainer = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const data = [
    { label: "all", value: "" },
    { label: "art", value: "art" },
    { label: "biography", value: "biography" },
    { label: "computers", value: "computers" },
    { label: "history", value: "history" },
    { label: "medical", value: "medical" },
    { label: "poetry", value: "poetry" },
  ];
  const orderBy = [
    { label: "relevance", value: "relevance" },
    { label: "newest", value: "newest" },
  ];
  const [currentCategory, setCurrentCategory] = useState(data[0].value);
  const [currentOrderBy, setCurrentOrderBy] = useState(orderBy[0].value);
  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        color: "rgb(155, 155, 155)",
      };
    },
  };
  const pageIndex = 0;
  const searchBooksBtn = () => {
    searchBooks();
  };
  const searchBooksInput = (e) => {
    if (e.key === "Enter") {
      searchBooks();
    }
  };
  const searchBooks = () => {
    dispatch(is_loading(true));
    dispatch(is_search_input_active(true));
    try {
      searchBooksAPI(search, pageIndex, currentOrderBy, currentCategory).then(
        (response) => {
          dispatch(
            set_search_data({
              searchText: search,
              currentOrderBy: currentOrderBy,
              currentCategory: currentCategory,
            })
          );
          dispatch(clear_books_array([]));
          dispatch(total_books_count(response.data.totalItems));
          dispatch(set_books_array(response.data.items));
          dispatch(is_loading(false));
        }
      );
    } catch (err) {
      throw new Error(err);
    }
  };

  const onChangeCategory = (e) => {
    setCurrentCategory(e.label);
  };
  const onChangeOrderBy = (e) => {
    setCurrentOrderBy(e.label);
  };
  return (
    <HeaderComponent
      searchBooksInput={searchBooksInput}
      setSearch={setSearch}
      search={search}
      colourStyles={colourStyles}
      onChangeCategory={onChangeCategory}
      onChangeOrderBy={onChangeOrderBy}
      data={data}
      orderBy={orderBy}
      searchBooksBtn={searchBooksBtn}
    />
  );
};

export default HeaderContainer;
