import axios from "axios";
import { useEffect, useState } from "react"
import { ApiKey } from "../data/data";
import { NavLink } from "react-router-dom";




function Genre() {
const [movieGenre, setMovieGenre] = useState([]);
const [tvGenre, setTvGenre] = useState([]);


useEffect(() => {
 async function getGenre() {
    const {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${ApiKey}&language`)
    setMovieGenre(data.genres);
  }
  getGenre();
},[])

useEffect(() => {
 async function getTvGenre() {
    const {data} = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${ApiKey}&language`)
    setTvGenre(data.genres);
  }
  getTvGenre();
},[])


  return (
    <div className="min-h-screen text-white container mx-auto pt-10 grid grid-cols-2 justify-center  ">
        <div className="">
        <h1 className="text-3xl mb-10 uppercase text-center">movies genres</h1>
        {
            movieGenre.map((gen) => (
        <NavLink className="text-xl xl:text-2xl text-yellow-200  mb-4 cursor-pointer flex justify-center" key={gen.id}  >
            {gen.name}
        </NavLink>

            ))
        }
        </div>


        <div>
            <h1 className="text-3xl mb-10 uppercase text-center">tv genres</h1>
            {
                tvGenre.map((gen)=>(
                    <NavLink className="text-xl xl:text-2xl text-yellow-200 mb-4 cursor-pointer flex justify-center" key={gen.id}>
                        {gen.name}
                    </NavLink>
                ))
            }
        </div>
    </div>
  )
}

export default Genre