import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MovieContextProvider from "./data/MovieContextProvider";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Nav from "./components/Header/Nav";
import Movie from "./pages/Movie";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import UserProvider from "./Context/UserContext";
import People from "./pages/People";
import TV from "./pages/TV";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function App() {
  return (
    <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1630417771913-35f6611f9572?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
      <Router>
        <UserProvider>
          <MovieContextProvider>
            <ScrollToTop />
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/:id" element={<Movie />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<Register />} />
              <Route path="/people/:id" element={<People />} />
              <Route path="/tv/:id" element={<TV />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" />
            </Routes>
            <Footer />
            <Toaster />
          </MovieContextProvider>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
