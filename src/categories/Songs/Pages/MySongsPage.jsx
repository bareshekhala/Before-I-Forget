import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
  import { Link } from 'react-router-dom'
import { HomeIcon } from "lucide-animated";
import { ArrowLeftIcon } from "lucide-animated";
import { DeleteIcon } from 'lucide-animated';



function MySongsPage() {
  const [fav,setFav] = useState([])
const [isLoading, setIsLoading] = useState(true);



  //Delete function
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://beforeiforget-server.onrender.com/favsongs/${id}`);

     setFav(fav.filter((song) => song.id !== id));

    } catch (error) {
      console.log(error);
    }
  };


  useEffect(()=>{
    const getFav = async() =>{
        try{
            const response = await axios.get("https://beforeiforget-server.onrender.com/favsongs")
            setFav(response.data)
            setTimeout(() => {
          setIsLoading(false);
        }, 2000);

        } catch (error) {
        console.log(error);
    }
}
    getFav()
  },[])


   if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="loader"></div>
      </div>
    );
  }


  return (
  <>
      <div className="pt-4 flex flex-row ">
        <Link to={"/songs"}>
          <ArrowLeftIcon className="ml-5 rounded-xl text-blue-950" />
        </Link>
        <Link to={"/"}>
          <HomeIcon className="ml-5 text-blue-950" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  max-w-6xl mx-auto justify-items-center gap-10 my-15">

      {fav.map((eachFav) => (
        <div key={eachFav.id} className="w-85">
          <div className="p-4 cardDay">
            <div className="w-full flex items-center justify-center p-4">
              <iframe
                data-testid="embed-iframe"
                className=" rounded-2xl"
                src={eachFav.url.replace(
                  "open.spotify.com/track/",
                  "open.spotify.com/embed/track/",
                )}
                width="100%"
                height="352"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
            <div className="mt-5 p-1">
              <h3>Title: {eachFav.title}</h3>
              <h3>Singer/Composer: {eachFav["singer/composer"]}</h3>
            </div>
            <button onClick= {()=> handleDelete(eachFav.id)} className=" cursor-pointer"><DeleteIcon/></button>
          </div>
        </div>
      ))}

    </div>
    </>
  )
}

export default MySongsPage
