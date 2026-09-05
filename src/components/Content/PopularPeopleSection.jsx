import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ApiKey, BaseUrlMovie } from "../../data/data";
import CastCard from "../Content/CastCard.jsx";

function PopularPeopleSection() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPeople() {
      try {
        const { data } = await axios.get(
          `${BaseUrlMovie}/person/popular?api_key=${ApiKey}`
        );
        setPeople(data.results.slice(0, 15));
      } finally {
        setLoading(false);
      }
    }
    loadPeople();
  }, []);

  return (
    <div className="pt-15 mb-10">
      <h2 className="text-2xl text-rose-500 font-bold xl:text-4xl mb-4">
        ⭐ Popular People
      </h2>

      {loading ? (
        <div className="flex gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-24 h-24 rounded-full bg-gray-800/50 animate-pulse shrink-0"
            />
          ))}
        </div>
      ) : (
        <Swiper slidesPerView="auto" spaceBetween={16} className="px-2">
          {people.map((person) => (
            <SwiperSlide key={person.id} style={{ width: "auto" }}>
              <CastCard person={person} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default PopularPeopleSection;