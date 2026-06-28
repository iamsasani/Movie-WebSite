
import './App.css'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Main from './pages/Main'
import Nav from './components/Nav'

function App() {


  return (
    <>
      <Router>
        <Nav/>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route/>

        </Routes>



      </Router>

    </>
  )
}

export default App
