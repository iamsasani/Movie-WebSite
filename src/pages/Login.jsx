import { useContext } from "react";
import { UserContext } from "../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser , faEye } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
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
      className="min-h-screen  mt-4 rounded-md
     text-white container mx-auto flex items-center justify-center"
    >
      <div className=" xl:text-3xl  ">
        <div className="shadow-xl  shadow-gray-800/50">
          <div className="rounded-t-xl bg-[url(https://images.unsplash.com/photo-1659885785824-3e72856b8fef?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-60 xl:h-80 bg-cover bg-center"></div>

          <div className="bg-gray-200 rounded-b-xl px-15 py-5 ">
            <h1 className="text-2xl mb-2 text-black font-bold">Login</h1>
            <form
              className="flex flex-col items-center justify-center gap-4"
              action=""
              onSubmit={handleLogin}
            >
              <div className="rounded-xl w-66 bg-rose-400 px-3">
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
              <div className="rounded-xl  bg-rose-400 px-3 w-66">
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
                <label>
                  <FontAwesomeIcon  onClick={() => setShowPass(!showPass)} icon={faEye} />
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary cursor-pointer bg-purple-500 w-full py-1 rounded-sm shadow "
              >
                Login
              </button>
            </form>
            <NavLink
              to={"/signUp"}
              className="text-blue-600  text-sm xl:text-lg cursor-pointer block mt-5"
            >
              Create Account
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
