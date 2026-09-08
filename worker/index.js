export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // فقط درخواست‌های Proxy
    if (url.pathname.startsWith("/tmdb/")) {
      const tmdbPath = url.pathname.replace("/tmdb", "");

      const tmdbUrl = new URL(
        `https://api.themoviedb.org/3${tmdbPath}`
      );

      // انتقال query parameters
      for (const [key, value] of url.searchParams) {
        if (key !== "api_key") {
          tmdbUrl.searchParams.set(key, value);
        }
      }

      // API Key امن در Worker
      tmdbUrl.searchParams.set("api_key", env.TMDB_API_KEY);

      const response = await fetch(tmdbUrl.toString(), {
        method: request.method,
        headers: {
          Accept: "application/json",
        },
      });

      return new Response(response.body, {
        status: response.status,
        headers: {
          "Content-Type":
            response.headers.get("Content-Type") || "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    // بقیه درخواست‌ها توسط static assets مدیریت شوند
    return env.ASSETS.fetch(request);
  },
};