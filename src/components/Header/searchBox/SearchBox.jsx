import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { ApiKey, BaseUrlMovie } from "../../../data/data";
import TV from "./items/TV";
import Movie from "./items/Movie";
import Person from "./items/Person";

function SearchBox() {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (query) {
        const { data } = await axios.get(`${BaseUrlMovie}/search/multi`, {
          params: {
            query: query,
            api_key: ApiKey,
          },
        });
        console.log(data.results);
        setSearchResult(data.results);
      } else {
        setSearchResult([]);
      }
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [query]);

  function showItem(item) {
    switch (item.media_type) {
      case "tv":
        return <TV key={item.id} item={item} />;
      case "movie":
        return <Movie key={item.id} item={item} />;
      case "person":
        return <Person key={item.id} item={item} />;
    }
  }

  return (
    <div>
      <div className="container mx-auto mt-5 relative ">
        <div className="bg-gray-300  border overflow-hidden  text-black justify-between  flex mx-1  py-3 px-6  flex-1  rounded-xl ">
          <input
            type="text"
            placeholder="search movies..."
            className="mr-5 text-black placeholder:text-gray-800  w-full focus:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button className="cursor-pointer text-xl ">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div
          className={`flex flex-col gap-2 bg-gray-300  p-2  absolute z-10 border border-t-0 w-full rounded-md overflow-hidden transition-all duration-300 ${searchResult.length && query ? "max-h-70 overflow-y-auto opacity-95" : "h-0 opacity-0"}`}
        >
          {searchResult.map((item) => (
            <div
              className="border-b-2 border-slate-500 pb-2 "
              onClick={() => setSearchResult([])}
            >
              {showItem(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
