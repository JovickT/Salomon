import React from 'react';
import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import HomePage from '../components/HomePage';
import '../assets/css/home.css'
import { UserProvider } from '../context/UserProvider';
import Login from '../components/Login';
import CreateAccount from '../components/CreateAccount';
import Desc from '../components/Desc';
import PublicLayout from '../layouts/PublicLayout';

const Rooter = createBrowserRouter ([
  {
    path:"/" ,
    element:<PublicLayout/>,
    children:[
      {
        path:"/",
        path:"/login",
        element:<Login/>,    
      },      
      {
        path:"/account",
        element:<CreateAccount/>,
      },
      {
        path:"/jeux",
        element:<Desc/>,    
      }    

    ],
  }
]);

export default Rooter;