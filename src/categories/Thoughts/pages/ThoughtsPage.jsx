import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HomeIcon} from "lucide-animated";
import { ArrowLeftIcon } from "lucide-animated";
import { Link } from "react-router-dom";

function ThoughtsPage() {
    const navigate = useNavigate()
  return (
    <>
   <div className="pt-4 flex flex-row ">
 
          <Link to={"/"}><HomeIcon className="ml-5 text-blue-950"/></Link>
          <button className="btnDay p-1 mx-3" onClick={()=> navigate("/thought/mythoughts")}>My Mind Archive</button>
        </div>


    <div className="md:italic text-center mt-60 flex flex-col gap-8 form w-[90%] md:w-120 mx-auto h-70 pt-10">
    <div>
<h1 className='text-3xl italic mt-3'>What's on Your Mind?</h1>
    </div>
    <div>
      <button className='btnDay p-4 mt-4 w-50 italic text-xl' onClick={()=> navigate("/thought/create")}>Add</button>
    </div></div></>
  )
}

export default ThoughtsPage
