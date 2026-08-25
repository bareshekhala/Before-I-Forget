import { Link } from "react-router-dom";
import { DeleteIcon } from "lucide-animated";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function ThoughtCard({ title, description, date, image, category, id }) {
  const navigate = useNavigate();
  //Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Delete function
  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://beforeiforget-server.onrender.com/memories/${id}`,
      );

      setShow(false);
      navigate("/thought");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-85 p-4 cardDay">
      <div className="w-full flex items-center justify-center p-4">
        <img className=" h-100 object-contain" src={image} />
      </div>
      {/* <Link to={`/thoughts/${id}`}> */}
      <div className="mt-5 p-1">
        <h3>Title: {title}</h3>
        <h3>description: {description}</h3>
        <p>{category}</p>
        <h3>{date}</h3>
      </div>
      <button onClick={handleShow} className=" cursor-pointer">
        <DeleteIcon />
      </button>
      {/* </Link> */}

      {/*Are you sure part*/}
      {show && (
        <div className="fixed inset-0  form flex items-center text-center justify-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Are You Sure?</h2>

            <div className="flex flex-col justify-end gap-3">
              <button onClick={handleClose} className="btnDay px-5 py-2">
                Cancel
              </button>

              <button onClick={handleDelete} className="btnDay px-5 py-2">
                Delete
              </button>
              <img src="https://reactiongifs.me/wp-content/uploads/2021/12/Hmm-are-you-lying-to-me.gif" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ThoughtCard;
