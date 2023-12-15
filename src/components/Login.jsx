// import Footer from './Footer';
import '../assets/css/home.css'
<<<<<<< HEAD

import { UserContext } from "../context/UserProvider";
import { useContext, useState, useRef } from 'react';

const Login = () =>{
    const myUlRef = useRef(null);
    console.log("mon storage:",localStorage.getItem('formData'));
    const stoarage = JSON.parse(localStorage.getItem('formData'));
=======
import { UserContext } from "../context/UserProvider";
import { useContext, useRef, useState } from 'react';

const Login = () =>{
    const myUlRef = useRef(null);
    // console.log("mon storage:",localStorage.getItem('formData'));
    const stoarage = JSON.parse(localStorage.getItem('formData'));
    console.log("stoarage:",stoarage);

>>>>>>> 18bfd0588900418e6bfcbf94ccdb40a2db2c230a
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, setUser } = useContext(UserContext);
    const handleClick = (e) =>{
        e.preventDefault();
        
<<<<<<< HEAD
        if((email != stoarage.email && password != stoarage.password) ||
        (email != stoarage.email || password != stoarage.password)){
            myUlRef.current.style.display = 'block';
        }else{
            console.log("mon storage in handleClick:",JSON.parse(localStorage.getItem('formData')));
            setUser(prevUser => ({
                ...prevUser,
                firstname: stoarage.firstname,
                lastname: stoarage.lastname,
                email: stoarage.email,
                password: stoarage.password,
            }));
            console.log("user in handleClick:",user);
        }
=======
        // if((email != stoarage.email && password != stoarage.password) ||
        // (email != stoarage.email || password != stoarage.password)){
        //     myUlRef.current.style.display = 'block';
        // }else{
        //     console.log("mon storage in handleClick:",JSON.parse(localStorage.getItem('formData')));
        //     setUser(prevUser => ({
        //         ...prevUser,
        //         firstname: stoarage.firstname,
        //         lastname: stoarage.lastname,
        //         email: stoarage.email,
        //         password: stoarage.password,
        //     }));
             console.log("user in handleClick:",user);
        // }
>>>>>>> 18bfd0588900418e6bfcbf94ccdb40a2db2c230a
    }
    
    return(
        <div className='all'>
            <div className="formulaire">
<<<<<<< HEAD
                <form action="/login" method='GET' >
=======
                <form action="/login" method='GET'>
>>>>>>> 18bfd0588900418e6bfcbf94ccdb40a2db2c230a
                <fieldset>
                    <legend>Login in</legend>
                    <div className="form-group form-email">
                        <label htmlFor="exampleInputEmail1" className='form-text'>Email address</label>
                        <input type="email" className="form-control input-email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
                        value={email}
<<<<<<< HEAD
                        onChange={(e) => setEmail(e.target.value)} required readonly />
=======
                        onChange={(e) => setEmail(e.target.value)} required />
                        <small id="emailHelp" className="form-text text-muted form-text">We'll never share your email with anyone else.</small>
>>>>>>> 18bfd0588900418e6bfcbf94ccdb40a2db2c230a
                    </div>
                    <div className="form-group form-password">
                        <label htmlFor="exampleInputPassword1" className='form-text'>Password</label>
                        <input type="password" className="form-control input-password" id="exampleInputPassword1" placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className='from-submit'>
                        <button type="submit" className="btn btn-primary" onClick={handleClick}>Valider</button>
                    </div>
                    <div className='text-center sign-in'>
                        <a href="/account">Créer un compte chez nous !</a>
                    </div>
                    <ul className="mt-3"  ref={myUlRef} style={{ display: 'none' }}>
                        <li style={{ color: 'red' }}>Adresse email ou mot de passe incorrecte</li>
                    </ul>
                </fieldset>
                </form>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Login;