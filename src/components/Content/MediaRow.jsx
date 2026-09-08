import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ApiKey, BaseUrlMovie } from "../../data/data";
import CartMovie from "./CartMovie";
import TvCart from "./TvCart";

function MediaRow({ title, endpoint, mediaType }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadItems() {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `${BaseUrlMovie}/${endpoint}?api_key=${ApiKey}`
        );
        setItems(data.results);
      } finally {
        setLoading(false);
      }
    }
    loadItems();
  }, [endpoint]);

  return (
    <div className="pt-15 mb-10">
      <h2 className="text-2xl text-gray-200 font-bold xl:text-3xl mb-4">
        {title}
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
          {items.map((item) =>
            mediaType === "tv" ? (
              <SwiperSlide key={item.id}>
                <TvCart tv={item} />
              </SwiperSlide>
            ) : (
              <SwiperSlide key={item.id}>
                <CartMovie movie={item} />
              </SwiperSlide>
            )
          )}
        </Swiper>
      )}
    </div>
  );
}

export default MediaRow;