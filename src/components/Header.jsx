import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";
import { useContext, useState } from "react";
import { Context } from "../data/Context";

function Header() {
  const [bgImage, setBgImage] = useState("../../assets/images/background.jpg");

  const {images} = useContext(Context);
  return (
    <header
      className="text-white bg-cover mt-5
      py-20 px-3  transition-all duration-700
    "
      style={{
        backgroundImage: `linear-gradient(to bottom , rgba(0 0 0/ 60%), rgba(0 0 0/ 50%) ,rgba(0 0 0/ 60%)), url(${bgImage})`,
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
          autoplay={{ delay: 2000 }}
          loop={true}
          className="mt-12"
        >
          {images.map(({ id, address, name, back }) => (
            <SwiperSlide key={id}>
              <img
                className="w-full cursor-pointer max-h-200 sm:max-h-115   md:h-87 xl:h-120 object-cover"
                src={address}
                alt={name}
                onMouseEnter={() => setBgImage(back)}
                onMouseLeave={() =>
                  setBgImage("../../assets/images/background.jpg")
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </header>
  );
}

export default Header;
