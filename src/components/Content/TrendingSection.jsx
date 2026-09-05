import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { ApiKey, BaseUrlImage, BaseUrlMovie } from "../../data/data";

function TrendingSection() {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTrending() {
      try {
        const { data } = await axios.get(
          `${BaseUrlMovie}/trending/all/day?api_key=${ApiKey}`
        );
        setTrending(data.results);
      } finally {
        setLoading(false);
      }
    }
    loadTrending();
  }, []);


  function getPath(item) {
    return item.media_type === "tv" ? `/tv/${item.id}` : `/movies/${item.id}`;
  }

  function getTitle(item) {
    return item.media_type === "tv" ? item.name : item.title;
  }

  return (
    <div className="md:flex gap-6 pb-2 items-baseline pt-15 mb-10">
      <div className="w-full">
        <h2 className="text-2xl text-rose-500 font-bold xl:text-4xl mb-4">
          🔥 Trending Today
        </h2>

        {loading ? (
          <div className="flex gap-4 overflow-hidden">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-72 w-full rounded-sm bg-gray-800/50 animate-pulse shrink-0"
              />
            ))}
          </div>
        ) : (
          <Swiper
            breakpoints={{
              320: { slidesPerView: 4, spaceBetween: 20 },
              768: { slidesPerView: 5, spaceBetween: 20 },
              1024: { slidesPerView: 6, spaceBetween: 20 },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {trending.map((item) => (
              <SwiperSlide key={item.id}>
                <Link to={getPath(item)}>
                  <div className="relative rounded-sm overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
                    <img
                      src={`${BaseUrlImage}/w500${item.poster_path}`}
                      className="imgCart"
                      alt={getTitle(item)}
                    />
                    <div className="nameRate">
                      <h1>{getTitle(item)}</h1>
                      <span>{item.vote_average.toFixed(1)} /10 ⭐</span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default TrendingSection;