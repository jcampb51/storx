import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getAllUsers } from "../../services/userService"
import "./User.css"



export const UserList = ({ currentUser }) => {
    const [users , setUsers] = useState([])
    const [otherUsers, setOtherUsers] = useState([])
    

    useEffect(() => {
        getAllUsers().then(data => {
            setUsers(data)
        })
    }, [])

    useEffect(() => {
        const filteredUsers = users.filter((user => user.id !== currentUser.id))
            
            setOtherUsers(filteredUsers)
        
    }, [users])

    return (
        <>
        <div className="user-list">
        {otherUsers.map(profile => (
            <Link key={profile.id} to={`/user_profile/${profile.id}`}>
                <div className="user-profile user-picture">
                    <div className="user-item">
            <img src={profile.userImg} alt={profile.username} />
            <p className="stat-block">{profile.username}</p></div></div>
        </Link>
        ))}
        </div>
        </>
    );
    
}

