import { Context } from "./Context";

const MovieContextProvider = (props) => {

  const images = [
    {
      id: 1,
      address:
        "https://www.mjworld.net/wp-content/uploads/Michael-official-poster.jpg",
      name: "Mickael",
      back: "../../assets/images/mikael.jpg",
    },
    {
      id: 2,
      address: "//filmartgallery.com/cdn/shop/files/Interstellar-Vintage-Movie-Poster-Original_9db94277.jpg?v=1782529545&width=1000",
      name: "Interstellar",
      back: "../../assets/images/interstellar.jpg",
    },
    {
      id: 3,
      address:
        "//filmartgallery.com/cdn/shop/files/Furiosa-A-Mad-Max-Saga-Vintage-Movie-Poster-Original.jpg?v=1771971916&width=1000",
      name: "Furiosa: A Mad Max Saga",
      back: "../../assets/images/madmax.jpg",
    },
    {
      id: 4,
      address:
        "//filmartgallery.com/cdn/shop/products/The-Green-Mile-Vintage-Movie-Poster-Original.jpg?v=1771944778&width=1000",
      name: " The Green Mile",
      back: "../../assets/images/greenmile.jpg",
    },
    {
      id: 5,
      address:
        "//filmartgallery.com/cdn/shop/files/The-Godfather-Vintage-Movie-Poster-Original_43e386f9.jpg?v=1781319771&width=1000",
      name: "GodFather 1",
      back: "",
    },
    {
      id: 6,
      address:
        "//filmartgallery.com/cdn/shop/products/The-Avengers-Vintage-Movie-Poster-Original_afbda2f5.jpg?v=1771958740&width=1000",
      name: "Avengers",
      back: "",
    },
    {
      id: 7,
      address:
        "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/gotposterbig.png",
      name: "Game of Thrones",
      back: "../../assets/images/got.jpg",
    },
    {
      id: 8,
      address:
        "//filmartgallery.com/cdn/shop/products/Spider-Man-Vintage-Movie-Poster-Original.jpg?v=1771946444&width=1000",
      name: "Spider-Man",
      back: "",
    },
    {
      id: 9,
      address:
        "//filmartgallery.com/cdn/shop/products/Venom-Vintage-Movie-Poster-Original.jpg?v=1771945265&width=1000",
      name: "Venom",
      back: "",
    },
  ];


  const contextValue = {images};
  return (

    <Context.Provider value={contextValue}>
        {props.children }
    </Context.Provider>
  )
};
export default MovieContextProvider;
