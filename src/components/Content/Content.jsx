import Cart from "./Cart";
import { Context } from "../../data/Context";
import { useContext, useEffect, useState } from "react";
import "swiper/css/autoplay";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import axios from "axios";
import { ApiKey, BaseUrlImage, BaseUrlMovie } from "../../data/data";
import { NavLink } from "react-router-dom";
import TvCart from "./TvCart";

function Content() {
  const { images } = useContext(Context);

  const [movies, setMovies] = useState([]);
  const [Tv, setTv] = useState([]);

  const [movieType, setMovieType] = useState("movie/top_rated");
  const [tvType, setTvType] = useState("tv/top_rated");

  useEffect(() => {
    async function loadMovies() {
      const { data } = await axios.get(
        `${BaseUrlMovie}/${movieType}?api_key=${ApiKey}`,
      );
      setMovies(data.results);
    }

    loadMovies();
  }, [movieType]);

  useEffect(() => {
    async function loadTV() {
      const { data } = await axios.get(
        `${BaseUrlMovie}/${tvType}?api_key=${ApiKey}`,
      );
      setTv(data.results);
    }

    loadTV();
  }, [tvType]);

  const tvSeriesList = [
    { id: 1, text: "Airing Today", path: "tv/airing_today" },
    { id: 2, text: "On The Air", path: "tv/on_the_air" },
    { id: 3, text: "Popular", path: "tv/popular" },
    { id: 4, text: "Top Rated", path: "tv/top_rated" },
  ];

  return (
    <div className="min-h-screen ">
      <main className="text-white  container mx-auto min-h-screen px-3 sm:p-0">
        <div className="md:flex gap-6 border-b  pb-2 items-baseline pt-15  mb-10 ">
          <h2 className="text-2xl  xl:text-4xl mb-4">Movies</h2>
          <ul className="md:flex text-xl xl:text-2xl gap-10 items-baseline text-yellow-200">
            <li
              className={`cursor-pointer transition duration-400 ${movieType === "movie/top_rated" ? "text-yellow-400 text-2xl xl:text-3xl " : ""}`}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setMovieType("movie/top_rated");
                }}
              >
                Top Rated
              </a>
            </li>
            <li
              className={`cursor-pointer transition duration-400 ${movieType === "movie/upcoming" ? "text-yellow-400 text-2xl xl:text-3xl " : ""}`}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setMovieType("movie/upcoming");
                }}
              >
                Upcoming
              </a>
            </li>
            <li
              className={`cursor-pointer transition duration-400 ${movieType === "movie/now_playing" ? "text-yellow-400 text-2xl xl:text-3xl " : ""}`}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setMovieType("movie/now_playing");
                }}
              >
                Now Playing
              </a>
            </li>
          </ul>
        </div>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Cart
                key={movie.id}
                rate={movie.vote_average.toFixed(1)}
                address={`${BaseUrlImage}/w500${movie.poster_path}`}
                name={movie.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="md:flex gap-4 border-b items-baseline pt-15  mb-10 ">
          <h2 className="text-2xl  xl:text-3xl mb-4">TV Series</h2>
          <ul className="md:flex  gap-10 items-baseline text-yellow-200">
            {tvSeriesList.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer ${tvType === item.path ? "text-yellow-400 block text-2xl xl:text-3xl" : "text-yellow-200 text-xl xl:text-2xl"}`}
                onClick={() => setTvType(item.path)}
              >
                <NavLink>{item.text}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {Tv.map((tv) => (
            <SwiperSlide key={tv.id}>
              <TvCart
                key={tv.id}
                rate={tv.vote_average.toFixed(1)}
                address={`${BaseUrlImage}/w500${tv.poster_path}`}
                name={tv.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="md:flex gap-4 border-b items-baseline pt-15  mb-10 ">
          <h2 className="text-2xl  xl:text-3xl mb-4">Suggestions 🌟</h2>
        </div>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {images.map(({ id, address, name }) => (
            <SwiperSlide key={id}>
              <Cart key={id} address={address} name={name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  );
}

export default Content;
