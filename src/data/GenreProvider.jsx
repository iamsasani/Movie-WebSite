import { useEffect, useState } from "react";
import axios from "axios";
import { ApiKey, BaseUrlMovie } from "./data";
import { GenreContext } from "./GenreContext";

export default function GenreProvider({ children }) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function loadGenres() {
      try {
        const { data } = await axios.get(
          `${BaseUrlMovie}/genre/movie/list?api_key=${ApiKey}`
        );
        setGenres(data.genres);
      } catch {
        setGenres([]);
      }
    }
    loadGenres();
  }, []);

  return (
    <GenreContext.Provider value={genres}>{children}</GenreContext.Provider>
  );
}