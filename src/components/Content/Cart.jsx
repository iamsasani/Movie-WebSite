import { Link } from "react-router-dom";
import { BaseUrlImage} from "../../data/data";


function Cart({movie}) {

  return (
    <>

    <Link to={`/movies/${movie.id}`}>
          <div className="border-2   relative rounded-sm overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">

        <img
          src={`${BaseUrlImage}/w500${movie.poster_path}`}
          className="imgCart"
          alt={movie.title}
        />
        <div className="nameRate">
          <h1>{movie.title}</h1>
          <span>{movie.vote_average.toFixed(1)} /10 ⭐</span>
        </div>

      </div>

    </Link>

    </>
  );
}

export default Cart;
