import { Link } from "react-router-dom";
import { imgUrl } from "../../../../helpers/imgUrl";

function Movie({ item }) {
  return (
    <Link to={`/movies/${item.id}`}>
    <div>
      <div className="flex items-center gap-2 text-lg">
        {item.poster_path ? (
          <img
            src={imgUrl(item.poster_path, "w92")}
            alt=""
            className=" w-12 h-12 rounded-lg"
          />
        ) : ( 
          <img className="w-12 aspect-square" src="./public/movie_icon.png" />
        )}
        <p>{item.title}</p>
      </div>
    </div>
    </Link>
  )
}

export default Movie;
