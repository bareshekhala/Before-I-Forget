import axios from "axios";
import { useEffect, useState } from "react";

import { HomeIcon } from "lucide-animated";
import { ArrowLeftIcon } from "lucide-animated";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

function MyMoviesPage() {
  const [mMovies, setMMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://beforeiforget-server.onrender.com/movies",
        );
        setMMovies(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const myMovies = mMovies.filter((movie) => movie.myMovies === true);

  return (
    <div>
      <div className="pt-5 pb-4 flex flex-row ">
        <Link to={"/moviespage"}>
          <ArrowLeftIcon className="ml-5 rounded-xl text-blue-950" />
        </Link>
        <Link to={"/"}>
          <HomeIcon className="ml-5 text-blue-950" />
        </Link>
      </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  max-w-6xl mx-auto justify-items-center gap-10 my-30">
      {myMovies.map((movie) => {
        return <MovieCard key={movie.id} {...movie} />;
      })}
    </div></div>
  );
}

export default MyMoviesPage;
