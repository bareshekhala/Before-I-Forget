import { Link } from "react-router-dom";

function BookCard({ image, id, title, author }) {
  return (
    <div className="w-85 p-4 cardDay">
      <Link to={`/booksPage/${id}`}>
        <div className="w-full flex items-center justify-center p-4">
          <img className=" h-100 object-contain" src={image} />
        </div>

        <div className="mt-5 p-1">
          <h3>Title: {title}</h3>
          <h3>Author: {author}</h3>
        </div>
      </Link>
    </div>
  );
}

export default BookCard;
