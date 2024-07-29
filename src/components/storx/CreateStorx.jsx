//show the navbar
//passed prop for current user
import { useEffect, useState } from "react";
import { createStorx } from "../../services/storxService";
import { getAllTypes } from "../../services/typeService";
import "./Storx.css"

export const CreateStorx = ({ currentUser }) => {
  const [allTypes, setAllTypes] = useState([]);
  const [newStorx, setNewStorx] = useState({
      image: '',
      typeId: '',
      userId: currentUser ? currentUser.id : ''
  });

  // Fetch all types on component mount
  useEffect(() => {
      getAllTypes().then(typeArray => {
          setAllTypes(typeArray);
          // Set initial typeId to the first type available
          setNewStorx(prev => ({
              ...prev,
              typeId: typeArray[0]?.id || '',
              userId: currentUser ? currentUser.id : ''
          }));
      });
  }, [currentUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStorx(prevState => ({ ...prevState, [name]: value }));
  };

  const handleTypeChange = (e) => {
    const typeId = parseInt(e.target.value, 10);
    setNewStorx(prevState => ({ ...prevState, typeId }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createStorx(newStorx).then((createdStorx) => {
      console.log('Storx created:', createdStorx);
      // Optionally, you can reset the form or perform other actions
    });
  };


  return (
    <>
      <form className="storx-create" onSubmit={handleFormSubmit}>
        <h2>Create Storx</h2>
        <fieldset>
          <div className="form-group">
            <label>Storx URL</label>
            <input
              type="text"
              name="image"
              value={newStorx.image}
              onChange={handleInputChange}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label>Storx Type</label>
            <select 
              name="typeId"
              value={newStorx.typeId}
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
        <button type="submit">Submit Storx</button>
      </form>
      <div>
        <header className="storx-create-target">Current Image</header>
        <img src={newStorx.image} alt="Storx Image" />
      </div>
    </>
  );
};


//render input for the image link

//render type selector ddm

//render submit button
//clicking the submit button should POST the new object into the api

//render a preview of the selected image NOTE: I'm not sure this can be done with my current knowledge so this should be a stretch goal