import { useContext } from "react";
import { UserContext } from "../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser , faEye, faHome, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../data/Context";

function Login() {
  const { showPass, setShowPass } = useContext(Context);

  function handleLogin(e) {
    e.preventDefault();
    const { username, password } = e.target.elements;

    login(username.value, password.value);
  }

  const { login } = useContext(UserContext);
  return (
    <div
      className="min-h-screen   rounded-md
     text-white container mx-auto flex items-center justify-center"
    >
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }} className="rounded-lg backdrop-blur-xs">
        <div className="shadow-xl  shadow-gray-800/50 ">
          <div className="rounded-t-xl mt-8 flex flex-col items-center text-center justify-center">
            <div className="text-4xl mb-6">
              🍿
            </div>
            <h1 className="text-2xl  text-[#1f2937] font-bold ">
              welcome to
               <Link to={"/"}>
            <h1 className="text-2xl lg:text-3xl font-bold flex items-baseline">
              <span className="text-3xl lg:text-4xl ">P</span>
              opCorn
              <span className=" text-3xl lg:text-4xl">DB</span>
            </h1>
          </Link>
            <h3 className="text-sm text-gray-600 mt-4">movie website </h3>
            </h1>
          </div>

          <div className=" rounded-b-xl px-15 flex flex-col items-center py-5 ">
            <h1 className="text-2xl mb-5 text-[#1f2937] font-bold">Login</h1>
            <form
              className="flex flex-col items-center justify-center gap-4 text-sm"
              action=""
              onSubmit={handleLogin}
            >
              <div className="rounded-xl flex w-66 items-center bg-gray-500 px-3">
                <label>
                  <FontAwesomeIcon icon={faUser} />
                </label>
                <input
                  className="text-gray-900 placeholder:text-gray-200   border-none p-2 rounded-sm  focus:outline-none  focus:ring-blue-500"
                  type="text"
                  placeholder="Username"
                  name="username"
                />
              </div>
              <div className="rounded-xl flex items-center w-66  justify-between bg-gray-500 px-3 pr-1">
                <div className="rounded-xl flex w-66 items-center bg-gray-500">

                <label>
                  <FontAwesomeIcon icon={faLock} />
                </label>
                <input
                  className=" text-gray-900 placeholder:text-gray-200   border-none p-2 rounded-sm focus:outline-none  focus:ring-blue-500"
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  required
                />
                </div>
                <label className="text-right  ">
                  <FontAwesomeIcon   onClick={() => setShowPass(!showPass)} icon={faEye} />
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary cursor-pointer bg-purple-500 w-full py-1 rounded-sm shadow "
              >
                Login <FontAwesomeIcon icon={faArrowAltCircleRight}/>
              </button>
            </form>
            <a
              href="https://www.themoviedb.org/signup"
              className="text-blue-600  text-sm xl:text-lg cursor-pointer block mt-5"
            >
              Create Account
            </a>
            <NavLink className="text-gray-600 mt-8" to={"/"}>
              back to home <FontAwesomeIcon icon={faHome}/>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
