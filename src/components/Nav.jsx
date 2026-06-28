import { faBell,  faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  return (
    <nav className="  flex justify-center lg:text-[1rem] xl:text-[1.5rem] items-center text-slate-300 uppercase"  >
        <div className="container w-full justify-center mx-auto flex mt-10  items-center">
                <ul className="flex gap-4 xl:gap-10 mr-3 ">
                    <li className="cursor-pointer hover:text-slate-200"><a href="#">home</a></li>
                    <li className="cursor-pointer hover:text-slate-200" ><a href="">genre</a></li>
                    <li className="cursor-pointer hover:text-slate-200"><a href="">country</a></li>
                </ul>
                <div className="bg-gray-300 text-black justify-between flex py-3 px-6  flex-1  max-w-xl  rounded-3xl ">
                    <input type="text" placeholder="search movies..." className="mr-5 text-black placeholder:text-gray-800 w-full focus:outline-none"/>
                    <button className="cursor-pointer text-xl "><FontAwesomeIcon  icon={faSearch}/></button>
                </div>

                <ul className="flex gap-4 ml-3 xl:gap-10">
                  <li className="cursor-pointer hover:text-slate-200"><a href="">movies</a></li>
                  <li className="cursor-pointer hover:text-slate-200"><a href="">series</a></li>
                  <li className="cursor-pointer hover:text-slate-200"><a href="">animation</a></li>
                </ul>

                <div className="flex ml-5 items-center ">
                  <button className="cursor-pointer text-slate-100 hover:text-blue-300">Login</button>/
                  <button className="cursor-pointer text-slate-100 hover:text-blue-300 mr-2">SingUp</button>
                  <FontAwesomeIcon className="hover:text-red-400 cursor-pointer" icon={faBell}/>
                </div>
        </div>
    </nav>
  )
}

export default Nav