import MediaRow from "./MediaRow";

function Content() {
  return (
    <div className="min-h-screen">
      <main className="text-white container mx-auto min-h-screen px-3 sm:p-0">
        {/* دسته ۱: ردیف‌های فیلم */}
        <MediaRow title="🔥 Popular Movies" endpoint="movie/popular" mediaType="movie" />
        <MediaRow title="🏆 Top Rated Movies" endpoint="movie/top_rated" mediaType="movie" />
        <MediaRow title="🔜 Upcoming Movies" endpoint="movie/upcoming" mediaType="movie" />
        <MediaRow title="🎬 Now Playing" endpoint="movie/now_playing" mediaType="movie" />

        {/* دسته ۲: ردیف‌های سریال */}
        <MediaRow title="📺 Popular TV Shows" endpoint="tv/popular" mediaType="tv" />
        <MediaRow title="⭐ Top Rated TV Shows" endpoint="tv/top_rated" mediaType="tv" />
        <MediaRow title="📅 Airing Today" endpoint="tv/airing_today" mediaType="tv" />
        <MediaRow title="📡 Currently On The Air" endpoint="tv/on_the_air" mediaType="tv" />
      </main>
    </div>
  );
}

export default Content;