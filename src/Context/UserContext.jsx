import { useEffect, useState } from "react";
import { UserContext } from "./Context";
import axios from "axios";
import { ApiKey, BaseUrlMovie } from "../data/data";
import toast from "react-hot-toast";
import {  useLocation, useNavigate } from "react-router-dom";

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(() => localStorage.getItem("session"));
  const [isLoading, setIsLoading] = useState(Boolean(localStorage.getItem("session")));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!session) {
      setUser(null);
      setIsLoading(false);
      return;
    }

    localStorage.setItem("session", session);

    async function getUserData() {
      setIsLoading(true);

      try {
        const { data } = await axios.get(
          `${BaseUrlMovie}/account?api_key=${ApiKey}&session_id=${session}`,
        );
        setUser(data);

        if (location.pathname === "/login") {
          navigate("/profile", { replace: true });
        }
      } catch {
        setUser(null);
        setSession(null);
        localStorage.removeItem("session");
        toast.error("Session expired. Please login again.");
      } finally {
        setIsLoading(false);
      }
    }

    getUserData();
  }, [session, location.pathname, navigate]);

  async function login(username, password) {
    try {
      const tokenResult = await axios.get(
        `${BaseUrlMovie}/authentication/token/new?api_key=${ApiKey}`,
      );
      await axios.post(
        `${BaseUrlMovie}/authentication/token/validate_with_login?api_key=${ApiKey}`,
        {
          username,
          password,
          request_token: tokenResult.data.request_token,
        },
      );
      const sessionResponse = await axios.post(
        `${BaseUrlMovie}/authentication/session/new?api_key=${ApiKey}`,
        {
          request_token: tokenResult.data.request_token,
        },
      );
      setSession(sessionResponse.data.session_id);
    } catch {
      toast.error("invalid username and password!");
    }
  }

  function logOut() {
    setUser(null);
    setSession(null);
    setIsLoading(false);
    localStorage.removeItem("session");
  }

  return (
    <UserContext.Provider value={{ user, setUser, login, session, logOut, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}
