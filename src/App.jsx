

import "./App.css"

import { Route, Routes } from "react-router-dom"
import { Login } from "./components/login/Login"
import { Register } from "./components/login/Register"
import { Authorized } from "./components/views/Authorized"
import { ApplicationViews } from "./components/views/ApplicationViews"

export const App = () => {
  
 


  
  
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

   
      <Route path="*" element={
         <Authorized>
            <ApplicationViews/>
         </Authorized>
      }
      />
    </Routes>
  );
};

