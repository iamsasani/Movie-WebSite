import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900/60 ">
      <div className="justify-center items-center lg:flex lg:gap-10  lg:px-40  xl:px-70  text-white p-8 container mx-auto xl:mt-20">
        <div className="flex flex-col justify-center items-center lg:border-r-2 lg:border-gray-400 p-10">
          <h1  className="md:mr-10 text-2xl mb-5 lg:text-3xl font-bold flex items-baseline">
            <NavLink  to={"/"} onClick={() => window.scrollTo({top : 0 , behavior : 'smooth'})}>

            <span className="text-3xl lg:text-4xl text-yellow-200">P</span>
            opCorn
            <span className="text-red-600 text-3xl lg:text-4xl">DB</span>🍿

            </NavLink>
          </h1>
          <p className="text-center">
            PopCornDB brings you the latest movies, timeless classics, and
            everything in between — all in one place.
          </p>
        </div>

        <div className="flex flex-col gap-2 md:gap-10 md:flex-row  mt-10 items-center justify-center text-center">
          <div className="">
          <NavLink  to={"/"}>
          Home
          </NavLink>
          </div>
          <div>
          <NavLink  to={"/movies"}>movies</NavLink>
          </div>
          <div>
          <NavLink  to={"/profile"}>profile</NavLink>
          </div>
          <div>
          <a  href="https://iamsasani.github.io/MyPortfolio">About me</a>
          </div>
        </div>

      </div>

      {/* copyRight */}
      <div className="text-center text-gray-300 bg-gray-950 py-1">
           © {new Date().getFullYear()} PopCornDB. All rights reserved.
        </div>
    </footer>
  );
}

export default Footer;
