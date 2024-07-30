import { Outlet, Route, Routes } from "react-router-dom"

import { Navbar } from "../navbar/Navbar"
import { UserProfile } from "../users/UserProfile"
import { StorxTicker } from "../storx/StorxTicker"
import { StorxDetails } from "../storx/StorxDetails"
import { CreateStorx } from "../storx/CreateStorx"
import { EditStorx } from "../storx/EditStorx"
import { Welcome } from "../welcome/Welcome"
import { UserList } from "../users/UserList"


export const UserViews = ({ currentUser }) => {
   return( <Routes>


<Route path="/" element={<><Navbar currentUser={currentUser}/><Outlet /></>}>
    <Route index element={<Welcome />} />
    
      <Route path="user_profile/:id" element={<UserProfile currentUser={currentUser} />} />
      <Route path="user_list" element={<UserList currentUser={currentUser} />} />
    
    <Route path="storx">
      <Route index element={<StorxTicker currentUser={currentUser}/>} />
      <Route path=":storxId" element={<StorxDetails />} />{""}
    </Route>
    <Route path="create">
      <Route index element={<CreateStorx currentUser={currentUser} />} />
    </Route>
    <Route path="/edit/:id" element={<EditStorx currentUser={currentUser} />} />
   </Route>
   </Routes>
   
)}

//<div>
  //    
    //  <CreateStorx allTypes={allTypes} />
      //{targetId && <EditStorx allStorx={allStorx} allTypes={allTypes} targetId={targetId} />} {/* Pass filtered Storx */}
      //<DeleteStorx allStorx={userStorx} onDelete={onDelete} /> {/* Pass filtered Storx */}
      //<StorxTicker allStorx={userStorx} onEditClick={handleEditClick} /> {/* Pass filtered Storx */}
    //</div>