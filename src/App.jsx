import { useEffect, useState } from "react";
import { EditStorx } from "./components/storx/EditStorx";
import { StorxTicker } from "./components/storx/StorxTicker";
import { getAllStorx } from "./services/storxService";
import { getAllTypes } from "./services/typeService";
import { CreateStorx } from "./components/storx/CreateStorx";
import { DeleteStorx } from "./components/storx/DeleteStorx";
import { getAllUsers } from "./services/userService";

export const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [users, setUsers] = useState([]);
  const [allStorx, setAllStorx] = useState([]);
  const [allTypes, setAllTypes] = useState([]);
  const [userStorx, setUserStorx] = useState([]); // Corrected: Added this state
  const [targetId, setTargetId] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const usersData = await getAllUsers();
      const storxData = await getAllStorx();
      const typesData = await getAllTypes();

      setUsers(usersData);
      setAllStorx(storxData);
      setAllTypes(typesData);

      if (usersData.length > 0) {
        setCurrentUser(usersData[0]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredStorx = allStorx.filter(storx => storx.userId === currentUser?.id);
    setUserStorx(filteredStorx);
  }, [allStorx, currentUser]);

  const handleUserChange = (e) => {
    const selectedUserId = parseInt(e.target.value, 10);
    const selectedUser = users.find(user => user.id === selectedUserId);
    setCurrentUser(selectedUser);
  };

  const onDelete = (deletedId) => {
    setAllStorx(prevStorx => prevStorx.filter(storx => storx.id !== deletedId));
    setAllStorx(prevStorx => prevStorx.filter(storx => storx?.id !== deletedId));
  };

  const handleEditClick = (id) => {
    setTargetId(id);
  };

  return (
    <div>
      <h1>Welcome, {currentUser.username || "Select a user"}</h1>
      <div>
        <label>Select User: </label>
        <select value={currentUser.id || ''} onChange={handleUserChange}>
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          ))}
        </select>
      </div>
      <CreateStorx allTypes={allTypes} />
      {targetId && <EditStorx allStorx={allStorx} allTypes={allTypes} targetId={targetId} />} {/* Pass filtered Storx */}
      <DeleteStorx allStorx={userStorx} onDelete={onDelete} /> {/* Pass filtered Storx */}
      <StorxTicker allStorx={userStorx} onEditClick={handleEditClick} /> {/* Pass filtered Storx */}
    </div>
  );
};

