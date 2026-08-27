import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
function Navbar() {
  const [showDiscover, setShowDiscover] = useState(false);
  const [showArchive, setShowArchive] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      <nav className="hidden md:flex sticky top-0 h-screen w-64 shrink-0 flex-col justify-between p-5 backdrop-blur-xs bg-[#102a52] text-gray-50">
        <div>
          <h1 className="text-3xl mt-4.5 italic">Before I Forget</h1>

          <div className="mt-10 text-lg font-mono pt-3 uppercase">
            <Link to={"/"}>
              <p className="p-2 hover:bg-white/5">Home</p>
            </Link>
            <div
              onMouseEnter={() => setShowDiscover(true)}
              onMouseLeave={() => setShowDiscover(false)}
            >
              <p className="p-2 cursor-pointer hover:bg-white/5">Discover</p>

              {showDiscover && (
                <div className="ml-5 text-base">
                  <Link to="/discover">
                    <p className="p-2">by Mood</p>
                  </Link>

                  <Link to="/discover/category">
                    <p className="p-2">by Category</p>
                  </Link>
                </div>
              )}
            </div>
            <Link to={"/booksPage"}>
              <p className="p-2 hover:bg-white/5">Books</p>
            </Link>

            <Link to={"/moviespage"}>
              <p className="p-2 hover:bg-white/5">Movies</p>
            </Link>
            <Link to={"/songs"}>
              <p className="p-2 hover:bg-white/5">Songs</p>
            </Link>

            <Link to={"/thought"}>
              <p className="p-2 hover:bg-white/5">Brain Storming</p>
            </Link>
            <div
              onMouseEnter={() => setShowArchive(true)}
              onMouseLeave={() => setShowArchive(false)}
            >
              <p className="p-2 cursor-pointer hover:bg-white/5">My Archive</p>

              {showArchive && (
                <div className="ml-5 text-base">
                  <Link to="/books/mybooks">
                    <p className="p-2">My Books</p>
                  </Link>

                  <Link to="/movies/mymovies">
                    <p className="p-2">My Movies</p>
                  </Link>

                  <Link to="/songs/mysongs">
                    <p className="p-2">My Songs</p>
                  </Link>

                  <Link to="/thought/mythoughts">
                    <p className="p-2">My Mind Archive</p>
                  </Link>
                </div>
              )}
            </div>
            <Link to={"/chart"}>
              <p className="p-2 hover:bg-white/5">My Mood Chart</p>
            </Link>

            <Link to={"/aboutme"}>
              <p className="p-2 hover:bg-white/5">about</p>
            </Link>
          </div>
        </div>
<Footer/>
      </nav>

      {/* Navbar in smaller Screen */}
      <nav className="flex md:hidden sticky top-0 z-20 w-full items-center justify-between p-4 backdrop-blur-md flex-col gap-y-10 bg-[#102a52] text-gray-50">
        <h1 className="text-4xl italic ">Before I Forget</h1>

        <select
          className=" bg-white/5 h-8 rounded-md pl-2"
          defaultValue={Option[1]}
          onChange={(e) => {
            e.target.value === "Discover by Mood" && navigate("/discover");
            e.target.value === "Discover by Category" &&
              navigate("/discover/category");
            (e.target.value === "Home" && navigate("/"),
              e.target.value === "Books" && navigate("/booksPage"));
            e.target.value === "Movies" && navigate("/moviespage");
            e.target.value === "Songs" && navigate("/songs");
            e.target.value === "Chart" && navigate("/chart");
            e.target.value === "About" && navigate("/aboutme");
            e.target.value === "Brain Storming" && navigate("/thoughts");
          }}
        >
          <option>Choose</option>
          <option>Home</option>
          <option>Books</option>
          <option>Movies</option>
          <option>Songs</option>
          <option>Brain Storming</option>
          <option>Discover by Mood</option>
          <option>Discover by Category</option>
          <option>Chart</option>
          <option>About</option>
        </select>
      </nav>
    </>
  );
}

export default Navbar;
