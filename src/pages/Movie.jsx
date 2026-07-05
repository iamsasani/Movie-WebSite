import { useParams } from "react-router-dom"


function Movie() {

    const {id} = useParams();
  return (
    <div className="text-4xl   text-white min-h-screen  " >

      <div className="container mt-10 mx-auto">
      Movie page {id}


      </div>

      </div>
  )
}

export default Movie