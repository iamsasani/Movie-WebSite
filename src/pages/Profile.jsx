import { useContext } from "react";
import { UserContext } from "../Context/Context";
import { Navigate } from "react-router-dom";
import { imgUrl } from "../helpers/imgUrl";

function Profile() {
  const { user, session, isLoading } = useContext(UserContext);

  if (!session) {
    return <Navigate to={"/login"} replace />;
  }

  if (isLoading) {
    return <div className="min-h-screen text-white flex items-center justify-center">Loading profile...</div>;
  }

  if (!user) {
    return <div className="min-h-screen text-white flex items-center justify-center">Unable to load profile.</div>;
  }

  const avatarPath = user?.avatar?.tmdb?.avatar_path;

  return (
    <div className="min-h-screen text-white px-6 py-10">
      <div className="max-w-3xl mx-auto rounded-xl bg-slate-900/70 p-8 shadow-lg">
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
    </div>
  );
}

export default Profile;
