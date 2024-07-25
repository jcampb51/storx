import React from 'react';
import { DeleteStorx } from './DeleteStorx';

//fetch the storx list

export const StorxTicker = ({ allStorx, onDelete, onEditClick }) => {
  return (
    <div className="storx-list">
      {allStorx.map(storxObj => (
        <div key={storxObj.id} className="storx-item">
          <img src={storxObj.image} alt="Storx Image" />
          <p>Type: {storxObj.typeName}</p>
          <button onClick={() => onEditClick(storxObj.id)}>Edit</button>
          <DeleteStorx allStorx={allStorx} storxObj={storxObj} onDelete={onDelete} />
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