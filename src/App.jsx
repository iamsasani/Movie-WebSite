
import './App.css'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Main from './pages/Main'
import Nav from './components/Nav'
import MovieContextProvider from './data/MovieContextProvider'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Router>
        <MovieContextProvider>
        <Nav/>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route/>

        </Routes>
        <Footer/>
        </MovieContextProvider>



      </Router>

    </>
  )
}

export default App
