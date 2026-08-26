import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../booksComponents/BookCard";
import { HomeIcon } from "lucide-animated";
import { ArrowLeftIcon, DeleteIcon } from "lucide-animated";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function MyBooks() {
    const navigate = useNavigate();
  
  const [mBooks, setMbooks] = useState([]);
  const [fav,setFav] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://beforeiforget-server.onrender.com/books",
        );
        setMbooks(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const myBooks = mBooks.filter((book) => book.myBook === true);

   useEffect(()=>{
    const getFav = async() =>{
        try{
            const response = await axios.get("https://beforeiforget-server.onrender.com/favbooks")
            setFav(response.data)
            setTimeout(() => {
          // setIsLoading(false);
        }, 2000);

        } catch (error) {
        console.log(error);
    }
}
    getFav()
  },[])

    const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://beforeiforget-server.onrender.com/favbooks/${id}`);

        setFav((pre)=> pre.filter((book)=>
          
          book.id !== id
        ))
      navigate("/books/mybooks");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <div className="pt-5 pb-4 flex flex-row ">
        <Link to={"/booksPage"}>
          <ArrowLeftIcon className="ml-5 rounded-xl text-blue-950" />
        </Link>
        <Link to={"/"}>
          <HomeIcon className="ml-5 text-blue-950" />
        </Link>
      </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  max-w-6xl mx-auto justify-items-center gap-10 my-30">
      {myBooks.map((book) => {
        return <BookCard key={book.id} {...book} />;
      })}

{fav.map((eachbook) => {
  return (
    <div key={eachbook.id} className="w-85 p-4 cardDay flex flex-col">
      <Link to={`/booksPage/${eachbook.id}`}>
        <div className="w-full flex items-center justify-center p-4">
          <img className=" h-100 object-contain" src={eachbook.image} />
        </div>

        <div className="mt-5 p-1">
          <h3>Title: {eachbook.title}</h3>
          <h3>Author: {eachbook.author}</h3>
        </div>
      </Link>
      <DeleteIcon className=" cursor-pointer" onClick={()=> handleDelete(eachbook.id)}/>
    </div>
  );
})}
    </div>
    
    </div>
  );
}

export default MyBooks;
