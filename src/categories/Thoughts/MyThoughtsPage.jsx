import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import ThoughtCard from './ThoughtCard';
import { HomeIcon } from "lucide-animated";
import { ArrowLeftIcon } from "lucide-animated";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MyThoughtsPage() {
    const navigate = useNavigate();
  
const [thoughts, setThoughts] = useState([]);

  useEffect(() => {

    const getThoughts = async () => {
      try {
        const response = await axios.get(
          "https://beforeiforget-server.onrender.com/memories"
        );

        setThoughts(response.data);

      } catch (error) {
        console.log(error);
      }
    };

    getThoughts();

  }, []);

  return (
    <>
      <div className="pt-4 flex flex-row ">
        <Link to={"/thought"}>
          <ArrowLeftIcon className="ml-5 rounded-xl text-blue-950" />
        </Link>
        <Link to={"/"}>
          <HomeIcon className="ml-5 text-blue-950" />
        </Link>
      </div>


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  max-w-6xl mx-auto justify-items-center gap-10 my-30">

      {thoughts.map((thought) => (
        <ThoughtCard
          key={thought.index}
          {...thought}
        />
      ))}

    </div></>
  )
}

export default MyThoughtsPage
