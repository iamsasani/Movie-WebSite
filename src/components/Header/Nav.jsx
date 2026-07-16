import { faBell, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef, useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import { UserContext } from "../../Context/Context";
import SearchBox from "./SearchBox";

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

  const menuItems = [
    {
      id: 1,
      path: "/",
      text: "home",
    },
    {
      id: 2,
      path: "/genre",
      text: "genre",
    },

    {
      id: 4,
      path: "/movies",
      text: "movies",
    },
  ];

  function activeClass({ isActive }) {
    return isActive ? "text-yellow-300" : "";
  }

  function handleMenu() {
    setShowMenu((prev) => !prev);
  }

  const { user, logOut } = useContext(UserContext);
  return (
    <nav ref={menuRef}>
      <div className="flex px-2 justify-center text-xs lg:text-[1rem] xl:text-[1.5rem] items-center text-slate-300 uppercase">
        <div className="container  mx-auto flex  mt-10  items-center">
          <Link to={"/"}>
            <h1 className="md:mr-10 text-2xl lg:text-3xl font-bold flex items-baseline">
              <span className="text-3xl lg:text-4xl text-yellow-200">P</span>
              opCorn
              <span className="text-red-600 text-3xl lg:text-4xl">DB</span>🍿
            </h1>
          </Link>
          <ul className="hidden md:flex gap-4 xl:gap-10 mr-3 ">
            {menuItems.map((item) => (
              <li key={item.id} className="cursor-pointer hover:text-slate-200">
                <NavLink to={item.path} className={activeClass}>
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mx-auto md:mr-0 md:ml-auto flex  gap-4  items-center  text-2xl md:text-xs lg:text-[1rem] xl:text-[1.5rem]">
            {user ? (
              <>
                <div>{user.name}</div>
                <button
                  onClick={logOut}
                  className="bg-red-600 cursor-pointer px-2 py-1 rounded-md"
                >
                  LogOut
                </button>
              </>
            ) : (
              <ul className="mx-auto md:mr-0 md:ml-auto flex  gap-4  items-center  text-2xl md:text-xs lg:text-[1rem] xl:text-[1.5rem]">
                <li>
                  <NavLink
                    to="/login"
                    className="cursor-pointer  text-slate-100  "
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/signup"
                    className="cursor-pointer bg-green-700 rounded-xl xl:px-4 p-1 px-2 hover:bg-green-600 text-slate-100   "
                  >
                    SignUp
                  </NavLink>
                </li>
                <li>
                  <span className="hidden md:block">
                    <FontAwesomeIcon
                      className="hover:text-red-400 cursor-pointer"
                      icon={faBell}
                    />
                  </span>
                </li>
              </ul>
            )}
          </div>
          <div className="md:hidden mr-1 text-4xl " onClick={handleMenu}>
            <FontAwesomeIcon icon={faList} />
          </div>
        </div>
      </div>

      {/* search box */}

      <SearchBox />

      <div
        className={`md:hidden text-gray-300 text-center mt-5 transition-all overflow-hidden duration-500 ${showMenu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col gap-4 border-t-2 uppercase border-slate-300 py-2  ">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer hover:text-slate-200"
              onClick={() => setShowMenu(false)}
            >
              <NavLink to={item.path} className={activeClass}>
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
