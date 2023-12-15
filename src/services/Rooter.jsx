import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../components/HomePage';
<<<<<<< HEAD
import ExperiencePage from '../components/ExperiencePage';
import '../assets/css/home.css'
=======
>>>>>>> 18bfd0588900418e6bfcbf94ccdb40a2db2c230a
import { UserProvider } from '../context/UserProvider';
import Login from '../components/Login';
import CreateAccount from '../components/CreateAccount';
import PublicLayout from '../layouts/PublicLayout';

const Rooter = () => {
  return (
    <UserProvider >
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                {/* <Route path="/experience" element={<ExperiencePage/>} />    */}
                <Route path="/login" element={<Login/>} />    
                <Route path="/account" element={<CreateAccount/>} />    
                <Route path="/home" element={<PublicLayout/>}/>    
            </Routes>
        </BrowserRouter>
    </UserProvider >
   
    
  );
};

export default Rooter;