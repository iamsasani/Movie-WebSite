import { useEffect, useState } from "react";
import { UserContext } from "./Context";
import axios from "axios";
import { ApiKey, BaseUrlMovie } from "../data/data";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(() => localStorage.getItem("session"));
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      async function getUserData() {
        const { data } = await axios.get(
          `${BaseUrlMovie}/account?api_key=${ApiKey}&session_id=${session}`,
        );
        setUser(data);
      }
      getUserData();
    }
  }, [session]);

  async function login(username, password) {
    try {
      const tokenResult = await axios.get(
        `${BaseUrlMovie}/authentication/token/new?api_key=${ApiKey}`,
      );
      const authorize = await axios.post(
        `${BaseUrlMovie}/authentication/token/validate_with_login?api_key=${ApiKey}`,
        {
          username,
          password,
          request_token: tokenResult.data.request_token,
        },
      );
      const session = await axios.post(
        `${BaseUrlMovie}/authentication/session/new?api_key=${ApiKey}`,
        {
          request_token: tokenResult.data.request_token,
        },
      );
      setSession(session.data.session_id);
      localStorage.setItem("session", session.data.session_id);
      navigate("/", {
        replace: true,
      });
    } catch {
      toast.error("invalid username and password!");
    }
  }

  function logOut() {
    setUser(null);
    setSession(null);
    localStorage.removeItem("session");
  }
  return (
    <UserContext.Provider value={{ user, setUser, login, session, logOut }}>
      {children}
    </UserContext.Provider>
  );
}
