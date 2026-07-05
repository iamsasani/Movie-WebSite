import { useEffect, useState } from "react";
import axios from "axios";
import { ApiKey, BaseUrlImage , BaseUrlMovie } from "../data/data";
import TickerTitle from "../components/TickerTitle";

function Movies() {
  const [popular, setPopular] = useState([]);
  const [top, setTop] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const { data } = await axios.get(
        `${BaseUrlMovie}/movie/popular?api_key=${ApiKey}`,
      );
      setPopular(data.results);
    }
    loadMovies();
  }, []);
  useEffect(() => {
    async function loadMovies() {
      const { data } = await axios.get(
        `${BaseUrlMovie}/movie/top_rated?api_key=${ApiKey}`,
      );
      setTop(data.results);
    }
    loadMovies();
  }, []);

  return (
    <div className="min-h-screen mt-20  mb-10  container mx-auto grid grid-cols-4 xl:grid-cols-5 gap-10 justify-center  text-3xl">
      {popular.map((pop) => (
        <div key={pop.id} className="rounded-xl pb-2 bg-gray-900 overflow-hidden">
          <img
            src={`${BaseUrlImage}/w500${pop.poster_path}`}
            alt={pop.title}
            className="w-full cursor-pointer  h-40 sm:h-55 lg:h-96  xl:h-110 object-cover"
          />
          <TickerTitle
            text={pop.title}
            className="text-xl  w-auto mt-2 flex items-center overflow-hidden ml-2
           font-bold text-gray-300"

          />
          <div className="bg-amber-500 rounded-xl text-center mx-2 text-lg mt-1">IMDB: {pop.vote_average.toFixed(1)}</div>
        </div>
      ))}
      {top.map((top) => (
        <div key={top.id} className="rounded-xl pb-2 bg-gray-900 overflow-hidden">
          <img
            src={`${BaseUrlImage}/w500${top.poster_path}`}
            alt={top.title}
            className="w-full cursor-pointer  h-40 sm:h-55 lg:h-96  xl:h-110 object-cover"
          />
          <TickerTitle
            text={top.title}
            className="text-xl  w-auto mt-2 flex items-center overflow-hidden ml-2
           font-bold text-gray-300"

          />
          <div className="bg-amber-500 rounded-xl text-center mx-2 text-lg mt-1">IMDB: {top.vote_average.toFixed(1)}</div>
        </div>
      ))}
    </div>
  );
}

export default Movies;
