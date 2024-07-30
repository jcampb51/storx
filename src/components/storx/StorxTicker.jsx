import React, { useEffect, useState } from 'react';
import { DeleteStorx } from './DeleteStorx';
import { getAllStorx } from '../../services/storxService';
import "./Storx.css"
import { useNavigate } from 'react-router-dom';

export const StorxTicker = ({ currentUser }) => {
  const [allStorx, setAllStorx] = useState([]);
  const [editThing, setEditThing] = useState({})
  const navigate = useNavigate();

  useEffect(() => {
    // Suppose getAllStorx is a function to fetch all Storx entries
    getAllStorx().then(data => {
      setAllStorx(data);
      console.log("All Storx fetched and set");
    });
  }, []);
  
const handleEditClick = (storxThing) => {
  console.log(`navigating to edit storx with with ${storxThing.id}`)
  setEditThing(storxThing)
}

const onDelete = (deletedId) => {
  setAllStorx(prevStorx => prevStorx.filter(storx => storx?.id !== deletedId));
};

 // useEffect to navigate after the state is updated
 useEffect(() => {
  if (editThing.id) { // Ensure we have a valid ID
    navigate(`/edit/${editThing.id}`);
    console.log("Edittthing in useEffect:", editThing);
  }
}, [editThing, navigate]);

  return (
    <div className="storx-list">
      {allStorx.map(storxObj => (
        <div key={storxObj.id} className="storx-item">
          <img src={storxObj.image} alt="Storx Image" />
          <p>Type: {storxObj.type.name}</p>
          {currentUser.id === storxObj.userId && (
            <>
              <button onClick={() =>  handleEditClick(storxObj) }>Edit</button>
              <DeleteStorx storxObj={storxObj} onDelete={onDelete}/>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

  




//render search bar
//render filter ddm
//render "Add Response" button that navigates to the response view under each item in the list
//render a display of types of responses and the response count under each item in the list

//clicking on a Storx should navigate to the Storx view