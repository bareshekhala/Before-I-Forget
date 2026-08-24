import React from "react";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import {
  BookTextIcon,
  AudioLinesIcon,
  BrainIcon,
  ClapIcon,
} from "lucide-animated";
function DashboardPage() {
  return (
    <>
      <div className="flex w-full flex-col md:flex-row relative z-10">

        <section className="w-full min-w-0 overflow-x-hidden">

          <div className="text-left sticky top-0 z-10 w-full bg-inherit p-6 mb-8 md:p-10">
            <h1 className="italic text-3xl">Your Archive</h1>
            <p className="italic text-xl pt-3">
              ORGANIZE YOUR THOUGHTS AND MEMORIES
            </p>
            {/* <SearchBar className="justify-item-right" /> */}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto justify-items-center gap-10 my-20">

            <div className="flex flex-col size-50 border-2 p-2  cardDay text-center justify-center items-center gap-2 text-xl">

              <Link to={"/booksPage"} className="">
                Books
              </Link>{" "}
              <BookTextIcon />
            </div>

            <div className="flex flex-col size-50 border-2 p-2  cardDay text-center justify-center items-center gap-2 text-xl">
              <Link>Songs</Link>
              <AudioLinesIcon />
            </div>

            <div className="flex flex-col size-50 border-2 p-2  cardDay text-center justify-center items-center gap-2 text-xl">
              <Link>Movies</Link>
              <ClapIcon />
            </div>

            <div className="flex flex-col w-50 lg:w-[90%] text=2xl lg:col-span-3 h-50 border-2 p-2 cardDay text-center justify-center items-center gap-2 text-xl" >
              <Link
                to={"/thought"}>
                Brain Storming
              </Link>
              <BrainIcon/>
            </div>

</div>
       
        </section>
      </div>
    </>
  );
}

export default DashboardPage;
