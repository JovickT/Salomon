// import Footer from './Footer';
import '../assets/css/home.css'
import { UserContext } from "../context/UserProvider";
import { useContext, useEffect, useRef, useState } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';


const Login = () =>{
    const myUlRef = useRef(null);
    const navigate = useNavigate();
    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirection, setRedirection] = useState("/login");
    const { user,setUser } = useContext(UserContext);
    
    const storage = Object.keys(localStorage)
    const values = storage.map(key => JSON.parse(localStorage.getItem(key)));

    console.log("values:",values);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:3000/jeux', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(storage),
            });

            if (!response.ok) {
    
                console.log("navigation déclenché");
                values.map( key =>{
                    if(email == key.email && password == key.password){
                    
                        setUser({
                            firstname: key.firstname,
                            lastname: key.lastname,
                            email: key.email,
                            password: key.password,
                        });
                        navigate("/jeux");
                        console.log("user in handleClick:",user);
                    }else{
                        myUlRef.current.style.display = 'block';
                    }
                })
                
            } else {
                console.log("navigation non déclenché");
            }
        } catch (error) {
            console.error('Erreur lors de la requête:', error);
        }

       
    }
    
    return(
    <>
    <Nav/>
    <div className='all'>
            <div className="formulaire">
                <form onSubmit={handleSubmit}>
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
                        <a href={redirection}><button type="submit" className="btn btn-primary">Valider</button></a>
                       
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