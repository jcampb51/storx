//create and export a render function and define the links for the Navbar. 
//Make sure useNavigate hook is correctly imported and define it as a variable to use it properly

import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const Navebar = () => {
    const navigate = useNavigate
    return (
    <ul className="navbar">
        <li className="navbar-item">
            <Link to="/ticker">Storx Ticker</Link>
        </li>
        <li className="navbar-item">
            <Link to="/user_profile">My Profile</Link>
        </li>
        <li className="navbar-item">
            <Link to="/users">Users</Link>
        </li>
        <li className="navbar-item">
            <Link to="/create">Create Storx</Link>
        </li>
    
    {localStorage.getItem("honey_user") ? (
        <li className="navbar-item navbar-logout">
          <Link
            className="navbar-link"
            to=""
            onClick={() => {
              localStorage.removeItem("storx_user")
              navigate("/", { replace: true })
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}</ul>
)}