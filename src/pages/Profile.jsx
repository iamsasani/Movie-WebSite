import { useContext } from "react"
import { UserContext } from "../Context/Context"
import { Navigate } from "react-router-dom"


function Profile() {

    const {user , session} = useContext(UserContext)
  return (
    <div className="text-white">
        {
            session ? (
                <div>
                   {user.name}
                </div>
            ) : (
                <Navigate to={'/login'}/>
            )
        }
    </div>
  )
}

export default Profile