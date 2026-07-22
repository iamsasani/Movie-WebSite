
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
        <div className="md:flex gap-6 border-b  pb-2 items-baseline pt-15  mb-10 ">
          <h2 className="text-2xl  xl:text-4xl mb-4">Movies</h2>
          <ul className="mb-4 flex text-xl xl:text-2xl gap-10 items-baseline text-yellow-200">
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
              <CartMovie
                key={movie.id}
                movie={movie}
              />
            </SwiperSlide>
          ))}
        </Swiper>


        {/* tv series list */}
        <div className="md:flex gap-4 border-b items-baseline pt-15  mb-10 ">
          <h2 className="text-2xl  xl:text-3xl mb-4">TV Series</h2>
          <ul className="mb-5 flex  gap-10 items-baseline text-yellow-200">
            {tvSeriesList.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer transition duration-400 ${tvType === item.path ? "text-yellow-400 block text-2xl xl:text-3xl" : "text-yellow-200 text-xl xl:text-2xl"}`}
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
