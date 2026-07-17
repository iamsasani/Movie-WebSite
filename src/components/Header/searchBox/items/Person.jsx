import { Link } from "react-router-dom";
import { imgUrl } from "../../../../helpers/imgUrl";

function Person({ item }) {
  return (
    <Link to={`/people/${item.id}`}>
    <div className="flex items-center gap-2 text-lg">
      {item.profile_path ? (
        <img src={imgUrl(item.profile_path, "w45")} alt="" className=" w-12 h-12" />
      ) : (
        <img className="w-12 aspect-square rounded-lg"  src="./public/default_avatar.jpeg" />
      )}
      <p>{item.name}</p>
    </div>
    </Link>
  );
}

export default Person;
