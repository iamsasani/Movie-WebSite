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
      address: "https://m.media-amazon.com/images/I/91obuWzA3XL._AC_SY879_.jpg",
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
        "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/gotposterbig.png",
      name: "Game of Thrones",
      back: "../../assets/images/got.jpg",
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
