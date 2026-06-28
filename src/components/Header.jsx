import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";
import { useState } from "react";

function Header() {
  const [bgImage, setBgImage] = useState("../../assets/images/background.jpg");

  const images = [
    {
      id: 1,
      address:
        "https://www.mjworld.net/wp-content/uploads/Michael-official-poster.jpg",
      name: "Mickael",
      back : "../../assets/images/mikael.jpg"
    },
    {
      id: 2,
      address: "https://m.media-amazon.com/images/I/91obuWzA3XL._AC_SY879_.jpg",
      name: "Interstellar",
      back : "../../assets/images/interstellar.jpg"
    },
    {
      id: 3,
      address:
        "//filmartgallery.com/cdn/shop/files/Furiosa-A-Mad-Max-Saga-Vintage-Movie-Poster-Original.jpg?v=1771971916&width=1000",
      name: "Furiosa: A Mad Max Saga",
      back : "../../assets/images/madmax.jpg"
    },
    {
      id: 4,
      address:
        "//filmartgallery.com/cdn/shop/products/The-Green-Mile-Vintage-Movie-Poster-Original.jpg?v=1771944778&width=1000",
      name: " The Green Mile",
       back :"../../assets/images/greenmile.jpg"
    },
    {
      id: 5,
      address:
        "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/gotposterbig.png",
      name: "Game of Thrones",
       back :"../../assets/images/got.jpg"
    },
  ];

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
          spaceBetween={50}
          slidesPerView={4}
          modules={[Autoplay]}
          autoplay={{ delay: 2000 }}
          loop={true}
          className="mt-12"
        >
          {images.map(({ id, address, name , back }) => (
            <SwiperSlide key={id}>
              <img
                className="w-full cursor-pointer h-54  lg:h-87 xl:h-120 object-cover"
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
