import { useContext } from "react";
import { UserContext } from "../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

function Login() {
  function handleLogin(e) {
    e.preventDefault();
    const { username, password } = e.target.elements;

    login(username.value, password.value);
  }

  const { login } = useContext(UserContext);
  return (
    <div
      className="min-h-screen bg-[url(https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-no-repeat bg-cover bg-center mt-4 rounded-md
     text-white container mx-auto flex  justify-center"
    >
      <div className="mt-80 xl:mt-60  xl:text-3xl ">
        <div className="shadow-xl shadow-gray-800/50">

        <div className="bg-[url(https://images.unsplash.com/photo-1659885785824-3e72856b8fef?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-60 xl:h-80 bg-cover bg-center" ></div>


        <div className="bg-gray-200 px-15 py-5 ">
        <h1 className="text-2xl mb-2 text-black font-bold">Login</h1>
        <form
          className="flex flex-col items-center justify-center gap-4"
          action=""
          onSubmit={handleLogin}
        >
          <div className="rounded-xl bg-rose-400 px-3">
          <label ><FontAwesomeIcon  icon={faUser}/></label>
          <input
            className="text-gray-900 placeholder:text-gray-200   border-none p-2 rounded-sm  focus:outline-none  focus:ring-blue-500"
            type="text"
            placeholder="Username"
            name="username"
          />

          </div>
           <div className="rounded-xl bg-rose-400 px-3">
            <label ><FontAwesomeIcon  icon={faLock}/></label>
          <input
            className=" text-gray-900 placeholder:text-gray-200   border-none p-2 rounded-sm focus:outline-none  focus:ring-blue-500"
            type="password"
            placeholder="Password"
            name="password"
          />
          </div>
          <button type="submit" className="btn btn-primary cursor-pointer bg-purple-500 w-full py-1 rounded-sm shadow ">
            Login
          </button>
        </form>
        <span className="text-blue-600  text-sm xl:text-lg cursor-pointer block mt-5">Create Account</span>

        </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
