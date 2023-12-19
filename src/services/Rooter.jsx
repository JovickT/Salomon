import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../components/HomePage';
import { UserProvider } from '../context/UserProvider';
import CreateAccount from '../components/CreateAccount';
import Desc from '../components/Desc';
import TabIscription from '../components/TabInscription';

const Rooter = () => {
  return (
    <UserProvider >
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/account" element={<CreateAccount/>} />    
                <Route path="/jeux" element={<Desc/>} />    
                <Route path="/listes" element={<TabIscription/>} />    
            </Routes>
        </BrowserRouter>
    </UserProvider >
   
    
  );
};

export default Rooter;