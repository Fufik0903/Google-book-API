import Loader from "../Loader/Loader";
import BookCard from "./BookCard/BookCard";

const MainPageComponent = (props) => {
  const {
    loadMore,
    totalBooksCount,
    booksArray,
    showFullInfo,
    isLoading,
    isLoadMoreBtnActive,
  } = props;

  return (
    <div className="main">
      {isLoading ? (
        <div className="main__loader">
          <Loader />
        </div>
      ) : (
        <>
          {totalBooksCount > 0 ? (
            <div>
              <div className="main__total-count">
                <p>{`Found ${totalBooksCount} results`}</p>
              </div>
              <div className="main__container">
                {booksArray.map((item, index) => {
                  return (
                    <BookCard
                      book={item}
                      key={index}
                      showFullInfo={showFullInfo}
                    />
                  );
                })}
              </div>
              <div className="main__load-more">
                {isLoadMoreBtnActive ? (
                  <Loader />
                ) : (
                  <button className="load-more-btn" onClick={loadMore}>
                    Load more
                  </button>
                )}
              </div>
            </div>
          ) : totalBooksCount === null ? (
            <></>
          ) : (
            <div className="main__empty-results">
              <p>По вашему запросу ничего не найдено</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MainPageComponent;
