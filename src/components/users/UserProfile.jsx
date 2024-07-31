//fetch the users

import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/userService";
import "./User.css"
import { useNavigate, useParams } from "react-router-dom";

export const UserProfile = ({ currentUser }) => {
    const [profile, setProfile] = useState({});
    const { id } = useParams()
    const navigate = useNavigate()

    const url = "http://127.0.0.1:5173/" + profile.userImg

    // Fetch all users
    useEffect(() => {
        getAllUsers().then(userArray => {
            const targetProfile = userArray.find(user => user.id === parseInt(id));
            setProfile(targetProfile || {});
        });
    }, [id]);

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
                    <img src={url} alt={profile?.username || "User"} />
                </div>
                <div className="stat-block">
                    <h2>User Info</h2>
                    <p>Username: {profile?.username}</p>
                    <p>Level: {profile?.level?.name}</p>
                    <p>Maximum Storx: {profile?.level?.maxStorx}</p>
                        {currentUser.id === parseInt(id) && (
                    <><p>Email Address: {profile?.email}</p>
                    <button onClick={() => navigate(`/edit_profile`)}>Edit</button></>
                    )}
                </div>

            </article>
        </>
    );
};



//Should show the picture of the user
//In a separate box show the stats for the user that can be pulled from the fetch query

//Needs an edit button


//Stretch goal: Buttons for friends list and user's Storx list