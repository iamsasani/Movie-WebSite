import { Link } from "react-router-dom";
import { imgUrl } from "../../helpers/imgUrl";

function CastCard({ person }) {
  return (
    <Link to={`/people/${person.id}`}>
      <div className="flex flex-col items-center text-center w-28 shrink-0">
        {person.profile_path ? (
          <img
            src={imgUrl(person.profile_path, "w185")}
            alt={person.name}
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-700 hover:border-rose-500 transition-colors"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center text-gray-500 text-xs border-2 border-gray-700">
            No Photo
          </div>
        )}
        <p className="text-sm font-semibold text-white mt-2 line-clamp-1">
          {person.name}
        </p>
        <p className="text-xs text-gray-400 line-clamp-1">
          {person.character}
        </p>
      </div>
    </Link>
  );
}

export default CastCard;