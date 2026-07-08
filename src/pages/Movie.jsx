import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiKey, BaseUrlImage, BaseUrlMovie } from "../data/data";

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
  console.log(movie);



  return (
    <div className="text-4xl container mx-auto   text-white min-h-screen  ">

      {
        movie ?
        <div>
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          <img src={`${BaseUrlImage}/w780${movie.poster_path}`} alt={movie.title} />
          <p className="text-xl">{movie.overview}</p>
        </div> : "Movie not found"
      }

    </div>
  );
}

export default Movie;
