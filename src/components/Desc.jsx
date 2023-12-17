import { useContext, useEffect, useRef, useState } from "react";
import requestHttp from "../services/api_service.js"
import '../assets/css/Desc.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import { UserContext } from "../context/UserProvider.jsx";

const Desc = () => {

    const [desc, setDesc] = useState([]);
    const [play, setPlay] = useState([]);
    const inscription = useRef(null);
    const { user } = useContext(UserContext);
    const storage = Object.keys(localStorage)
    const values = storage.map(key => JSON.parse(localStorage.getItem(key)));
    console.log("localStorage Desc:", JSON.parse(localStorage.getItem('formData')));
    console.log("user in Desc:",user);

    useEffect(() => {
        requestHttp().then( data => setDesc(data.game));
    }, []);

    const handlClick = (event) =>{
        event.preventDefault();
        const x = event.clientX;
        setPlay([...play, event.target.id]);
        console.log("event:",event);
        inscription.current.style.left = x + 'px';
        inscription.current.style.display = 'block';
    }

    const handleNo = (event) =>{
        setPlay(play.slice(0, -1));
        inscription.current.style.display = 'none';
    }

    const handleYes = (event) =>{
        event.preventDefault();
        console.log("handleYes event:",event);
        console.log("handleYes user:",user);
        values.map(key =>{
            if(key.email == user.email){
                values.inscrit = play;
            }

        })
        console.log("localStorage storage maj:", values);
        inscription.current.style.display = 'none';

    }

    return (
        <>
        <Nav />
        <div>
            <br /><br />
            <h1 className="d-flex justify-content-center" style={{color: "white", fontFamily: "cursive"}}>Description des jeux vidéos.</h1>
            <br /><br />
            <div className="d-flex flex-row justify-content-center carousel-container">
            <FontAwesomeIcon icon={faChevronLeft} className="carousel-arrow left fl-left" />
                {/* <div className="card-list"> */}
                    {desc.map( (descriptif, index) => <div key={index} className="card col-3 card-css" style={{ width: "15rem", marginLeft: "3%"}}>
                        <img  src={descriptif.image} alt="fc 24"  className="card-img-top" style={{width : "210px"}} />
                        <div className="card-body">
                            <h5 className="card-title">{descriptif.name}</h5>
                            <div className="text-test">
                                <p className="card-text" style={{fontSize: "0.8rem"}}>{descriptif.description}</p>
                            </div>
                            <a href="/" id={descriptif.name} className="btn btn-primary btn-test" onClick={handlClick}>S'inscire au tournoi</a>
                        </div>
                    </div>)}
                <FontAwesomeIcon icon={faChevronRight} className="carousel-arrow right fl-right" />
                {/* </div> */}
            </div>
        </div>
        <div className="infoBull" ref={inscription} style={{ display: 'none' }}>
            <h1 className="text-info">Validation</h1>
            <p className="p-5">Etes vous sûr de vouloir vous inscrire ?</p>
            <div className="d-flex justify-content-center">
                <a href="/"><button onClick={handleYes} className="btn btn-primary btn-infoBull mx-3">Oui</button></a>
                <button onClick={handleNo} className="btn btn-primary btn-infoBull">Non</button>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Desc;