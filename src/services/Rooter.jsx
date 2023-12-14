import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../components/HomePage';
import { UserProvider } from '../context/UserProvider';
import Login from '../components/Login';
import CreateAccount from '../components/CreateAccount';

const Rooter = () => {
  return (
    <UserProvider >
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                {/* <Route path="/experience" element={<ExperiencePage/>} />    */}
                <Route path="/login" element={<Login/>} />    
                <Route path="/account" element={<CreateAccount/>} />    
            </Routes>
        </BrowserRouter>
    </UserProvider >
   
    
  );
};

export default Rooter;