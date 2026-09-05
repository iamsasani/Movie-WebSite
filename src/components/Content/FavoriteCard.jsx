import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { BaseUrlImage } from "../../data/data";

function FavoriteCard({ item, mediaType, onRemove }) {
  const title = mediaType === "movie" ? item.title : item.name;
  const path = mediaType === "movie" ? "/movies" : "/tv";

  return (
    <div className="relative group">
      <button
        onClick={(e) => {
          e.preventDefault();
          onRemove(item.id);
        }}
        className="absolute top-2 right-2 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        title="Remove from favorites"
      >
        <X size={16} />
      </button>

      <Link to={`${path}/${item.id}`}>
        <div className="relative rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          <img
            src={`${BaseUrlImage}/w500${item.poster_path}`}
            className="imgCart"
            alt={title}
          />
          <div className="nameRate">
            <h1>{title}</h1>
            <span>{item.vote_average.toFixed(1)} /10 ⭐</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FavoriteCard;