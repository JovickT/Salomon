import Nav from './Nav';
// import Footer from './Footer';
import '../App.css'
// import { UserContext } from "../context/UserProvider";
import { useContext, useState, useRef } from 'react';

const Login = () =>{
    // const myUlRef = useRef(null);
    // console.log("mon storage:",localStorage.getItem('formData'));
    //const stoarage = JSON.parse(localStorage.getItem('formData'));
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const { user, setUser } = useContext(UserContext);
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
        //     console.log("user in handleClick:",user);
        // }
    }
    
    return(
        <>
            <Nav />
            <div class="formulaire">
                <form action="/login" method='GET'>
                <fieldset>
                    <legend>Login in</legend>
                    <div class="form-group form-email">
                        <label for="exampleInputEmail1" className='form-text'>Email address</label>
                        <input type="email" class="form-control input-email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} required readonly />
                        <small id="emailHelp" class="form-text text-muted form-text">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group form-password">
                        <label for="exampleInputPassword1" className='form-text'>Password</label>
                        <input type="password" class="form-control input-password" id="exampleInputPassword1" placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} required readonly />
                    </div>
                    <div className='from-submit'>
                        <button type="submit" class="btn btn-primary" onClick={handleClick}>Valider</button>
                    </div>
                    <div className='text-center sign-in'>
                        <a href="/account">Créer un compte chez nous !</a>
                    </div>
                    <ul className="mt-3" style={{ display: 'none' }}>
                        <li style={{ color: 'red' }}>Adresse email ou mot de passe incorrecte</li>
                    </ul>
                </fieldset>
                </form>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Login;