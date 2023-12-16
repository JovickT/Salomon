import { useContext, useEffect, useState } from 'react';
import '../assets/css/Desc.css';
import { UserContext } from '../context/UserProvider';

const Nav = () => {
    const [liste,setListe] = useState("/login");
    const {setUser} = useContext(UserContext);
    const storaData = JSON.parse(localStorage.getItem('formData'));
   
        useEffect(() => {
            if(storaData.length >= 1){
                setListe("\jeux");
            }else{
                console.log("faire apparître une pop up qui demande de se connecter pour accéder à la liste");
            }
        }, []);
    
        const handleDeconnexion = (e) =>{
            //useEffect(() => {
                setUser(null);
            //}, []);
        }
    return(
        <>
         <nav className="navbar navbar-expand-lg bg-body-tertiary Navbar">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href={liste}>Home</a>
                    </li>
                    {/* <li className="nav-item">
                    <a className="nav-link" href={liste}>Liste des jeux</a>
                    </li> */}
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