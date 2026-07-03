
import './App.css'
import {HashRouter as Router , Routes , Route} from "react-router-dom"
import MovieContextProvider from './data/MovieContextProvider'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Nav from './components/Header/Nav'

function App() {


  return (
    <div className="bg-linear-to-r from-slate-900/60 via-black to-slate-900/60 ">
      <Router >
        <MovieContextProvider>
          <Nav/>
        <Routes >
            <Route path='/' element={<Home/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path="*"/>
        </Routes>
        <Footer/>
        </MovieContextProvider>
      </Router>
    </div>
  )
}

export default App
