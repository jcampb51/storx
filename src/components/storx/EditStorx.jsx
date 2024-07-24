//show the navbar

import { useEffect, useState } from "react";
import { updateStorx } from "../../services/storxService";

export const EditStorx = ({ allStorx, allTypes }) => {
  const [targetId, setTargetId] = useState(1);
  const [editTarget, setEditTarget] = useState({});

  useEffect(() => {
    setTargetId(1);
    console.log('Target ID set to:', 1);
  }, []);

  useEffect(() => {
    const target = allStorx.find(storx => storx.id === targetId);
    setEditTarget(target);
    console.log('Edit target:', target);
  }, [targetId, allStorx]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setEditTarget(prevState => ({ ...prevState, image: value }));
  };

  const handleTypeChange = (e) => {
    const typeId = parseInt(e.target.value);
    const typeName = allTypes.find(type => type.id == typeId).name;
    setEditTarget(prevState => ({ ...prevState, typeId: typeId, typeName: typeName }));
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      id: editTarget.id,
      image: editTarget.image,
      typeId: editTarget.typeId,
      userId: editTarget.userId
    };
    updateStorx(editTarget.id, updatedData).then((updatedStorx) => {
      console.log('Storx updated:', updatedStorx);
      
    });
  }

  return (
    <>
      <form className="storx-edit" onSubmit={handleFormSubmit}>
        <h2>Edit Storx</h2>
        <fieldset>
          <div className="form-group">
            <label>Storx URL</label>
            <input 
              type="text" 
              name="image"
              value={editTarget?.image || ''} 
              onChange={handleInputChange} 
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label>Storx Type</label>
            <select 
              name="typeId"
              value={editTarget?.typeId || ''} 
              onChange={handleTypeChange}
            >
              {allTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <button type="submit">Save Changes</button>
      </form>
      <div>
        <header className="storx-edit-target">Current Image</header>
        <img src={editTarget?.image || ''} alt="Storx Image" />
      </div>
    </>
  );
};


//render input for the image link

//render type selector ddm

//render submit button
//clicking the submit button should PUT the updated object into the api

//render a preview of the selected image NOTE: I'm not sure this can be done with my current knowledge so this should be a stretch goal


//passed prop for current user