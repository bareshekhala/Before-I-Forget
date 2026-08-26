import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { HomeIcon } from "lucide-animated";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SongCard from '../components/SongCard';
import SearchBar from '../components/SearchBar';

function SongsPage() {
    const navigate = useNavigate();
  
const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
const [query, setQuery] = useState("")


  useEffect(() => {

    const getSongs = async () => {
      try {
        const response = await axios.get(
          "https://beforeiforget-server.onrender.com/songs"
        );

        setSongs(response.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    };

    getSongs();

  }, []);


   if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="loader"></div>
      </div>
    );
  }

// let selectedSongs = [ "Light of the Seven", "Lioness", "Between the Heavens and Me", "Believe", "The Prophet", "Fearless", "Wild Frontier", "Untouchable, Pt.1", "Adagio in G Minor", "Crying In The Shadows", "Deep - Remastered", "I've Never Been There", "In My Dreams", "Chopin: Nocturne No. 20 in C-Sharp Minor, Op. Posth.", "Right Here Waiting", "Still Got The Blues", "We Got Used To Us", "Original Sin", "Fool's Overture", "Pain", "Circle Of Life", "Numb", "The Great Flood", "Nothing to Fear", "Fragile", "One Last Goodbye - Remastered", "True Love Will Never Fade", "If You Go Away", "Killing Me Softly" , "The Windmills Of Your Mind","Dance Me to the End of Love", "El Amor","November Rain","Piano Sonata No. 14 in C-Sharp Minor, Op. 27 No. 2 \"Moonlight\": I. Adagio sostenuto", "Se - From \"Cinema Paradiso\""]

//  const recommendedSongs = songs.filter((song) => {
//     return song.myBook !== true && selectedSongs.includes(song.title);
//   });





  return (
    <>
      <div className="pt-4 flex flex-row ">
 <button
          onClick={() => navigate("/songs/create")}
          className="px-6 py-2 w-35 btnDay m-3 italic"
        >
          Add a New Song
        </button>

        <button
          onClick={() => navigate("/songs/mysongs")}
          className="px-6 py-2 w-35 btnDay m-3 italic"
        >
          My Songs
        </button>


        <Link to={"/"} className='pt-7'>
          <HomeIcon className="ml-5 text-blue-950" />
        </Link>
        
<SearchBar query={query} setQuery={setQuery}/>

</div>
  

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  max-w-6xl mx-auto justify-items-center gap-10 my-30">

  {songs
  .filter((song) =>
    song.title.toLowerCase().includes(query.toLowerCase())
  )
  .map((song) => (
    <SongCard
      key={song.id}
      id={song.id}
      title={song.title}
      singerComposer={song["singer/composer"]}
      image={song.image}
      url={song.url}
      moodId={song.moodId}
    />
  ))}




    </div></>
  )
}

export default SongsPage
