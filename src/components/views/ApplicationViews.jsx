import { useEffect, useState } from "react"
import { UserViews } from "./UserView"



export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localStorxUser = localStorage.getItem("storx_user")
    const storxUserObject = JSON.parse(localStorxUser)

    setCurrentUser(storxUserObject)
  }, [])

console.log(currentUser)

  return (<UserViews currentUser={currentUser} />)
}