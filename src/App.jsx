
import './App.css'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Main from './pages/Main'
import Nav from './components/Nav'
import MovieContextProvider from './data/MovieContextProvider'

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

        </MovieContextProvider>



      </Router>

    </>
  )
}

export default App
