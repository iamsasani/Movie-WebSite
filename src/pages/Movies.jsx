import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ApiKey, BaseUrlImage, BaseUrlMovie } from "../data/data";
import TickerTitle from "../components/TickerTitle";
import { Link } from "react-router-dom";
import { GenreContext } from "../data/GenreContext";

function Movies() {
  const genres = useContext(GenreContext);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    async function loadMovies() {
      setLoading(true);
      try {
        const genreParam = selectedGenre ? `&with_genres=${selectedGenre}` : "";
        const { data } = await axios.get(
          `${BaseUrlMovie}/discover/movie?api_key=${ApiKey}${genreParam}`
        );
        setMovies(data.results);
      } finally {
        setLoading(false);
      }
    }
    loadMovies();
  }, [selectedGenre]);

  return (
    <div className="min-h-screen mt-20 mb-10 container mx-auto px-3">
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setSelectedGenre(null)}
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            selectedGenre === null
              ? "bg-rose-500 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          All
        </button>
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => setSelectedGenre(genre.id)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              selectedGenre === genre.id
                ? "bg-rose-500 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {genre.name}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="h-72 rounded-xl bg-gray-800/50 animate-pulse" />
          ))}
        </div>
      ) : movies.length === 0 ? (
        <p className="text-gray-400 text-center text-xl">No movies found for this genre.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <div key={movie.id} className="rounded-xl pb-2 bg-gray-900 overflow-hidden">
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`${BaseUrlImage}/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full cursor-pointer h-40 sm:h-55 lg:h-96 xl:h-110 object-cover"
                />
              </Link>
              <TickerTitle
                text={movie.title}
                className="text-xl w-auto mt-2 flex items-center overflow-hidden ml-2 font-bold text-gray-300"
              />
              <div className="bg-amber-500 rounded-xl text-center mx-2 text-sm sm:text-lg mt-1">
                IMDB: {movie.vote_average.toFixed(1)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Movies;