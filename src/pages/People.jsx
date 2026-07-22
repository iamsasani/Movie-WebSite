import axios from "axios";
import { useEffect, useState } from "react";
import { ApiKey, BaseUrlMovie } from "../data/data";
import { useParams } from "react-router-dom";
import { imgUrl } from "../helpers/imgUrl";
function People() {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const [showFullBio , setShowFullBio] = useState(false)

  useEffect(() => {
    async function personalDetail() {
      const { data } = await axios.get(
        `${BaseUrlMovie}/person/${id}?api_key=${ApiKey}`,
      );
      setDetail(data);
    }
    personalDetail();
  }, [id]);

console.log(detail)

  console.log(detail);
  return (
    <div className="text-red-400 bg-gray-800 rounded-md p-10 pt-10 min-h-screen text-2xl container mx-auto">
      {detail ? (
        <>
          <div className="flex gap-10">
            <img
              className="rounded-xl"
              src={imgUrl(detail.profile_path, "w185")}
              alt={detail.name}
            />
            <div className="flex flex-col gap-2">
              <div>
                Actor name:{" "}
                <span className="text-yellow-300">{detail.name}</span>
              </div>
              <div>
                birthday :{" "}
                {detail.birthday ? (
                  <span className="text-yellow-300">{detail.birthday}</span>
                ) : (
                  <span className="text-red-600">Not Available</span>
                )}
              </div>
              <div>
                Place of Birth :{" "}
                {detail.place_of_birth ? (
                  <span className="text-yellow-300">{detail.place_of_birth}</span>
                ) : (
                  <span className="text-red-600">Not Available</span>
                )}
              </div>
              <div>
                job :{" "}
                {detail.known_for_department ? (
                  <span className="text-yellow-300">{detail.known_for_department}</span>
                ) : (
                  <span className="text-red-600">Not Available</span>
                )}
              </div>
              <div>
                popularity :{" "}
                {detail.popularity ? (
                  <span className="text-yellow-300"> {detail.popularity.toFixed(1)}</span>
                ) : (
                  <span className="text-red-600">Not Available</span>
                )}
              </div>
            </div>
          </div>
          <div  className={`${showFullBio ? "line-clamp-none" : "line-clamp-4"}  text-gray-200 mt-10`}>
           <span className="text-red-400">Biography :</span> {detail.biography}
          </div>
          {
            detail.biography ? (<button className="px-2 mt-2 py-1 bg-blue-500 rounded-xl text-sm text-white" onClick={() => setShowFullBio(!showFullBio)}>
           {
            showFullBio ? "Less Info" : "More Info"
           }
          </button>) : (
            ""
          )
          }
        </>
      ) : (
        <div className="text-4xl text-red-600">
          information of Actor not found!
        </div>
      )}
    </div>
  );
}

export default People;
