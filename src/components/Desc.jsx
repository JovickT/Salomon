import { useEffect, useState } from "react";
import requestHttp from "../services/api_service.js"

const Desc = () => {

    const [desc, setDesc] = useState([]);

    useEffect(() => {
        requestHttp().then( data => setDesc(data.game));
    }, []);

    return (
        <>
        <div>
            <br /><br />
            <h1 class="d-flex justify-content-center">Description des jeux vidéos.</h1>
            <br /><br />
            <div className="d-flex flex-row justify-content-center">
                {desc.map( descriptif => <div class="card col-3 card-css" style={{width: "15rem", marginLeft:"3%"}}>
                    <img  src={descriptif.image} alt="fc 24"  class="card-img-top" style={{width : "15rem"}} />
                    <div class="card-body">
                        <h5 class="card-title">{descriptif.name}</h5>
                        {/* <div className="text-test"> */}
                            <p class="card-text" style={{fontSize: "0.8rem"}}>{descriptif.description}</p>
                        {/* </div> */}
                        <a href="/" class="btn btn-primary btn-test">S'inscire au tournoi</a>
                    </div>
                </div>)}
            </div>
        </div>
        
        </>
    );
};

export default Desc;