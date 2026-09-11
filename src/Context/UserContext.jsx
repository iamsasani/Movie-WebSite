import { useEffect, useState } from "react";
import { UserContext } from "./Context";
import axios from "axios";
import { BaseUrlMovie } from "../data/data";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const [session, setSession] = useState(() =>
    localStorage.getItem("session")
  );

  const navigate = useNavigate();
  const location = useLocation();

  const isLoading = Boolean(session) && user === null;

  // -----------------------------
  // Get current user
  // -----------------------------
  useEffect(() => {
    if (!session) return;

    localStorage.setItem("session", session);

    let cancelled = false;

    async function getUserData() {
      try {
        const { data } = await axios.get(
          `${BaseUrlMovie}/account?session_id=${session}`
        );

        if (cancelled) return;

        setUser(data);

        if (location.pathname === "/login") {
          navigate("/profile", { replace: true });
        }
      } catch {
        if (cancelled) return;

        setUser(null);
        setSession(null);
        localStorage.removeItem("session");

        toast.error("Session expired. Please login again.");
      }
    }

    getUserData();

    return () => {
      cancelled = true;
    };
  }, [session, location.pathname, navigate]);

  // -----------------------------
  // Login
  // -----------------------------
  async function login(username, password) {
    try {
      // 1. Get request token
      const tokenResponse = await axios.get(
        `${BaseUrlMovie}/authentication/token/new`
      );

      const requestToken = tokenResponse.data.request_token;

      // 2. Validate token with username/password
      await axios.post(
        `${BaseUrlMovie}/authentication/token/validate_with_login`,
        {
          username,
          password,
          request_token: requestToken,
        }
      );

      // 3. Create session
      const sessionResponse = await axios.post(
        `${BaseUrlMovie}/authentication/session/new`,
        {
          request_token: requestToken,
        }
      );

      const newSession = sessionResponse.data.session_id;

      // Save session
      localStorage.setItem("session", newSession);
      setSession(newSession);

      toast.success("Login successful");

      navigate("/profile", { replace: true });
    } catch (error) {
      console.error("LOGIN ERROR:", error.response?.data || error);

      toast.error(
        error.response?.data?.status_message ||
          "Invalid username or password"
      );
    }
  }

  // -----------------------------
  // Logout
  // -----------------------------
  function logout() {
    setUser(null);
    setSession(null);
    localStorage.removeItem("session");
    navigate("/login");
  }

  return (
    <UserContext.Provider
      value={{
        user,
        session,
        isLoading,
        login,
        logout,
        setSession,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}