import { useContext } from "react";
import { UserContext } from "../Context/Context";

function Login() {
  function handleLogin(e) {
    e.preventDefault();
    const { username, password } = e.target.elements;

    login(username.value, password.value);
  }


  const {login , session} =useContext(UserContext);
  return (
    <div className="min-h-screen text-white container mx-auto flex  justify-center">
      <div>
        <p>{session}</p>
        <form
          className="flex flex-col mt-100 items-center justify-center gap-4"
          action=""
          onSubmit={handleLogin}
        >
          <input
            className="bg-gray-200 text-gray-900 placeholder:text-gray-500 border-none p-2 rounded-sm  focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Username"
            name="username"
          />
          <input
            className="bg-gray-200 text-gray-900 placeholder:text-gray-500 border-none p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Password"
            name="password"
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
