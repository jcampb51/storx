//create and export a render function and define the links for the Navbar. 
//Make sure useNavigate hook is correctly imported and define it as a variable to use it properly

import { Link, useNavigate } from "react-router-dom"
import "./navbar.css"

export const Navbar = ({ currentUser }) => {
    const navigate = useNavigate
    return (
    <ul className="navbar">
        <li className="navbar-item">
            <Link to="/storx">Storx Ticker</Link>
        </li>
        <li className="navbar-item">
            <Link to={`/user_profile/${currentUser.id}`}>My Profile</Link>
        </li>
        <li className="navbar-item">
            <Link to="/user_list">User List</Link>
        </li>
        <li className="navbar-item">
            <Link to="/create">Create Storx</Link>
        </li>
        <li className="navbar-item">
            <Link to="/respond">Respond</Link>
        </li>
    
    {localStorage.getItem("storx_user") ? (
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

{/* //
        
 //       </li>
//<li className="navbar-item">
  //          <Link to="/users">Users</Link> */}