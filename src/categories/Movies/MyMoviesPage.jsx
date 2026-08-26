import axios from "axios";
import { useEffect, useState } from "react";

import { HomeIcon } from "lucide-animated";
import { ArrowLeftIcon, DeleteIcon} from "lucide-animated";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";
function MyMoviesPage() {
  const navigate = useNavigate()
  const [mMovies, setMMovies] = useState([]);
    const [fav,setFav] = useState([])

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

     useEffect(()=>{
    const getFav = async() =>{
        try{
            const response = await axios.get("https://beforeiforget-server.onrender.com/favmovies")
            setFav(response.data)
            setTimeout(() => {
          // setIsLoading(false);
        }, 2000);

        } catch (error) {
        console.log(error);
    }
}
    getFav()
  },[])

    const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://beforeiforget-server.onrender.com/favmovies/${id}`);

        setFav((pre)=> pre.filter((movie)=>
          
          movie.id !== id
        ))
      navigate("/movies/mymovies");
    } catch (error) {
      console.log(error);
    }
  };

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

{fav.map((eachmovie) => {
  return (
<div key={eachmovie.id} className="w-85 p-4 cardDay">    
   <Link to={`/moviespage/${eachmovie.id}`}>
             <div className="w-full flex items-center justify-center p-4">
     
           <img className=" h-100 object-contain" src={eachmovie.poster_path} /></div>
        
           <div className="mt-5 p-1">
             <h3>Title: {eachmovie.title}</h3>
     
             </div>
           </Link>
           <div>

      <DeleteIcon className=" cursor-pointer" onClick={()=> handleDelete(eachmovie.id)}/>
    </div>
    </div>
  );
})}

    </div></div>
  );
}

export default MyMoviesPage;
