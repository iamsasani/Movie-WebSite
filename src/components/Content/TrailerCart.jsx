import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ApiKey, BaseUrlImage, BaseUrlMovie } from "../../data/data";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Context/Context";
import toast from "react-hot-toast";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function TrailerCart( {movie , setMovie , mediaType}) {
const { id } = useParams();
    const [videoKey, setVideoKey] = useState(null);
const [showTrailer, setShowTrailer] = useState(false);
 const { user } = useContext(UserContext);
useEffect(() => {
  async function loadMovie() {
    const { data } = await axios.get(
      `${BaseUrlMovie}/${mediaType}/${id}?api_key=${ApiKey}`
    );
    setMovie(data);
  }

  async function loadVideos() {
    try {
      const { data } = await axios.get(
        `${BaseUrlMovie}/${mediaType}/${id}/videos?api_key=${ApiKey}`
      );
      const trailer = data.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      const teaser = data.results.find(
        (video) => video.type === "Teaser" && video.site === "YouTube"
      );
      setVideoKey(trailer?.key || teaser?.key || null);
    } catch {
      setVideoKey(null);
    }
  }

  loadMovie();
  loadVideos();
}, [id, mediaType, setMovie]);

function handleTrailerClick() {
  if (!user) {
    toast.error("You must sign up or log in to watch the trailer");
    return;
  }

  if (!videoKey) {
    toast.error("No trailer is available for this movie");
    return;
  }

  setShowTrailer(true);
}
  return (
    <div>
        {/* trailer */}
<div className="w-full max-w-3xl mb-10">
  <h2 className="text-2xl font-bold mb-4 text-center">🎬 trailer</h2>

  {!showTrailer ? (
    <div
      onClick={handleTrailerClick}
      className="relative cursor-pointer aspect-video  rounded-2xl overflow-hidden bg-gray-900/80 h-64 flex items-center justify-center group"
    >
      <img
        src={`${BaseUrlImage}/w780${movie.backdrop_path}`}
        alt="trailer thumbnail"
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-30 transition-opacity"
      />
      <div className="relative  z-10 flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
          <FontAwesomeIcon icon={faPlay} className="text-white text-2xl" />
        </div>
        <span className="text-sm text-white">click to play </span>
      </div>
    </div>
  ) : (
    <div className="aspect-video w-110 lg:w-180 rounded-2xl overflow-hidden">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
        title="Movie trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )}
</div>
    </div>
  )
}

export default TrailerCart