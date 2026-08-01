import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiKey, BaseUrlImage, BaseUrlMovie } from "../data/data";
import { UserContext } from "../Context/Context";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import {
  faHeart,
  faHeartBroken,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
import TrailerCart from "../components/Content/TrailerCart";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);



  useEffect(() => {
    async function loadMovie() {
      const { data } = await axios.get(
        `${BaseUrlMovie}/movie/${id}?api_key=${ApiKey}`,
      );
      setMovie(data);
    }
    loadMovie();
  }, [id]);
  const { user, session } = useContext(UserContext);

  async function handleAddToFavorite() {
    const newFavoriteStatus = !isFavorite;

    try {
      await axios.post(
        `${BaseUrlMovie}/account/${user.id}/favorite?api_key=${ApiKey}&session_id=${session}`,
        {
          media_type: "movie",
          media_id: movie.id,
          favorite: newFavoriteStatus,
        },
      );
      setIsFavorite(newFavoriteStatus);

      if (newFavoriteStatus) {
        toast.success(`${movie.title} has been added to your favorite`);
      } else {
        toast.error(`${movie.title} has been removed from your favorite`);
      }
    } catch {
      toast.error("there is a problem , please try again!");
    }
  }

  return (
    <div className="text-4xl container text-white min-h-screen mt-10 mx-auto">
      {movie ? (
        <div className="flex flex-col items-center justify-center gap-4 ">
          <div className="flex gap-10">
            <img
              className="w-45 h-70 aspect-auto lg:w-70 lg:h-96 rounded-sm"
              src={`${BaseUrlImage}/w342${movie.poster_path}`}
              alt={movie.title}
            />

            <div>
              <h1 className="text-3xl font-bold mb-4 mt-5 ">
                {movie.title} 🎥
              </h1>
              <h3>{movie.release_date?.split("-")[0]}</h3>

              <div className="flex gap-2 mt-10">
                {user ? (
                  <>
                    {isFavorite ? (
                      <button
                        className=" bg-red-500 text-[9px] lg:text-sm hover:bg-red-700 text-white font-bold px-4 py-2  rounded"
                        onClick={handleAddToFavorite}
                      >
                        Remove from your Favorite{" "}
                        <FontAwesomeIcon icon={faHeartBroken} />
                      </button>
                    ) : (
                      <button
                        className=" bg-blue-500 text-[9px] lg:text-sm hover:bg-blue-700  text-white font-bold px-4 py-2  rounded"
                        onClick={handleAddToFavorite}
                      >
                        Add to Favorite <FontAwesomeIcon icon={faHeart} />
                      </button>
                    )}
                  </>
                ) : (
                  <div></div>
                )}
                <button className="bg-red-500 text-[9px] lg:text-sm  hover:bg-red-700 text-white font-bold py-2 px-4  rounded">
                  Share <FontAwesomeIcon icon={faShareNodes} />
                </button>
              </div>

              {/* VotAverage */}
              <div className="text-[9px] text-sm flex  bg-gray-900/60 border-y-2 border-y-gray-00 mt-3">
                <div className="py-2   px-2 flex items-center flex-col justify-center text-yellow-400">
                  {movie.vote_average}
                  <FontAwesomeIcon
                    className="text-4xl lg:text-6xl "
                    icon={faImdb}
                  />
                </div>
                <div className="flex py-2 border-l-2 justify-center flex-col items-center">
                  <div className=" top-4 text-yellow-500 font-semibold">
                    rate this movie{" "}
                  </div>
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating"
                      sx={{
                        "& .MuiRating-iconEmpty": {
                          color: "white",
                        },
                      }}
                      className=" scale-90 lg:scale-100"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </Stack>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {movie.genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className="text-xs bg-gray-800 text-gray-200 px-2 py-1 rounded-full"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
              {/* watchList */}

              <div>{movie.lists}</div>
            </div>
          </div>
          <TrailerCart movie={movie} setMovie={setMovie} mediaType="movie" />
          <div className="text-xl bg-gray-900/80 text-gray-300  rounded-3xl p-10 m-10  font-light fontSum">
            <div className="">✔️summary :</div> <br />
            {movie.overview}
          </div>
        </div>
      ) : (
        "Movie not found"
      )}
    </div>
  );
}

export default Movie;
