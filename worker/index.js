export default {
  async fetch(request, env) {
    const url = new URL(request.url);


    if (url.pathname.startsWith("/tmdb-image/")) {
      const imagePath = url.pathname.replace("/tmdb-image", "");

      const imageUrl = `https://image.tmdb.org/t/p${imagePath}`;

      const response = await fetch(imageUrl, {
        cf: {
          cacheEverything: true,
          cacheTtl: 86400,
        },
      });

      const headers = new Headers(response.headers);

      headers.set(
        "Cache-Control",
        "public, max-age=86400, stale-while-revalidate=604800"
      );

      return new Response(response.body, {
        status: response.status,
        headers,
      });
    }

    if (url.pathname.startsWith("/tmdb/")) {
      const tmdbPath = url.pathname.replace("/tmdb", "");

      if (!env.TMDB_API_KEY) {
        return new Response(
          JSON.stringify({
            error: "TMDB_API_KEY secret is missing",
          }),
          {
            status: 500,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }

      const tmdbUrl = new URL(
        `https://api.themoviedb.org/3${tmdbPath}`
      );


      for (const [key, value] of url.searchParams) {
        if (key !== "api_key") {
          tmdbUrl.searchParams.set(key, value);
        }
      }


      tmdbUrl.searchParams.set(
        "api_key",
        env.TMDB_API_KEY
      );


      const response = await fetch(tmdbUrl.toString(), {
        method: request.method,

        headers: {
          Accept: "application/json",
          "Content-Type":
            request.headers.get("Content-Type") ||
            "application/json",
        },

        body:
          request.method === "GET" ||
          request.method === "HEAD"
            ? undefined
            : request.body,
      });


      return new Response(response.body, {
        status: response.status,
        headers: {
          "Content-Type":
            response.headers.get("Content-Type") ||
            "application/json",

          "Access-Control-Allow-Origin": "*",

          "Access-Control-Allow-Methods":
            "GET, POST, PUT, PATCH, DELETE, OPTIONS",

          "Access-Control-Allow-Headers":
            "Content-Type",
        },
      });
    }

    return env.ASSETS.fetch(request);
  },
};