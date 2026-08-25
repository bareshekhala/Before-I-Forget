import React from 'react'
import { Link } from 'react-router-dom'
function MovieCard({poster_path,title,id}) {
  return (
<div className="w-85 p-4 cardDay">

        <div className="w-full flex items-center justify-center p-4">

      <img className=" h-100 object-contain" src={poster_path} /></div>
      <Link to={`/moviespage/${id}`}>
      <div className="mt-5 p-1">
        <h3>Title: {title}</h3>

        </div>
      </Link>
    </div>
  )
}

export default MovieCard
