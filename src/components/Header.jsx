import { Swiper, SwiperSlide } from "swiper/react";

function Header() {
  const images = [
    {
      id: 1,
      address:
        "https://www.mjworld.net/wp-content/uploads/Michael-official-poster.jpg",
      name: "Mickael",
    },
    {
      id: 2,
      address:
        "https://m.media-amazon.com/images/I/91obuWzA3XL._AC_SY879_.jpg",
      name: "Interstellar",
    },
    {
      id: 3,
      address:
        "//filmartgallery.com/cdn/shop/files/Furiosa-A-Mad-Max-Saga-Vintage-Movie-Poster-Original.jpg?v=1771971916&width=1000",
      name: "Furiosa: A Mad Max Saga",
    },
    {
      id: 4,
      address:
        "//filmartgallery.com/cdn/shop/products/The-Green-Mile-Vintage-Movie-Poster-Original.jpg?v=1771944778&width=1000",
      name: " The Green Mile",
    }
  ];

  return (
    <header
      className="text-white container mx-auto
      py-20
    "
    >
      <Swiper spaceBetween={50} slidesPerView={4} className="mt-12">
        {images.map(({id , address , name}) => (
          <SwiperSlide key={id}>
            <img className="w-full cursor-pointer h-54  lg:h-87 xl:h-120 object-cover" src={address} alt={name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
}

export default Header;
