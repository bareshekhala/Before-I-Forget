import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { HomeIcon } from "lucide-animated";
import MovieCard from "../components/MovieCard";
function MoviesPage() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://beforeiforget-server.onrender.com/movies",
        );
        setMovies(response.data);

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

  let selectedMovies = [
    "The Matrix",
    "Princess Mononoke",
    " Léon: The Professional",
    "The Great Dictator",
    "The Silence of the Lambs'",
    "Howl's Moving Castle",
    "Se7en",
    "Interstellar",
    "Forrest Gump",
    "Fight Club",
    "Cinema Paradiso",
    "A Dog's Will",
    "Joker",
    "The Shawshank Redemption",
    "The Godfather",
    "Schindler's List",
    "12 Angry Men",
    "Spirited Away",
    "Parasite",
    "Forest Gump",
    "Life Is Beautiful",
    "Green Book",
    "Star Wars",
   " The Help",
   "The Shining",
   "Coco",
   "Shutter Island",
   "Viridiana",
   "Ponyo",
   "My Neighbor Totoro",
   "Taste of Cherry",
   "Bashu, the Little Stranger",
   "Death of Yazdgerd", "Inception"
  ];

  const recommendedMovies = movies.filter((movie) => {
    return movie.myMovie !== true && selectedMovies.includes(movie.title);
  });

  return (
    <>
      <div className="flex flex-row">
        <button
          onClick={() => navigate("/movies/create")}
         className="px-6 py-2 w-38 btnDay m-3 italic"
        >
          Add a New Movie
        </button>

        <button
          onClick={() => navigate("/movies/mymovies")}
          className="px-6 py-2 w-35 btnDay m-3 italic"
        >
          My Movies
        </button>

        <Link to={"/"}>
          <HomeIcon className="ml-5 px-6 py-7 text-blue-950" />
        </Link>
      </div>

      <h1 className=" mt-6 mx-6 text-3xl italic">Recommended Movies:</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto justify-items-center gap-10 my-12">
        {recommendedMovies.map((eachMovie) => {
          return <MovieCard key={eachMovie.id} {...eachMovie} />;
        })}
      </div>
    </>
  );
}

export default MoviesPage;
