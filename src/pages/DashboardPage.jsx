import React from "react";

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
              ORGANIZE YOUR THOUGHTS, MEDIA AND MEMORIES
            </p>

          </div>

            <div className="max-w-5xl mx-auto px-6 mt-6">
             <div className="form p-8 flex flex-col md:flex-row items-center justify-between gap-6">
               <div className="text-left">
                             <h2 className="text-2xl italic mb-6 border-b border-current/20 pb-2">Discover by Mood</h2>

                 <h3 className="text-2xl font-semibold italic mb-2">How are you feeling today?</h3>
                 <p>Explore your archive based on your current mood and find the perfect book, movie, or song.</p>
               </div>
               <Link to="/discover" className="btnDay px-8 py-3 text-lg font-medium whitespace-nowrap">
                 Explore Moods
               </Link>
             </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto justify-items-center gap-10 my-10">
            

            <div className="flex flex-col size-50 border-2 p-2  cardDay text-center justify-center items-center gap-2 text-xl ">

              <Link to={"/booksPage"} className="">
                Books
              </Link>{" "}
              <BookTextIcon  />
            </div>

            <div className="flex flex-col size-50 border-2 p-2  cardDay text-center justify-center items-center gap-2 text-xl">
              <Link to={"/songs"}>Songs</Link>
              <AudioLinesIcon />
            </div>

            <div className="flex flex-col size-50 border-2 p-2  cardDay text-center justify-center items-center gap-2 text-xl">
              <Link to={"/moviespage"}>Movies</Link>
              <ClapIcon />
            </div>

            <div className="flex flex-col w-50 lg:w-[90%] text=2xl lg:col-span-3 h-37 border-2 p-2 cardDay text-center justify-center items-center gap-2 text-xl" >
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
