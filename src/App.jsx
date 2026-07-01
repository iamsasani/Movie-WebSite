
import './App.css'
import {HashRouter as Router , Routes , Route} from "react-router-dom"
import Main from './pages/Main'
import MovieContextProvider from './data/MovieContextProvider'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Router>
        <MovieContextProvider>
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
