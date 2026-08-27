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
          <div className="text-left sticky top-0 z-10 w-full bg-inherit p-6 md:p-10">
            <h1 className="italic text-3xl md:text-4xl text-[#334155] ">
              Your Archive
            </h1>

            <p className="italic text-xl pt-3 md:text-2xl text-[#334155] ">
              ORGANIZE YOUR THOUGHTS, MEDIA AND MEMORIES
            </p>
          </div>

          <div className="max-w-5xl mx-auto px-6 mt-3">
            <div className="p-8 flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="p-8 form ">
                <h2 className="text-2xl italic mb-6 border-b border-current/20 pb-2">
                  Discover by Mood
                </h2>

                <h3 className="text-2xl font-semibold italic mb-2">
                  How are you feeling today?
                </h3>
                <p>
                  Explore your archive based on your current mood and find the
                  perfect book, movie, or song.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-6">
                  <div className="flex flex-row gap-4 flex-wrap">
                    <h1 className="mt-2 flex items-center justify-center gap-1 rounded-3xl px-4 h-10 bg-cyan-200/20">
                      <span>🌊</span>
                      <span>Calm</span>
                    </h1>

                    <h1 className="flex items-center justify-center gap-1 rounded-3xl px-4 h-10 bg-gray-500/20">
                      <span>⚰️</span>
                      <span>Dark</span>
                    </h1>
                    <h1 className="flex items-center justify-center gap-1 rounded-3xl px-4 h-10 bg-purple-400/25">
                      <span>🛸</span>
                      <span>Fantasy</span>
                    </h1>

                    <h1 className="flex items-center justify-center gap-1 rounded-3xl px-4 h-10 bg-green-500/20">
                      <span>🔦</span>
                      <span>Curious</span>
                    </h1>

                    <h1 className="flex items-center justify-center gap-1 rounded-3xl px-4 h-10 bg-yellow-400/20">
                      <span>💭</span>
                      <span>Philosophical</span>
                    </h1>
                  </div>

                  <Link
                    to="/discover"
                    className="btnDay px-8 mt-4 text-lg font-medium w-48 flex items-center h-15 justify-center"
                  >
                    Explore Moods
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto justify-items-center gap-10 my-10 px-6">
            <div className="flex flex-col size-50 border-2 p-2  cardDay text-center justify-center items-center text-xl ">
              <Link
                to={"/booksPage"}
                className="flex items-center flex-col  justify-center"
              >
                <h1>Books</h1>
                <div className="mt-3 w-16 h-16 bg-[#fdfaf6]/50 hover:bg-[#ff6b6b]/10 rounded-2xl flex items-center justify-center">
                  <BookTextIcon size={35} />
                </div>
              </Link>
            </div>

            <div className="flex flex-col size-50 border-2 p-2  cardDay text-center justify-center items-center text-xl ">
              <Link
                to={"/songs"}
                className="flex items-center flex-col  justify-center"
              >
                <h1>Songs</h1>
                <div className="mt-3 w-16 h-16 bg-[#fdfaf6]/50 hover:bg-[#ff6b6b]/10 rounded-2xl flex items-center justify-center">
                  <AudioLinesIcon size={35} />
                </div>
              </Link>
            </div>

            <div className="flex flex-col size-50 border-2 p-2  cardDay text-center justify-center items-center text-xl ">
              <Link
                to={"/moviespage"}
                className="flex items-center flex-col  justify-center"
              >
                <h1>Movies</h1>
                <div className="mt-3 w-16 h-16 bg-[#fdfaf6]/50 hover:bg-[#ff6b6b]/10 rounded-2xl flex items-center justify-center">
                  <ClapIcon size={35} />
                </div>
              </Link>
            </div>

            <div className="flex flex-col size-50 border-2 p-2  cardDay text-center justify-center items-center text-xl ">
              <Link
                to={"/thought"}
                className="flex items-center flex-col  justify-center"
              >
                <h1>Brain Storming</h1>
                <div className="mt-3 w-16 h-16 bg-[#fdfaf6]/50 hover:bg-[#ff6b6b]/10 rounded-2xl flex items-center justify-center">
                  <BrainIcon size={35} />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default DashboardPage;
