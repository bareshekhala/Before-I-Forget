import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Chart() {
  const [movies, setMovies] = useState([]);
  const [songs, setSongs] = useState([]);
  const [books, setBooks] = useState([]);
  const [moods, setMoods] = useState([]);
  const [thoughts, setThoughts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        let response1 = await axios.get(
          "https://beforeiforget-server.onrender.com/favbooks",
        );
        let response2 = await axios.get(
          "https://beforeiforget-server.onrender.com/favmovies",
        );
        let response3 = await axios.get(
          "https://beforeiforget-server.onrender.com/favsongs",
        );
        let response4 = await axios.get(
          "https://beforeiforget-server.onrender.com/moods",
        );
        let response5 = await axios.get(
          "https://beforeiforget-server.onrender.com/memories",
        );

        setBooks(response1.data);
        setMovies(response2.data);
        setSongs(response3.data);
        setMoods(response4.data);
        setThoughts(response5.data);

        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  //find the objects with a specific moodId to get the sum of them for X-axis

  let allData = [...books, ...movies, ...songs, ...thoughts];

  let data = moods.map((mood) => {
    let count = 0;

    allData.forEach((object) => {
      object.moodId && object.moodId.includes(mood.id) && count++;
    });

    return { mood: mood.name, count };
  });

  //   console.log(data);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-black">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <div className=" text-center mx-auto mt-15">
        <h1 className="text-3xl italic font-bold ">My Moods</h1>

        <p className="text-center mt-2 italic text-lg">
          See which moods appear most in your collection
        </p>
      </div>


      <div className="w-full max-w-4xl  h-100 mt-25 flex pr-6 mx-auto ">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis
              angle={-90}
              textAnchor="end"
              height={105}
              dataKey="mood"
              tick={{ fontSize: 12 }}
              interval={0}
            />

            <YAxis />

            <Tooltip />

            <Bar dataKey="count" fill="#C9A66B" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
export default Chart;
