import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="hidden md:flex sticky top-0 h-screen w-64 shrink-0 flex-col justify-between p-6 backdrop-blur-xs">
        <div>
          <h1 className="text-4xl italic">Before I Forget</h1>

          <div className="mt-10">
            <Link to={"/"}>
              <p>Home</p>
            </Link>
            <p>Archive</p>
            <Link to={"/discover"}>
              <p>Discover</p>
            </Link>
          </div>
        </div>
      </nav>

      <nav className="flex md:hidden sticky top-0 z-20 w-full items-center justify-between p-4 backdrop-blur-md flex-col gap-y-10 ">
        <h1 className="text-4xl italic">Before I Forget</h1>

        <select
          onChange={(e) =>
            (e.target.value === "Discover" && navigate("/discover"))(
              e.target.value === "Home" && navigate("/"),
            )
          }
        >
          <option value="" disabled>
            Choose
          </option>
          <option>Home</option>
          <option>Archive</option>
          <option>Discover</option>
        </select>
      </nav>
    </>
  );
}

export default Navbar;
