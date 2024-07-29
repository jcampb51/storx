//fetch the users

import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/userService";
import "./User.css"

export const UserProfile = ({ currentUser }) => {
    const [users, setUsers] = useState([]);
    const [profile, setProfile] = useState({});

    // Fetch all users
    useEffect(() => {
        getAllUsers().then(userArray => {
            setUsers(userArray);
        });
    }, []);

    // Find and set the current user's profile
    useEffect(() => {
        if (users.length > 0 && currentUser) {
            const targetProfile = users.find(user => user.id === currentUser.id);
            setProfile(targetProfile);
        }
    }, [users, currentUser]); // Depend on users and currentUser

    // Log the profile when it changes
    useEffect(() => {
        if (profile) {
            console.log("Profile updated:", profile);
        }
    }, [profile]);

    return (
        <>
        <article className="user-profile">
            <div className="user-picture">
                <img src={profile.userImg} alt={profile?.username || "User"}/>
            </div>
            <div className="stat-block">
                <h2>User Info</h2>
                <p>{profile?.username}</p>
                <p>Level: {profile?.level?.name}</p>
                <p>Maximum Storx: {profile?.level?.maxStorx}</p>
                <p>Email Address: {profile?.email}</p>
            </div>
        </article>
        </>
    );
}


//Should show the picture of the user
//In a separate box show the stats for the user that can be pulled from the fetch query

//Needs an edit button


//Stretch goal: Buttons for friends list and user's Storx list