
import './App.css'
import {HashRouter as Router , Routes , Route} from "react-router-dom"
import MovieContextProvider from './data/MovieContextProvider'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Nav from './components/Header/Nav'
import Genre from './pages/Genre'
import Movie from './pages/Movie'
import ScrollToTop from './components/ScrollToTop'
import Login from './pages/Login'
import  { Toaster } from 'react-hot-toast';
import UserProvider from './Context/UserContext'
import People from './pages/People'
import TV from './pages/TV'
import Profile from './pages/Profile'
import Register from './pages/Register'

function App() {


  return (
    <div className="bg-linear-to-r from-slate-900/60 via-black to-slate-900/60 ">
      <Router >
        <UserProvider>
        <MovieContextProvider>
          <ScrollToTop/>
          <Nav/>
        <Routes >
            <Route path='/' element={<Home/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/movies/:id' element={<Movie/>}/>
            <Route path='/genre' element={<Genre/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signUp' element={<Register/>}/>
            <Route path='/people/:id' element={<People/>}/>
            <Route path='/tv/:id' element={<TV/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path="*"/>
        </Routes>
        <Footer/>
        <Toaster />
        </MovieContextProvider>
      </UserProvider>
      </Router>
    </div>
  )
}

export default App
