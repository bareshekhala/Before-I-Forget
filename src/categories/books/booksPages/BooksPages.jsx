import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BookCard from "../booksComponents/BookCard";
import { useNavigate } from "react-router-dom";
import { HomeIcon } from "lucide-animated";

function BooksPages() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://beforeiforget-server.onrender.com/books",
        );
        setBooks(response.data);

        // to show the loading page for 2 seconds
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="loader"></div>
      </div>
    );
  }

  //recommended books
  let selectedBooks = [
    "Existential Psychotherapy",
    "The Stranger",
    "The Plague",
    "The Picture of Dorian Gray",
    "Rubaiyat",
    "The Masnavi",
    "The Unbearable Lighness of Being",
    "Free to Choose",
    "Happening",
    "No Longer Human",
    "Goodnight Punpun",
    "The Second Sex",
    "The Wonderful Wizard of Oz",
    "The Trial",
    "Harry Potter and the Sorcerer's Stone",
    "A Brief History of Time",
    "Sapiens",
    "Chaos",
    "Nineteen Eighty-Four",
    "Animal Farm",
    "A Beast Slinks Towards Beijing",
    "Thus Spoke Zarathustra",
    "Crime and Punishment",
    "One Hundred Years of Solitude",
    "My Last Sigh",
    "Astronomy Made Simple",
    "Shahnameh: The Persian Book of Kings",
    "Dissolving Classroom",
  ];

  const recommendedBooks = books.filter((book) => {
    return  selectedBooks.includes(book.title);
  });

  return (
    <>
      <div className="flex flex-row">
        <button
          onClick={() => navigate("/books/create")}
          className="px-6 py-2 w-35 btnDay m-3 italic"
        >
          Add a New Book
        </button>

        <button
          onClick={() => navigate("/books/mybooks")}
          className="px-6 py-2 w-35 btnDay m-3 italic"
        >
          My Books
        </button>

        <Link to={"/"}>
          <HomeIcon className="ml-5 px-6 py-7 text-blue-950" />
        </Link>
      </div>
      <h1 className=" m-6 text-3xl italic">Recommended Books:</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto justify-items-center gap-10 my-12">
        {recommendedBooks.map((eachBook) => {
          return <BookCard key={eachBook.id} {...eachBook} />;
        })}
      </div>
    </>
  );
}

export default BooksPages;
