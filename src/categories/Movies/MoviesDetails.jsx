import React from 'react'
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowLeftIcon } from "lucide-animated";
import { HomeIcon } from "lucide-animated";

function MoviesDetails() {

  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

//Modal
const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

   useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://beforeiforget-server.onrender.com/movies/${id}`,
        );
        setMovie(response.data);

        // to show the loading page for 2 seconds
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [id]);

    //Delete function
  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://beforeiforget-server.onrender.com/movies/${id}`);

  setShow(false)
      navigate("/moviespage");
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="loader"></div>
      </div>
    );
  }

  return (
     <>
    <div>
       
      <div className="pt-4 flex flex-row ">
          <Link to="/moviespage">
            <ArrowLeftIcon className="ml-5 rounded-xl text-blue-950" />
          </Link>

          <Link to={"/"}><HomeIcon className="ml-5 text-blue-950"/></Link>

        </div>

        <div className="glass w-full max-w-2xl mx-auto rounded-xl">

          <div className="flex justify-center">
            <img className="h-120 w-90 p-5 object-contain" src={movie.poster_path} />
          </div>

          <div className="flex gap-7 flex-col p-10">
            <h1 className="items-left font-bold text-2xl">Title: {movie.title}</h1> 
            </div>

             <div className="italic text-lg flex gap-7 flex-col px-10 pb-6">Description: {movie.overview}</div>

            </div>


             <div className="flex justify-center gap-4 my-4">
          <div>
            <button
              onClick={handleShow}
              className="px-6 py-2 w-35 btnDay"
            >
              Delete
            </button>
          </div>
          <div>
            <button onClick={()=> navigate(`/books/edit/${id}`)} className="px-6 py-2 w-35 btnDay">
              Edit
            </button>
          </div>
        </div>

                {/*Are you sure part*/}
{show && (
  <div className="fixed inset-0  form flex items-center text-center justify-center">

    <div>

      <h2 className="text-3xl font-bold mb-6">
        Are You Sure?
      </h2>

      <div className="flex flex-col justify-end gap-3">

        <button
          onClick={handleClose}
          className="btnDay px-5 py-2"
        >
          Cancel
        </button>

        <button
          onClick={handleDelete}
          className="btnDay px-5 py-2"
        >
          Delete
        </button>
        <img src="https://reactiongifs.me/wp-content/uploads/2021/12/Hmm-are-you-lying-to-me.gif" />

      </div>

    </div>
  </div>
)}

    </div>
    </>
  )
}

export default MoviesDetails
