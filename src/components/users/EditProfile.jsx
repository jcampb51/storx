//should show the navbar

import { useEffect, useState } from "react";
import { getUserById, updateProfile } from "../../services/userService";

//Pass the prop for the current user so that you can pull the information necessary to fill the form

export const EditProfile = ({ currentUser }) => {
    const [editTarget, setEditTarget] = useState({ userImg: '', username: '', email: ''})

    useEffect(() => {
        getUserById(currentUser.id).then(user => {
            setEditTarget(user)
        })
    }, [currentUser.id]);

    useEffect(() => {
        console.log(editTarget);  // This will log editTarget when it updates
    }, [editTarget]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditTarget(prevState => ({ ...prevState, [name]: value }));
      };

      const handleFormSubmit = (e) => {
        e.preventDefault();
      
        const updatedData = {
          id: currentUser.id,
          username: editTarget.username,
          userImg: editTarget.userImg,
          levelId: editTarget.levelId,
          email: editTarget.email,
          
        };
      
        updateProfile(currentUser.id, updatedData).then(updatedProfile => {
          console.log('Profile updated:', updatedProfile);
        }).catch(error => {
          console.error('Failed to update Profile:', error);
        });
      };

    return (
        <>
        <form className="profile-edit" onSubmit={handleFormSubmit}>
            <h2>Edit Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label>Profile Picture URL</label>
                    <input 
                        type="text" 
                        name="userImg"
                        value={editTarget?.userImg || ''} 
                        onChange={handleInputChange} 
                    />
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={editTarget?.username || ''}
                        onChange={handleInputChange}    
                    />
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input
                        type="text"
                        name="email"
                        value={editTarget?.email || ''}
                        onChange={handleInputChange}    
                    />
                </div>
            </fieldset>
            <button type="submit">Save Changes</button>
        </form>
        <div>
            <header className="profile-edit-target">Current Picture</header>
            <img src={`http://127.0.0.1:5173/${editTarget.userImg}`} alt="Current Profile Picture" />
        </div>
        </>
    )
}


//Should show a form with the current user picture, current user name, and current email and whatever else that can be changed later in development

//Needs a submit button that triggers a PUT that updates the user information