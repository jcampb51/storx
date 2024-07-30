import React, { useEffect, useState } from "react";
import { deleteStorx } from "../../services/storxService"; // Ensure you have this function in your service
import { useNavigate } from "react-router-dom";



export const DeleteStorx = ({ storxObj, onDelete }) => {
    const [confirmDelete, setConfirmDelete] = useState(false);
    

    
  
  
    const handleDelete = () => {
        deleteStorx(storxObj.id).then(() => {
          console.log('Storx deleted:', storxObj.id);
          onDelete(storxObj.id); // Update UI accordingly
        }).catch(error => {
          console.error('Error deleting storx:', error.message);
        });
      };


    return (
      <div className="delete-storx">
        {confirmDelete ? (
          <>
            <button type="button" onClick={handleDelete}>Are You Sure?</button>
            <button type="button" onClick={() => setConfirmDelete(false)}>Cancel</button>
          </>
        ) : (
          <button type="button" onClick={() => setConfirmDelete(true)}>Delete</button>
        )}
      </div>
    );
  };
