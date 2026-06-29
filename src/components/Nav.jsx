import { faBell, faList, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  return (
    <nav className="   flex   justify-center text-xs lg:text-[1rem] xl:text-[1.5rem] items-center text-slate-300 uppercase">
      <div className="container w-full justify-center mx-auto flex  mt-10  items-center">
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
        </ul>
        <div className="bg-gray-300 hidden  text-black justify-between  md:flex mx-1 py-1 rounded-md md:py-3 px-6  flex-1 mr-auto  max-w-xl  md:rounded-3xl ">
          <input
            type="text"
            placeholder="search movies..."
            className="mr-5 text-black placeholder:text-gray-800 w-full focus:outline-none"
          />
          <button className="cursor-pointer text-xl ">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <ul className="hidden  md:flex gap-4 ml-3 xl:gap-10">
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

        <div className="mr-auto flex ml-1 md:ml-5 items-center ">
          <button className="cursor-pointer text-slate-100 hover:text-blue-300">
            Login
          </button>
          /
          <button className="cursor-pointer text-slate-100 hover:text-blue-300 mr-2">
            SingUp
          </button>
          <FontAwesomeIcon
            className="hover:text-red-400 cursor-pointer"
            icon={faBell}
          />
        </div>
        <div className="md:hidden mr-1 text-lg">
          <FontAwesomeIcon icon={faList} />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
