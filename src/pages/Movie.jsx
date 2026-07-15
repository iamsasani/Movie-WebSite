import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiKey, BaseUrlImage, BaseUrlMovie } from "../data/data";
import { UserContext } from "../Context/Context";
import toast from "react-hot-toast";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function loadMovie() {
      const { data } = await axios.get(
        `${BaseUrlMovie}/movie/${id}?api_key=${ApiKey}`,
      );
      setMovie(data);
    }
    loadMovie();
  }, [id]);
  

  const {login ,user , session} = useContext(UserContext);

 async function handleAddToFavorite(){
  const result =await axios.post(`${BaseUrlMovie}/account/${user.id}/favorite?api_key=${ApiKey}&session_id=${session}` , {
    media_type : "movie",
    media_id : movie.id,
    favorite:true,
  })
  toast.success(`${movie.title} has been added to your favorite`)
 }

  return (
    <div className="text-4xl container text-white min-h-screen  mx-auto">

      {
        movie ?
        <div className="flex flex-col items-center justify-center gap-4 ">
          <h1 className="text-3xl font-bold mb-4 mt-5 ">{movie.title} 🎥</h1>
          <img src={`${BaseUrlImage}/w780${movie.poster_path}`} alt={movie.title} />

          {
            login ? (
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded" onClick={handleAddToFavorite}>
            Add to Favorite
          </button>
            ):(
              <div></div>
            )
          }
          <p className="text-xl bg-gray-100 rounded-3xl p-10 m-10 text-gray-950 font-bold font-sans">✔️summary : <br/>{movie.overview}</p>
        </div> : "Movie not found"
      }

    </div>
  );
}

export default Movie;
