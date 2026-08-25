import React, { useState } from "react";
import axios from "axios";
import { HomeIcon } from "lucide-animated";
import { ArrowLeftIcon } from "lucide-animated";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

function ThoughtCreate() {
  const navigate = useNavigate();

  const [thoughts, setThoughts] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const [moods, setMoods] = useState([]);
  const [moodId, setMoodId] = useState([]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        id: uuidv4(),
        title: title,
        image: image,
        description: description,
        date: date,
        category: category,
        moodId: moodId,
      };
      await axios.post(
        "https://beforeiforget-server.onrender.com/memories",
        body,
      );

      navigate("/thought/mythoughts");
    } catch (error) {
      console.log(error);
    }
  };

  function handleMood(e, moodId) {
    if (e.target.checked) {
      setMoodId((pre) => [...pre, moodId]);
    } else {
      setMoodId((pre) => {
        return pre.filter((id) => id !== moodId);
      });
    }
  }

  return (
    <div>
      <div className="pt-4 flex flex-row ">
        <Link to={"/thought"}>
          <ArrowLeftIcon className="ml-5 rounded-xl text-blue-950" />
        </Link>
        <Link to={"/"}>
          <HomeIcon className="ml-5 text-blue-950" />
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 max-w-lg px-2 mx-auto mt-10 backdrop-blur-xs justify-items-center"
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
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
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
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="px-4 py-3 form"
          />{" "}
        </div>

        <div className="flex flex-col gap-5">
          <div>
            {" "}
            <label>Date</label>
          </div>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="px-4 py-3 form"
          />{" "}
        </div>
        {/* <p className="flex flex-row">
          Choose:
          <ArrowDownIcon />
        </p> */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-50 form p-5"
        >
          <option value="" disabled>
            Choose a category
          </option>
          <option>Dream✨🌌💫</option>
          <option>Memory📸</option>
          <option>Thought💭</option>{" "}
        </select>

        <div className="flex flex-wrap justify-center gap-3 pt-4 mb-20 max-w-2xl mx-auto">
          {moods.map((mood) => {
            return (
              <div key={mood.id}>
                <input
                  type="checkbox"
                  value={mood.id}
                  onChange={(e) => handleMood(e, mood.id)}
                />
                <label htmlFor={`mood-${mood.id}`} className="ml-2">
                  {mood.name}
                </label>
              </div>
            );
          })}
        </div>

        <button type="submit" className="btnDay h-15 mb-5 w-40 mx-auto">
          Add
        </button>
      </form>
    </div>
  );
}

export default ThoughtCreate;
