import { useEffect, useState } from "react";
import { Context } from "./Context";
import axios from "axios";
import {  BaseUrlMovie } from "./data";

const MovieContextProvider = (props) => {

    const tvSeriesList = [
    { id: 1, text: "Airing Today", path: "tv/airing_today" },
    { id: 2, text: "On The Air", path: "tv/on_the_air" },
    { id: 3, text: "Popular", path: "tv/popular" },
    { id: 4, text: "Top Rated", path: "tv/top_rated" },
  ];
    //Movies fot cart
    const [movies, setMovies] = useState([]);
    const [movieType, setMovieType] = useState("movie/top_rated");

      useEffect(() => {
    async function loadMovies() {
      const { data } = await axios.get(
        `${BaseUrlMovie}/${movieType}`,
      );
      setMovies(data.results);
    }

    loadMovies();
  }, [movieType]);
  //  Tv for TvCart
  const [Tv, setTv] = useState([]);
  const [tvType, setTvType] = useState("tv/top_rated");

    useEffect(() => {
    async function loadTV() {
      const { data } = await axios.get(
        `${BaseUrlMovie}/${tvType}`,
      );
      setTv(data.results);
    }

    loadTV();
  }, [tvType]);

  // for login and sign up page
  const [showPass , setShowPass ] = useState(false)

  const contextValue = { tvSeriesList, movies, setMovies, movieType, setMovieType, Tv, setTv, tvType, setTvType , showPass , setShowPass };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default MovieContextProvider;
