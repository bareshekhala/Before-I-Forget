import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "../categories/books/booksComponents/BookCard";
import MovieCard from "../categories/Movies/MovieCard";

function Discover() {

  const [mood, setMood] = useState("");
  const [suggestions1, setSuggestions1] = useState([]);
    const [suggestions2, setSuggestions2] = useState([]);

  const [moods, setMoods] = useState([]);

  //getting the moods
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

  const handleMood = async (e) => {
    const selectedMood = e.target.value;
    setMood(selectedMood);
    try {
      const response1 = await axios.get(
        "https://beforeiforget-server.onrender.com/books")
        const response2 = await axios.get( "https://beforeiforget-server.onrender.com/movies")

     ;

      const result1 = response1.data.filter((book) => {
        return book.moodId.includes(Number(selectedMood));
      });

        const result2 = response2.data.filter((movie) => {
        return movie.moodId.includes(Number(selectedMood));
      });



      setSuggestions1(result1);
      setSuggestions2(result2)
    } catch (error) {
      console.log(error);
    }
  };

  return (
<>
<div className="text-center mt-15">
<h1 className="italic text-3xl">How Are You Feeling Today?</h1>
<p className=" italic pt-2">Select a Mood to Discover What You Might Need Right Now</p>
</div>
        <div className="flex flex-wrap justify-center gap-3 mb-20 max-w-2xl mx-auto">
          {moods.map((mood) => {
            return (
             
                <button 
                key={mood.id} value={mood.id} onClick= {handleMood} className="mx-auto my-20 px-5 py-2 btnDay">
                  {mood.name}
                </button>
     
            );
          })}
        </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  max-w-6xl mx-auto justify-items-center gap-10 my-30">
      {suggestions1.map((book) => {
        return <BookCard key={book.id} {...book} />
        ;
      })}
      {suggestions2.map((movie)=>{
        return <MovieCard key={movie.id} {...movie}/>
      })}
    </div>
    
    </>
  );
}

export default Discover;
