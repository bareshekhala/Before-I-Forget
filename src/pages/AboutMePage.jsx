import React from "react";
import bike from "../assets/bike.JPG";
import build from "../assets/build.png";
function AboutMePage() {
  return (
    <>
      <section className="max-w-4xl mx-auto px-5 pt-10">
        <h1 className="text-3xl md:text-4xl italic text-[#102a52]  py-6">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <p className="text-xl text-[#334155] leading-[1.7] text-justify mx-auto">
              Hi, I'm Mobina! I'm a former engineer making my way into web
              development.
              <br />
              I'm learning my way around the world of frontend development,
              working with technologies like HTML, CSS, JavaScript, React, and
              more, while also getting familiar with some backend development.
              <br />
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-70 h-73 object-cover rounded-2xl"
              src="https://media2.giphy.com/avatars/PerrineLand/1MA4js2WqjKa.jpg"
            />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-5 pt-15">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={bike} className="w-70 h-73 object-cover rounded-2xl" />
          </div>

          <div className="w-full md:w-1/2">
            <p className="text-xl text-[#334155] leading-[1.7] mx-auto text-justify">
              When I'm not coding, I'm probably riding my bike, reading a good
              book, rewatching Friends for the hundredth time, or learning audio
              production and collecting ideas for a podcast I recently started.
            </p>
          </div>
        </div>
      </section>

      {/* //about the project */}
      <section className="max-w-4xl mx-auto px-5 pt-12">
        <h1 className="text-3xl md:text-4xl italic text-[#102a52]  py-7">
          Before I Forget
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full">
            <p className="text-xl text-[#334155] leading-[1.7] text-justify mx-auto pt-5">
             "Before I Forget" is a personal archive for collecting and organizing content from books, movies, and songs, as well as thoughts and ideas.
<br/>
              The project was built with <span className="italic">React</span> and <span className="italic">Tailwind CSS</span>. It uses <span className="italic">APIs</span> to manage the content, <span className="italic">Axios</span> for data fetching, <span className="italic">Recharts</span> for the mood chart, and <span className="italic">Lucide Animated</span> for icons.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-5 pt-10 p-3">
        <div className="flex flex-col items-center mt-5">
          <div className="w-full ">
            <div className="w-full flex justify-center">
              <img className="w-75 h-80 object-cover rounded-2xl" src={build} />
            </div>

            <div>
              <p className="text-2xl italic text-[#334155] leading-[1.7] text-center mt-3 ">
                Let's Build something together
              </p>
              <hr/>
            </div>
            <div className="flex flex-row gap-3 mt-4 justify-center">
              <a href="https://github.com/bareshekhala">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQblkhBDCixhdGaP_B21didlIi1nkX4waw9wkGBKIevXg&s=10"
                  className="w-8 h-8 object-cover rounded-2xl cursor-pointer"
                />
              </a>

              <a href="https://castbox.fm/channel/id7175139?country=gb">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZFSCwCtT07pUEMBU0tKkVu00Qde9JQBes64WOD0zGkteqdnhaj-glf4nY&s=10"
                  className="w-8 h-8 object-cover rounded-2xl cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMePage;
