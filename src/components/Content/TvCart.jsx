import { NavLink } from "react-router-dom";
import { BaseUrlImage } from "../../data/data";



function TvCart({tv}) {

  return (
    <>
      <NavLink to={`/TV/${tv.id}`}>
      <div className="   relative rounded-sm overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">

        <img
          src={`${BaseUrlImage}/w500${tv.poster_path}`}
          className="imgCart"
          alt={tv.name}
        />
        <div className="nameRate">
          <h1>{tv.name}</h1>
          <span>{tv.vote_average.toFixed(1)} /10 ⭐</span>
        </div>

      </div>

      </NavLink>


    </>
  );
}

export default TvCart;
