import {useEffect, useState } from "react";
import requestHttp from "../services/api_service.js"
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";

const TabIscription = () =>{
    const [desc, setDesc] = useState([]);
    const storage = Object.keys(localStorage)
    const values = storage.map(key => JSON.parse(localStorage.getItem(key)));
    console.log("storage listes inscrits:",values);
    useEffect(() => {
        requestHttp().then( data => setDesc(data.game));
    }, []);

    return(
        <>
        <Nav />
        <table className="table">
        <thead className="thead-dark">
            <tr>
            <th scope="col">#</th>
            {desc.map((descriptif,index) =><th key={index} scope="row">{descriptif.name}</th>)}
            </tr>
        </thead>
        <tbody>
        {values.map((descriptif,index) =><tr>
                <th scope="row">{descriptif.firstname} {descriptif.lastname}</th>
                {descriptif.inscrit ? (descriptif.inscrit.map((jeu, index) => (<td key={index}>{jeu == "FC 24"? "Inscrit":"Non inscript"}</td>))) : (<td>Non inscrit</td>)}
                {descriptif.inscrit ? (descriptif.inscrit.map((jeu, index) => (<td key={index}>{jeu == "Fortnite"? "Inscrit":"Non inscript"}</td>))) : (<td>Non inscrit</td>)}
                {descriptif.inscrit ? (descriptif.inscrit.map((jeu, index) => (<td key={index}>{jeu == "Grand Theft Auto V"? "Inscrit":"Non inscript"}</td>))) : (<td>Non inscrit</td>)}
                {descriptif.inscrit ? (descriptif.inscrit.map((jeu, index) => (<td key={index}>{jeu == "Assassins Creed IV: Black Flag"? "Inscrit":"Non inscript"}</td>))) : (<td>Non inscrit</td>)}
            </tr>)}
        </tbody>
        </table>
        <Footer/>
        </>
    )
   
}

export default TabIscription;