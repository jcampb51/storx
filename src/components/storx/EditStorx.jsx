//show the navbar

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { updateStorx } from "../../services/storxService";
import { getAllTypes } from "../../services/typeService";

export const EditStorx = ({ currentUser}) => {
  const [editTarget, setEditTarget] = useState({ image: '', typeId: '' });
  const [isLoading, setIsLoading] = useState(true);
  const [allTypes, setAllTypes] = useState([]);
  const { id } = useParams();  // Retrieve the ID from URL parameters
  console.log("Retrieved ID from URL:", id);
  
  const baseURL = "http://127.0.0.1:5173/";

 console.log("rendered page")
 console.log("current edit target", editTarget)
  // Fetch all types from the server
  useEffect(() => {
    getAllTypes().then(typeArray => {
      setAllTypes(typeArray);
      // Optionally set the default type if not editing an existing Storx
      
    });
  }, [id]);
console.log(allTypes)
  
useEffect(() => {
  const fetchStorxById = async () => {
      try {
          const response = await fetch(`http://127.0.0.1:8088/storx/${id}?_expand=type&_expand=user`);
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const data = await response.json();
            if (data.image) {
             data.image = `${baseURL}${data.image}`;
            }
          setEditTarget(data)
          setIsLoading(false);  // Set loading to false after data is fetched
          
      } catch (error) {
          console.error("Failed to fetch Storx:", error);
          setIsLoading(false);  // Ensure loading is set to false even on error
      }
  };

  if (id) {
      fetchStorxById();
  }
}, [id]);

console.log(editTarget)


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditTarget(prevState => ({ ...prevState, [name]: value }));
  };

  const handleTypeChange = (e) => {
    const typeId = parseInt(e.target.value, 10);
    setEditTarget(prevState => ({ ...prevState, typeId }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  if (!id) {
    console.error("Error: Storx ID is undefined, cannot update.");
    return;  // Stop the function if id is undefined
  }
  
  console.log("Submitting with ID:", id);
  // continue with your update logic
  
    const updatedData = {
      id: id,
      image: editTarget.image,
      typeId: editTarget.typeId,
      userId: currentUser.id
    };
  
    updateStorx(id, updatedData).then(updatedStorx => {
      console.log('Storx updated:', updatedStorx);
    }).catch(error => {
      console.error('Failed to update Storx:', error);
    });
  };

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
                <div className="form-group">
                    <label>Storx Type</label>
                    <select 
                        name="typeId"
                        value={editTarget?.typeId || ''} 
                        onChange={handleTypeChange}
                    >
                        {allTypes.map((type) => (
                            <option key={type.id} value={type.id}>
                                {type?.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit">Save Changes</button>
        </form>
        <div>
            <header className="storx-edit-target">Current Image</header>
            {!isLoading ? (
                editTarget.image ? (
                  <img src={editTarget.image.startsWith('http') ? editTarget.image : `http://127.0.0.1:5173/${editTarget.image}`} alt="Current Storx" />
                ) : (
                  <p>No image available</p>
                )
            ) : (
                <p>Loading image...</p>
            )}
        </div>
    </>
);
;
};



//render input for the image link

//render type selector ddm

//render submit button
//clicking the submit button should PUT the updated object into the api

//render a preview of the selected image NOTE: I'm not sure this can be done with my current knowledge so this should be a stretch goal


//passed prop for current user