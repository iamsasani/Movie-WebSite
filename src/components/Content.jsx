import Cart from "./Cart";
import { Context } from "../data/Context";
import { useContext } from "react";
import "swiper/css/autoplay";
import "swiper/css";
import { SwiperSlide , Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";

function Content() {

  const {images} = useContext(Context);
  return (
    <div className="min-h-screen bg-linear-to-b from-black  via-red-950  to-black">
    <main className="text-white  container mx-auto min-h-screen px-3 sm:p-0">

      <div className="md:flex gap-4 pt-15  mb-10 ">
      <h2 className="text-xl  xl:text-2xl mb-4">whats popular</h2>
      <ul className="md:flex gap-4 text-yellow-200">
        <li>#streaming</li>
        <li>#On Tv</li>
        <li>#For Rent</li>
        <li>#In Theaters</li>
      </ul>

      </div>
      <Swiper
      breakpoints={{
        320:{
          slidesPerView:4,
          spaceBetween:10
        },
        1024:{
          slidesPerView:5,
          spaceBetween:10
        },
        1280:{
          slidesPerView:7,
          spaceBetween:10
        },
      }}
      
      modules={[Autoplay]}
          autoplay={{ delay: 2000 }}
          loop={true}
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
