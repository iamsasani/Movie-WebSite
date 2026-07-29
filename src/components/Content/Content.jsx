
import { Context } from "../../data/Context";
import "swiper/css/autoplay";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";
import TvCart from "./TvCart";
import { useContext } from "react";
import CartMovie from "./CartMovie";

function Content() {
  const { tvSeriesList, movies, movieType, setMovieType, Tv, tvType, setTvType } = useContext(Context);



  return (
    <div className="min-h-screen ">
      <main className="text-white  container mx-auto min-h-screen px-3 sm:p-0">

        {/* movies list */}
        <div className="md:flex gap-6  pb-2 items-baseline pt-15  mb-10 ">
          <h2 className="text-2xl text-rose-500 font-bold xl:text-4xl mb-4">Movies</h2>
          <ul className=" flex text-sm xl:text-2xl gap-5 items-baseline text-slate-400">
            <li
              className={`cursor-pointer bg-gray-900/90 p-2 rounded-full  transition duration-300 ${movieType === "movie/popular" ? "text-gray-100 text-sm" : ""}`}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setMovieType("movie/popular");
                }}
                className=""
              >
                Popular
              </a>
            </li>
            <li
              className={`cursor-pointer bg-gray-900/90 p-2 rounded-full  transition duration-300 ${movieType === "movie/top_rated" ? "text-gray-100 text-sm" : ""}`}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setMovieType("movie/top_rated");
                }}
                className=""
              >
                Top Rated
              </a>
            </li>
            <li
              className={`cursor-pointer transition bg-gray-900/90 p-2 rounded-full duration-300 ${movieType === "movie/upcoming" ? "text-gray-100 text-sm " : ""}`}
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
              className={`cursor-pointer transition bg-gray-900 p-2 rounded-full duration-300 ${movieType === "movie/now_playing" ? "text-gray-100 text-sm " : ""}`}
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
              <CartMovie
                key={movie.id}
                movie={movie}
              />
            </SwiperSlide>
          ))}
        </Swiper>


        {/* tv series list */}
        <div className="md:flex gap-4  items-baseline pt-15  mb-10 ">
          <h2 className="text-2xl text-rose-500 font-bold  xl:text-3xl mb-4">TV Series</h2>
          <ul className="mb-5 flex  gap-5 items-baseline text-slate-400">
            {tvSeriesList.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer bg-gray-900 p-2 rounded-full transition duration-300 ${tvType === item.path ? " block text-sm text-gray-100 xl:text-3xl" : " text-sm"}`}
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
            <SwiperSlide>
              <TvCart
                key={tv.id}
                tv={tv}
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </main>
    </div>
  );
}

export default Content;
