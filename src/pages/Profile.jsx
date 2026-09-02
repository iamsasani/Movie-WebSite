import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/Context";
import { Navigate } from "react-router-dom";
import { imgUrl } from "../helpers/imgUrl";
import axios from "axios";
import { ApiKey, BaseUrlMovie } from "../data/data";
import CartMovie from "../components/Content/CartMovie";
import TvCart from "../components/Content/TvCart";

function Profile() {
  const { user, session, isLoading } = useContext(UserContext);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [favoriteTv, setFavoriteTv] = useState([]);
  const [loadingFavorites, setLoadingFavorites] = useState(true);


  useEffect(() => {
    if (!user || !session) return;

    async function loadFavorites() {
      setLoadingFavorites(true);
      try {
        const [moviesRes, tvRes] = await Promise.all([
          axios.get(
            `${BaseUrlMovie}/account/${user.id}/favorite/movies?api_key=${ApiKey}&session_id=${session}`
          ),
          axios.get(
            `${BaseUrlMovie}/account/${user.id}/favorite/tv?api_key=${ApiKey}&session_id=${session}`
          ),
        ]);
        setFavoriteMovies(moviesRes.data.results);
        setFavoriteTv(tvRes.data.results);
      } catch {
        setFavoriteMovies([]);
        setFavoriteTv([]);
      } finally {
        setLoadingFavorites(false);
      }
    }

    loadFavorites();
  }, [user, session]);

  if (!session) {
    return <Navigate to={"/login"} replace />;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        Loading profile...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        Unable to load profile.
      </div>
    );
  }

  const avatarPath = user?.avatar?.tmdb?.avatar_path;

  return (
    <div className="min-h-screen text-white px-6 py-10">
      <div className="max-w-3xl mx-auto rounded-xl bg-slate-900/90 p-8 shadow-lg">
        <h1 className="text-3xl font-semibold">{user.name || user.username}</h1>
        <p className="mt-2 text-slate-300">Welcome back to your movie profile.</p>

        {avatarPath ? (
          <img
            src={imgUrl(avatarPath, "original")}
            alt={user.name || user.username}
            className="mt-6 h-48 w-48 rounded-full object-cover border-4 border-slate-700"
          />
        ) : (
          <div className="mt-6 flex h-48 w-48 items-center justify-center rounded-full border-4 border-slate-700 bg-slate-800 text-slate-400">
            No avatar
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto mt-10">
        <h2 className="text-2xl font-bold text-gray-200 border-b-4 mb-4">🎬 Favorite Movies</h2>

        {loadingFavorites ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-72 rounded-xl bg-gray-800/50 animate-pulse" />
            ))}
          </div>
        ) : favoriteMovies.length === 0 ? (
          <p className="text-slate-400">You haven't added any favorite movies yet.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {favoriteMovies.map((movie) => (
              <CartMovie key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>


      <div className="max-w-6xl mx-auto mt-10">
        <h2 className="text-2xl font-bold text-gray-200 border-b-4 mb-4">📺 Favorite TV Shows</h2>

        {loadingFavorites ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-72 rounded-xl bg-gray-800/50 animate-pulse" />
            ))}
          </div>
        ) : favoriteTv.length === 0 ? (
          <p className="text-slate-400">You haven't added any favorite TV shows yet.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {favoriteTv.map((tv) => (
              <TvCart key={tv.id} tv={tv} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;