import axios from "axios";
import { useState } from "react";
import BookCard from "../categories/books/booksComponents/BookCard";
import MovieCard from "../categories/Movies/components/MovieCard";


import React from "react";

function DiscoveredPageCategory() {
  const [suggestions1, setSuggestions1] = useState([]);
  const [suggestions2, setSuggestions2] = useState([]);
  const [category, setCategory] = useState("");

  const handleCategory = async (e) => {

    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    try {
      const response1 = await axios.get(
        "https://beforeiforget-server.onrender.com/books",
      );
      const response2 = await axios.get(
        "https://beforeiforget-server.onrender.com/movies",
      );

      const result1 = response1.data.filter((book) => {
        return book.category.toLowerCase() ===(selectedCategory);
      });

      const result2 = response2.data.filter((movie) => {
        return movie.category.toLowerCase() ===(selectedCategory);
      });

      setSuggestions1(result1);
      setSuggestions2(result2);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="text-center mt-15 px-2">
        <h1 className="italic text-3xl">Select a Category</h1>

        <p className=" italic pt-2 px-2">
          Select a Category to Discover What You Might Need Right Now
        </p>

        <div className="flex flex-wrap justify-center gap-3  max-w-2xl mx-auto">
          <button className="mx-auto my-20 px-5 py-2 btnDay" value="fiction" onClick={handleCategory}>
            Fiction
          </button>

          <button className="mx-auto my-20 px-5 py-2 btnDay" value="philosophy" onClick={handleCategory}>
            Philosophy
          </button>

          <button className="mx-auto my-20 px-5 py-2 btnDay" value="psychology" onClick={handleCategory}>
            Psychology
          </button>
          <button className="mx-auto my-20 px-5 py-2 btnDay" value="non-fiction" onClick={handleCategory}>
            Non-fiction
          </button>

          <button className="mx-auto my-20 px-5 py-2 btnDay" value="self-help" onClick={handleCategory}>
            Self-help
          </button>

          <button className="mx-auto my-20 px-5 py-2 btnDay" value="history" onClick={handleCategory}>
            History
          </button>

          <button className="mx-auto my-20 px-5 py-2 btnDay" value="biography" onClick={handleCategory}>
            Biography
          </button>

          <button className="mx-auto my-20 px-5 py-2 btnDay" value="memoir" onClick={handleCategory}>
            Memoir
          </button>

          <button className="mx-auto my-20 px-5 py-2 btnDay" value="poetry" onClick={handleCategory}>
            Poetry
          </button>

          <button className="mx-auto my-20 px-5 py-2 btnDay" value="science" onClick={handleCategory}>
            Science
          </button>
          <button className="mx-auto my-20 px-5 py-2 btnDay"  value="science-fiction" onClick={handleCategory}>
            science-fiction
          </button>

          <button className="mx-auto my-20 px-5 py-2 btnDay" value="fantasy" onClick={handleCategory}>
            Fantasy
          </button>

          <button className="mx-auto my-20 px-5 py-2 btnDay" value="romance" onClick={handleCategory}>
            Romance
          </button>

          <button className="mx-auto my-20 px-5 py-2 btnDay" value="mystery" onClick={handleCategory}>
            Mystery
          </button>

          <button className="mx-auto my-20 px-5 py-2 btnDay" value="classics" onClick={handleCategory}>
            Classics
          </button>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  max-w-6xl mx-auto justify-items-center gap-10 my-30">
          {suggestions1.map((book) => {
            return <BookCard key={book.id} {...book} />;
          })}
          {suggestions2.map((movie) => {
            return <MovieCard key={movie.id} {...movie} />;
          })}
        </div>
      </div>
    </>
  );
}

export default DiscoveredPageCategory;
