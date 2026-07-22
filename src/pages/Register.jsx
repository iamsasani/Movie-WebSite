import {  useContext, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Context } from "../data/Context";

function Register() {

  const {showPass , setShowPass} =useContext(Context)
  const [showConfirmPass , setShowConfirmPass ] = useState(false)
  const [error , setError ] = useState("")

  function handleSignUp(e){
    e.preventDefault();
    const {password , confirmPassword} = e.target.elements;
    if(password.value !== confirmPassword.value){
        setError("Password and confirm password do not match");
        return
    }
    setError("")
  }
  return (
    <div
      className="min-h-screen  mt-4 rounded-md
     text-white container mx-auto flex items-center justify-center"
    >
      <div className=" xl:text-3xl  ">
        <div className="shadow-xl  shadow-gray-800/50">
          <div className="rounded-t-xl bg-[url(https://images.unsplash.com/photo-1659885785824-3e72856b8fef?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-60 xl:h-80 bg-cover bg-center"></div>

          <div className="bg-gray-200 rounded-b-xl px-15 py-5 ">
            <h1 className="text-2xl mb-2 text-black font-bold">Sing Up</h1>
            <form
              className="flex flex-col items-center justify-center gap-4"
              action=""
              onSubmit={handleSignUp}
            >
              <div className="rounded-xl bg-rose-400 px-3 w-66">
                <label>
                  <FontAwesomeIcon icon={faUser} />
                </label>
                <input
                  className="text-gray-900 placeholder:text-gray-200   border-none p-2 rounded-sm  focus:outline-none  focus:ring-blue-500"
                  type="text"
                  placeholder="Username"
                  name="username"
                  required
                />
              </div>
              <div className="rounded-xl bg-rose-400 px-3 w-66">
                <label>
                  <FontAwesomeIcon icon={faLock} />
                </label>
                <input
                  className=" text-gray-900 placeholder:text-gray-200   border-none p-2 rounded-sm focus:outline-none  focus:ring-blue-500"
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  required
                  minLength={6}
                  pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                  title="Password must be at least 6 characters and include both uppercase and lowercase letters"
                  maxLength={20}
                />
                <label>
                  <FontAwesomeIcon  onClick={() => setShowPass(!showPass)} icon={faEye} />
                </label>
              </div>
              <div className="rounded-xl bg-rose-400 px-3 w-66">
                <label>
                  <FontAwesomeIcon icon={faLock} />
                </label>
                <input
                  className=" text-gray-900 placeholder:text-gray-200   border-none p-2 rounded-sm focus:outline-none  focus:ring-blue-500"
                  type={showConfirmPass ? "text" : "password"}
                  placeholder="Password Confirm"
                  name="confirmPassword"
                  required
                  minLength={6}
                  pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                  title="Password must be at least 6 characters and include both uppercase and lowercase letters"
                  maxLength={20}
                />
                <label>
                  <FontAwesomeIcon onClick={() => setShowConfirmPass(!showConfirmPass)} icon={faEye} />
                </label>
              </div>
              <div className="rounded-xl bg-rose-400 px-3 w-66">
                <label>
                  <FontAwesomeIcon icon={faEnvelope} />
                </label>
                <input
                  className=" text-gray-900 placeholder:text-gray-200   border-none p-2 rounded-sm focus:outline-none  focus:ring-blue-500"
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <button
                type="submit"
                className="btn btn-primary cursor-pointer bg-purple-500 w-full py-1 rounded-sm shadow "
              >
                Sing Up
              </button>
            </form>
            <NavLink
              to={"/login"}
              className="text-blue-600  text-sm xl:text-lg cursor-pointer block mt-5"
            >
                Have account ?
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
