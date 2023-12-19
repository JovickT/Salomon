import { useContext, useRef } from "react";
import { UserContext } from "../context/UserProvider";

const Footer = () => {
    const {user} =useContext(UserContext);
    const btnClear = useRef(null);
    const connect = JSON.parse(localStorage.getItem('loggedInUser'));

    
    if(connect && connect.email == "jovicktchakala@yahoo.com"){
        if(btnClear.current){
            btnClear.current.style.display = 'block';
        }
    }

    const clear = () =>{
        localStorage.clear();
    }
    return (
        <>
            <footer>
                <div className="bg-light py-4" >
                    <div className="d-flex justify-content-around container-footer" >
                        <img style={{width:"5%"}} src="http://s3.amazonaws.com/gt7sp-prod/decal/52/47/92/4692825649511924752_1.png" alt="Logo JRM" />
                        <p className="text-muted py-2 position-relative">© Fait par Jovick, Randy et Mehdi.</p>
                        <button className="btn-clear bg-body-tertiary" ref={btnClear} onClick={clear} style={{display: "none"}}>Clear Storage</button>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;