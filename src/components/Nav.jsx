import { useContext, useRef, useState } from 'react';
import '../assets/css/Desc.css';
import { UserContext } from '../context/UserProvider';
import { useNavigate } from 'react-router';

const Nav = () => {

    const {setUser} = useContext(UserContext);
    const inscrit = useRef(null);
    const navigate = useNavigate();
    const storage = Object.keys(localStorage)
    const values = storage.map(key => JSON.parse(localStorage.getItem(key)));
    const connect = JSON.parse(localStorage.getItem('loggedInUser'));

    console.log("storage nav:", values);

    //const sameConnect = values.find((key) => key.firstname == connect.firstname);
    //console.log("le seul et l'unique",JSON.parse(localStorage.getItem(sameConnect.firstname)));

    if(connect && connect.email == "jovicktchakala@yahoo.com"){
        if(inscrit.current != null)
            inscrit.current.style.display = "block";
    }
    const handleDeconnexion = (e) =>{
        const sameConnect = values.find((key) => key.firstname == connect.firstname);
        const storedData = JSON.parse(localStorage.getItem(sameConnect.firstname));
        storedData.inscrit = connect.inscrit;
        localStorage.setItem(sameConnect.firstname, JSON.stringify(storedData));
        console.log("recherche:",values.find((key) => key.firstname == connect.firstname));
        localStorage.removeItem('loggedInUser');
        setUser(null);
    }

    const handleGamePage = (e) =>{
        e.preventDefault();
        if(connect){
            navigate("/jeux");
        }else{
            navigate("/");
        } 
    }
    return(
        <>
         <nav className="navbar navbar-expand-lg bg-body-tertiary Navbar">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="" onClick={handleGamePage}>Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" ref={inscrit} href="/listes" style={{display: "none"}}>Liste des inscrits</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/" onClick={handleDeconnexion}>Déconnexion</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
       
    );
} 

export default Nav;