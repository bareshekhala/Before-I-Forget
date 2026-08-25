import { Link } from "react-router-dom";
import { DeleteIcon } from "lucide-animated";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function SongCard({ title, singerComposer, image, id, url, moodId }) {
  const navigate = useNavigate();

  const handleFav = async (e) => {
    e.preventDefault();

    try {
      let body = {
        id: uuidv4(),
        title: title,
        "singer/composer": singerComposer,
        url: url,
        image: image,
        moodId: moodId,
      };
      await axios.post(
        "https://beforeiforget-server.onrender.com/favsongs",
        body,
      );
      navigate("/songs/mysongs");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-85 p-4 cardDay flex flex-col">
      <div className="w-full flex items-center justify-center p-4">
        <iframe
          data-testid="embed-iframe"
          className=" rounded-2xl"
          src={url.replace(
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
      <div className="mt-auto p-1">
        <h3>Title: {title}</h3>
        <h3>Singer/Composer: {singerComposer}</h3>
        <button onClick={handleFav} className="btnDay p-1 w-36 mt-2">
          Add to My Songs
        </button>
      </div>
    </div>
  );
}

export default SongCard;
