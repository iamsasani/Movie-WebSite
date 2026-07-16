import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { ApiKey, BaseUrlMovie } from "../../data/data";

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
          className={`bg-gray-300   absolute z-10 border border-t-0 w-full rounded-md overflow-hidden transition-all duration-300 ${searchResult.length && query ? "max-h-50 overflow-y-auto" : "h-0 opacity-0"}`}
        >
          <ul>
            {searchResult.map((item) => (
              <li
                key={item.id}
                className="p-2 hover:bg-gray-100 cursor-pointer text-black"
              >
                {item.title || item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;

