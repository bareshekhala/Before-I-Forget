import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const[showDiscover, setShowDiscover] = useState(false)
  const navigate = useNavigate();
  return (
    <>
      <nav className="hidden md:flex sticky top-0 h-screen w-64 shrink-0 flex-col justify-between p-5 backdrop-blur-xs">
        <div>
          <h1 className="text-4xl italic">Before I Forget</h1>

          <div className="mt-10 text-lg">
            <Link to={"/"}>
              <p className="p-2">Home</p>
            </Link>
            <div onMouseEnter={()=> setShowDiscover(true)} onMouseLeave={()=> setShowDiscover(false)}>
               
                <p className="p-2 cursor-pointer">Discover</p>


{showDiscover && (
    <div className="ml-5 text-base">
      <Link to="/discover">
        <p className="p-2">by Mood</p>
      </Link>

      <Link to="/discover/category">
        <p className="p-2">by Category</p>
      </Link>
    </div>)}



            </div>
             <Link to={"/booksPage"}>
              <p className="p-2">Books</p>
            </Link>

             <Link to={"/moviespage"}>
              <p className="p-2">Movies</p>
            </Link>
            <Link to={"/songs"}>
              <p className="p-2">Songs</p>
            </Link>
          </div>
        </div>

      </nav>

      <nav className="flex md:hidden sticky top-0 z-20 w-full items-center justify-between p-4 backdrop-blur-md flex-col gap-y-10 ">
        <h1 className="text-4xl italic">Before I Forget</h1>

        <select defaultValue={Option[1]}
          onChange={(e) => {
            e.target.value === "Discover by Mood" && navigate("/discover");
            e.target.value === "Discover by Category" && navigate("/discover/category");
            e.target.value === "Home" && navigate("/"),

              e.target.value === "Books" && navigate("/booksPage")
               e.target.value === "Movies" && navigate("/moviespage")
                e.target.value === "Songs" && navigate("/songs")
          }}
        >
          <option>
            Choose
          </option>
          <option>Home</option>
          <option>Books</option>
          <option>Movies</option>
                    <option>Songs</option>

          <option>Discover by Mood</option>
                    <option>Discover by Category</option>

        </select>
      </nav>
    </>
  );
}

export default Navbar;
