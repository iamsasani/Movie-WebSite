import Cart from "./Cart";
import { Context } from "../data/Context";
import { useContext } from "react";
import "swiper/css/autoplay";
import "swiper/css";
import { SwiperSlide , Swiper } from "swiper/react";
import 'swiper/css/pagination';
import {  Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImdb } from "@fortawesome/free-brands-svg-icons";

function Content() {


  const {images} = useContext(Context);
  return (
    <div className="min-h-screen bg-linear-to-b from-black  via-red-950  to-black">
    <main className="text-white  container mx-auto min-h-screen px-3 sm:p-0">

      <div className="md:flex gap-4 items-baseline pt-15  mb-10 ">
      <h2 className="text-2xl  xl:text-3xl mb-4">Movies</h2>
      <ul className="md:flex gap-4 items-baseline text-rose-300">
        <li className="cursor-pointer">Last Movies</li>
        <li className="cursor-pointer text-rose-400  text-xl">Last 2026</li>
        <li className="cursor-pointer">Last 2025</li>
        <li className="cursor-pointer">IMDB <FontAwesomeIcon className="text-xl text-yellow-400" icon={faImdb}/></li>
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
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
      {images.map(({ id, address, name }) => (
        <SwiperSlide key={id}>
        <Cart key={id} address={address} name={name} />
        </SwiperSlide>
      ))}

      </Swiper>


      <div className="md:flex gap-4 items-baseline pt-15  mb-10 ">
      <h2 className="text-2xl  xl:text-3xl mb-4">Genres</h2>
      <ul className="md:flex gap-4 text-rose-300 items-baseline">
        <li className="cursor-pointer">action</li>
        <li className="cursor-pointer">comedy</li>
        <li className="cursor-pointer text-rose-400  text-xl">drama</li>
        <li className="cursor-pointer">horror</li>
        <li className="cursor-pointer">sci-fi</li>
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
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Navigation]}
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

  )

}

export default Content;
