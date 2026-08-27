import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { HomeIcon } from "lucide-animated";
import { ArrowLeftIcon } from "lucide-animated";
import { Link } from "react-router-dom";

function MoviesEdit() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [posterPath, setPosterPath] = useState("");
  const [overview, setOverview] = useState("");
  const [category, setCategory] = useState("");

  const [mood, setMood] = useState([]);
  const [moods, setMoods] = useState([]);
  const [moodId, setMoodId] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://beforeiforget-server.onrender.com/movies/${id}`,
        );
        setTitle(response.data.title);
        setPosterPath(response.data.poster_path);
        setOverview(response.data.overview);
        setCategory(response.data.category);

        setMood(response.data.moodId || []);

        setIsLoading(false);
      } catch (error) {
  try {
        const response = await axios.get(
          `https://beforeiforget-server.onrender.com/favmovies/${id}`,
        );

        setTitle(response.data.title);
        setPosterPath(response.data.poster_path);
        setOverview(response.data.overview);
        setCategory(response.data.category);
        setMood(response.data.moodId || []);

        setIsLoading(false);

      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
  };

  getData();
}, [id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (mood.length === 0 || !title) {
      setErrorMessage("Please Fill out the Titel and Choose at least one Mood");
      return;
    }
   let body = {
        title: title,
        poster_path: posterPath,
        overview: overview,
        category: category,
        moodId: mood,
      };

    try {
   
      await axios.put(
        `https://beforeiforget-server.onrender.com/movies/${id}`,
        body,
      );

      navigate(`/moviespage/${id}`);
    } catch (error) {
      try {
      await axios.put(
        `https://beforeiforget-server.onrender.com/favmovies/${id}`,
        body,
      );

      navigate(`/moviespage/${id}`);

    } catch (error) {
      console.log(error);
    }
  }
};

  useEffect(() => {
    const getMoods = async () => {
      try {
        const response = await axios.get(
          "https://beforeiforget-server.onrender.com/moods",
        );

        setMoods(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getMoods();
  }, []);

  function handleMood(e, moodId) {
    if (e.target.checked) {
      setMood((pre) => [...pre, moodId]);
    } else {
      setMood((pre) => {
        return pre.filter((id) => id !== moodId);
      });
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="pt-4 flex flex-row ">
        <Link to={`/moviespage/${id}`}>
          <ArrowLeftIcon className="ml-5 rounded-xl text-blue-950" />
        </Link>
        <Link to={"/"}>
          <HomeIcon className="ml-5 text-blue-950" />
        </Link>
      </div>

      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-5 max-w-lg mx-auto mt-10 backdrop-blur-xs px-2 justify-items-center"
      >
        <div className="flex flex-col gap-2">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=" px-4 py-3 form"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Description</label>
          <textarea
            value={overview}
            name="overview"
            onChange={(e) => setOverview(e.target.value)}
            className="px-4 py-3 form"
          />
        </div>

        <div className="flex flex-col gap-5">
          <div>
            {" "}
            <label>Image</label>
          </div>

          <input
            type="url"
            name="image"
            value={posterPath}
            onChange={(e) => setPosterPath(e.target.value)}
            className="px-4 py-3 form"
          />

          <select
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-50 form"
          >
            <option value="" disabled>
              Choose a category
            </option>
            <option>Fiction</option>
            <option>Poetry</option>
            <option>Philosophy</option>
            <option>Psychology</option>
            <option>Self-help</option>
            <option>History</option>
            <option>Biography</option>
            <option>Memoir</option>
            <option>Science</option>
            <option>Fantasy</option>
            <option>Mystery</option>
            <option>Romance</option>
            <option>Classics</option>
            <option>Other</option>
          </select>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-4 mb-20 max-w-2xl mx-auto">
          {moods.map((eachMood) => {
            return (
              <div key={eachMood.id}>
                <input
                  type="checkbox"
                  value={eachMood.id}
                  checked={mood.includes(eachMood.id)}
                  onChange={(e) => handleMood(e, eachMood.id)}
                />
                <label className="ml-2">{eachMood.name}</label>
              </div>
            );
          })}
          <div>
            {errorMessage && (
              <p className=" relative text-fuchsia-800">{errorMessage}</p>
            )}
          </div>
        </div>

        <button type="submit" className="btnDay h-15 mb-5 w-40 mx-auto">
          Done{" "}
        </button>
      </form>
    </div>
  );
}

export default MoviesEdit;
