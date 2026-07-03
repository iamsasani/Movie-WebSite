import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";
import axios from "axios";
import { useEffect, useState } from "react";
import { ApiKey, BaseUrlImage, BaseUrlMovie } from "../../data/data";

function Header() {


  const [movies , setMovies] =useState([]);



  useEffect(() => {
    async function loadMovies() {
      const { data } = await axios.get(`${BaseUrlMovie}/movie/popular?api_key=${ApiKey}`);
      setMovies(data.results);
    }

    loadMovies();
  }, []);

  return (
    <header
      className="text-white bg-contain bg-center mt-5
      py-20 px-3  transition-all duration-700
    "
      style={{
        backgroundImage: `linear-gradient(to bottom , rgba(0 0 0/ 60%), rgba(0 0 0/ 50%) ,rgba(0 0 0/ 60%)), url("https://images.unsplash.com/photo-1669606340421-2a0928d9f7ae?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      }}
    >
      <div className="container mx-auto">
        <Swiper
          breakpoints={{
            320: {
              spaceBetween: 10,
              slidesPerView: 1,
            },
            640: {
              spaceBetween: 10,
              slidesPerView: 2,
            },
            768: {
              spaceBetween: 20,
              slidesPerView: 3,
            },
            1024: {
              spaceBetween: 50,
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
          loop
          className="mt-12"
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div  className="relative">
              <img
                className="w-full cursor-pointer  max-h-200 sm:max-h-115   md:h-87 xl:h-120 object-cover"
                src={`${BaseUrlImage}/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div  className="flex absolute bottom-10  flex-col left-10 font-bold rounded-2xl  backdrop-blur-xs p-1">
              <span className=" text-4xl
               ">{movie.vote_average.toFixed(1)}/10 ⭐ </span>
               <span className="text-2xl
               ">{movie.title}</span>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </header>
  );
}

export default Header;
