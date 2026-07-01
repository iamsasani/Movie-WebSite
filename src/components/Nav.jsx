import { faBell, faList, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleMenu() {
    setShowMenu((prev) => !prev);
  }
  return (
    <nav ref={menuRef}>
      <div className="flex px-2 justify-center text-xs lg:text-[1rem] xl:text-[1.5rem] items-center text-slate-300 uppercase">
        <div className="container w-full mx-auto flex  mt-10  items-center">
         <h1 className="md:mr-10 text-2xl lg:text-3xl font-bold flex items-baseline"> <span className="text-3xl lg:text-4xl text-yellow-200">P</span>opCorn<span className="text-red-600 text-3xl lg:text-4xl">DB</span>🍿</h1>
         
          <ul className="hidden md:flex gap-4 xl:gap-10 mr-3 ">
            <li className="cursor-pointer hover:text-slate-200">
              <a href="#">home</a>
            </li>
            <li className="cursor-pointer hover:text-slate-200">
              <a href="#">genre</a>
            </li>
            <li className="cursor-pointer hover:text-slate-200">
              <a href="#">country</a>
            </li>
            <li className="cursor-pointer hover:text-slate-200">
              <a href="#">movies</a>
            </li>
            <li className="cursor-pointer hover:text-slate-200">
              <a href="#">series</a>
            </li>
            <li className="cursor-pointer hover:text-slate-200">
              <a href="#">animation</a>
            </li>
          </ul>

          <div className="mx-auto md:mr-0 md:ml-auto flex  gap-4  items-center  text-2xl md:text-xs lg:text-[1rem] xl:text-[1.5rem]">
            <button className="cursor-pointer  text-slate-100  ">
              Login
            </button>

            <button className="cursor-pointer bg-green-700 rounded-xl xl:px-4 p-1 px-2 hover:bg-green-600 text-slate-100   ">
              SingUp
            </button>
            <span className="hidden md:block">
              <FontAwesomeIcon
                className="hover:text-red-400 cursor-pointer"
                icon={faBell}
              />
            </span>
          </div>
          <div className="md:hidden mr-1 text-4xl " onClick={handleMenu}>
            <FontAwesomeIcon icon={faList} />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-5 ">
      <div className="bg-gray-300 hidden  text-black justify-between  md:flex mx-1  py-3 px-6  flex-1  rounded-xl ">
        <input
          type="text"
          placeholder="search movies..."
          className="mr-5 text-black placeholder:text-gray-800 w-full focus:outline-none"
        />
        <button className="cursor-pointer text-xl ">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      </div>
      

      <div
        className={`md:hidden text-gray-300 text-center mt-5 transition-all overflow-hidden duration-500 ${showMenu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col gap-4 border-t-2 border-slate-300 py-2  ">
          <li>
            <a href="#" className="hover:text-slate-100">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-100">
              GENRE
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-100">
              COUNTRY
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-100">
              MOVIES
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-100">
              ANIMATION
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-100">
              SERIES
            </a>
          </li>
        </ul>

        
      </div>
      
    </nav>
  );
}

export default Nav;
