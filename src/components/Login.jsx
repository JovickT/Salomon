// import Footer from './Footer';
import '../assets/css/home.css'
import { UserContext } from "../context/UserProvider";
import { useContext, useRef, useState } from 'react';
import Footer from './Footer';
import Nav from './Nav';

const Login = () =>{
    const myUlRef = useRef(null);
    // console.log("mon storage:",localStorage.getItem('formData'));
    const stoarage = JSON.parse(localStorage.getItem('formData'));
    console.log("stoarage:",stoarage);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user } = useContext(UserContext);
    const handleClick = (e) =>{
        // e.preventDefault();
        
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
    }
    
    return(
    <>
    <Nav/>
    <div className='all'>
            <div className="formulaire">
                <form action="/jeux" method='POST'>
                <fieldset>
                    <legend>Se connecter</legend>
                    <div className="form-group form-email">
                        <label htmlFor="exampleInputEmail1" className='form-text'>Email address</label>
                        <input type="email" className="form-control input-email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} name='email' required />
                        <small id="emailHelp" className="form-text text-muted form-text">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group form-password">
                        <label htmlFor="exampleInputPassword1" className='form-text'>Password</label>
                        <input type="password" className="form-control input-password" id="exampleInputPassword1" placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} name='password' required />
                    </div>
                    <div className='from-submit'>
                        <a href="/jeux"><button type="submit" className="btn btn-primary" onClick={handleClick}>Valider</button></a>
                       
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
        </div>
        <Footer />
    </>
        
    );
};

export default Login;