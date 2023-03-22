import Select from "react-select";

const HeaderComponent = (props) => {
  const {
    searchBooksInput,
    search,
    setSearch,
    colourStyles,
    onChangeCategory,
    onChangeOrderBy,
    data,
    orderBy,
    searchBooksBtn,
  } = props;

  return (
    <div className="header">
      <div className="header__title">
        <h1 className="header__title-text">SEARCH FOR BOOKS</h1>
      </div>
      <div className="header__input">
        <input
          type="text"
          className="input"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          autoFocus
          onKeyPress={searchBooksInput}
        />
        <button
          className="header__btn"
          onClick={() => {
            searchBooksBtn();
          }}
        />
      </div>
      <div className="header__filters">
        <div className="header__categories">
          <p className="header__categories-text">Categories</p>
          <Select
            options={data}
            defaultValue={data[0]}
            className="categories__select-field"
            styles={colourStyles}
            onChange={onChangeCategory}
          />
        </div>
        <div className="header__categories">
          <p className="header__categories-text">Sorting by</p>
          <Select
            options={orderBy}
            defaultValue={orderBy[0]}
            className="categories__select-field"
            styles={colourStyles}
            onChange={onChangeOrderBy}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
