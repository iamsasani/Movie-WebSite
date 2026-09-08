import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";
import axios from "axios";
import { useEffect, useState } from "react";
import { ApiKey, BaseUrlImage, BaseUrlMovie } from "../../data/data";
import { Link } from "react-router-dom";

function Header() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      try {
        const { data } = await axios.get(
          `${BaseUrlMovie}/movie/popular?api_key=${ApiKey}`,
        );
        setMovies(data.results);
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, []);

  return (
    <header
      className="text-white bg-contain bg-center mt-5 py-20 px-3 transition-all duration-700"
      style={{
        backgroundImage: `linear-gradient(to bottom , rgba(0 0 0/ 60%), rgba(0 0 0/ 50%) ,rgba(0 0 0/ 60%)), url("https://images.unsplash.com/photo-1669606340421-2a0928d9f7ae?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      }}
    >
      <div className="container mx-auto flex items-center justify-center">
        {loading ? (
          <div className="mt-12 rounded-xl bg-gray-800/50 animate-pulse" />
        ) : (
          <Swiper
            breakpoints={{
              320: { spaceBetween: 10, slidesPerView: 1 },
              640: { spaceBetween: 10, slidesPerView: 1 },
              768: { spaceBetween: 20, slidesPerView: 1 },
              1024: { spaceBetween: 50, slidesPerView: 1 },
            }}
            modules={[Autoplay]}
            autoplay={{ delay: 4000 }}
            loop
            className="mt-12 w-full max-w-4xl mx-auto"
          >
            {movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <div className="relative rounded-lg overflow-hidden shadow-2xl group cursor-pointer">
                    <img
                      className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                      src={`${BaseUrlImage}/w780${movie.backdrop_path}`}
                      alt={movie.title}
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white drop-shadow-lg line-clamp-1">
                        {movie.title}
                      </h2>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="bg-amber-500 text-black text-xs sm:text-sm font-bold px-2 py-1 rounded">
                          ⭐ {movie.vote_average.toFixed(1)}
                        </span>
                        {movie.release_date && (
                          <span className="text-gray-300 text-xs sm:text-sm">
                            {movie.release_date.split("-")[0]}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </header>
  );
}

export default Header;
