import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const BookDescription = () => {
  const { authors, title, subtitle, description, imageLinks, categories } =
    useSelector((state) => state.Books.bookDescriptions);
  const { isSearchInputActive, isLoading } = useSelector(
    (state) => state.Books
  );
  const navigate = useNavigate();
  if (isSearchInputActive) return navigate("/");
  return (
    <div className="book-description">
      {isLoading ? (
        <div className="book-description__loader">
          <Loader />
        </div>
      ) : (
        <>
          {imageLinks ? (
            <div className="book-description__img-container">
              <img
                src={imageLinks.thumbnail}
                alt=""
                className="book-description__img"
              />
            </div>
          ) : (
            <></>
          )}

          <div className="book-description__description">
            <p className="book-description__categories">{categories}</p>
            <h3 className="book-description__title">{title}</h3>
            <h5 className="book-description__subtitle">{subtitle}</h5>
            <p className="book-description__author">{authors}</p>
            {description ? (
              <div className="book-description__description-text-container">
                <p className="book-description__description-text">
                  {description}
                </p>
              </div>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};

export default BookDescription;
