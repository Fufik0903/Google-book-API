import { NavLink } from "react-router-dom";

const BookCard = (props) => {
  const { book, showFullInfo } = props;
  const { title, authors, categories, imageLinks } = book.volumeInfo;

  let authorsArray = authors?.join(", ");
  let firstCategory = categories ? categories[0] : null;
  firstCategory = firstCategory?.split(",")[0];
  let titleShort = title.slice(0, 50) + "...";

  return (
    <div className="book">
      <NavLink
        to={`/${book.id}`}
        className="book__container"
        onClick={() => {
          showFullInfo(book.id);
        }}
      >
        <div className="book__image-container">
          {imageLinks ? (
            <img src={imageLinks.thumbnail} className="book__image" />
          ) : null}
        </div>
        <div className="book__container">
          <p className="book__categories">{firstCategory}</p>
          <h3 className="book__title">
            {title.length > 50 ? titleShort : title}
          </h3>
          <p className="book__author">{authorsArray}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default BookCard;
