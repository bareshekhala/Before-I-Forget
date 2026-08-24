import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { HomeIcon} from "lucide-animated";
import { ArrowLeftIcon } from "lucide-animated";
import { Link } from "react-router-dom";


function BookCreatePage() {
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [moodId, setMoodId] = useState([]);
  const [moods, setMoods] = useState([]);
// const[search,setSearch] = useState([])

//getting the moods
  useEffect(() => {
    const getMoods = async () => {
      try {
        const response = await axios.get(
          "https://beforeiforget-server.onrender.com/moods",
        );

        setMoods(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getMoods();
  }, []);

//post method
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        title: title,
        author: author,
        image: image,
        category: category,
        description: description,
        moodId: moodId,
        myBook: true
      };
      await axios.post("https://beforeiforget-server.onrender.com/books", body);

      navigate("/books/mybooks");

    } catch (error) {
      console.log(error);
    }
  };

//
  function handleMood(e, moodId){
if(e.target.checked){
setMoodId((pre)=>[...pre,moodId]);
}
else{
  setMoodId((pre)=>{
    return pre.filter((id)=> id !== moodId)
  })
}
  }

// //to search in database while the user type sth in the title
// const handleTitel = async(e) => {
//   let value = e.target.value
// setTitle(value)
//   (!value ? setSearch([]) : null)

//   try{
//     const response = await axios.get("https://beforeiforget-server.onrender.com/books")
//     let result = response.data.filter((book)=>{
//       return book.title.toLowerCase().includes(value.toLowerCase())
//     })
//     setSearch(result);

//   }catch(error){
//     console.log(error)
//   }
// }

  return (
    <div>
      <div className="pt-4 flex flex-row ">
          <Link to={"/booksPage"}>
            <ArrowLeftIcon className="ml-5 rounded-xl text-blue-950" />
          </Link>
          <Link to={"/"}><HomeIcon className="ml-5 text-blue-950"/></Link>
        </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-lg mx-auto mt-10 backdrop-blur-xs px-2 justify-items-center">

        <div className="flex flex-col gap-2">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=" px-4 py-3 form"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="  px-4 py-3 form"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Description</label>
          <textarea
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            className="px-4 py-3 form"
          />
        </div>

        <div className="flex flex-col gap-5">
          <div> <label>Image</label></div>

          <input type="url" name="image" value={image} 
          onChange={(e)=> setImage(e.target.value)}
          className="px-4 py-3 form"
          /> 
          
          <select value={category}
          onChange={(e)=> setCategory(e.target.value)}
          className="w-50 form">
                      <option value="" disabled>
    Choose a category
  </option>
            <option>Fiction</option>
            <option>Poetry</option>
            <option>Philosophy</option>
            <option>Psychology</option>
            <option>Self-help</option>
            <option>History</option>
            <option>Biography</option>
            <option>Memoir</option>
            <option>Science</option>
            <option>Fantasy</option>
            <option>Mystery</option>
            <option>Romance</option>
            <option>Classics</option>
            <option>Other</option>
          </select>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-4 mb-20 max-w-2xl mx-auto">
          {moods.map((mood) => {
            return (
              <div key={mood.id} >
                <input type="checkbox" value={mood.id} 
                onChange= {(e)=> handleMood(e, mood.id)}/>
                <label htmlFor={`mood-${mood.id}`} className="ml-2">
                  {mood.name}
                </label>
              </div>
            );
          })}
        </div>

        <button
          type="submit"
          className="btnDay h-15 mb-5 w-40 mx-auto"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default BookCreatePage;
