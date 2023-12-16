// import { UserContext } from "../context/UserProvider";
import Footer from "./Footer";
import Nav from "./Nav";
// import Footer from "./Footer";
import { useRef, useState } from 'react';

const CreateAccount = () =>{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    // const { user, setUser } = useContext(UserContext);
    const [isChecked, setIsChecked] = useState(false);
    const myUlRef = useRef(null);

    const handleSubmit = (e) =>{
  
        // const formData = {
        //     firstname: firstName,
        //     lastname: lastName,
        //     email: email,
        //     password: password,
        // };

        if(password !== verifyPassword){
            e.preventDefault();
            myUlRef.current.style.display = 'block';
        }
        
        //localStorage.setItem('formData', JSON.stringify(formData));
        console.log("affichage storage:",JSON.parse(localStorage.getItem('formData')));
        console.log('Prénom:', firstName);
        console.log('Nom de famille:', lastName);
        console.log('Email:', email);
        console.log('Mot de passe:', password);
        console.log('Vérification du mot de passe:', verifyPassword);
    };

    const handleCheckboxChange = (e) =>{
        setIsChecked(e.target.checked);
        console.log("event:",isChecked);
    }

    return (

        <>
        <Nav />
        <div className="formulaire">
            <form action="/login" method='POST' onSubmit={handleSubmit}>
            <fieldset>
                <legend>Créer un compte</legend>
                <div className="form-group form-email">
                    <label htmlFor="exampleInputText" className='form-text'>Firstame</label>
                    <input type="text" className="form-control input-email" id="exampleInputText" placeholder="Jones"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} name="firstname" required />
                </div>
                <div className="form-group form-email">
                    <label htmlFor="exampleInputText1" className='form-text'>Lastname</label>
                    <input type="text" className="form-control input-email" id="exampleInputText1" placeholder="John" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} name="lastname" required />
                </div>
                <div className="form-group form-email">
                    <label htmlFor="exampleInputEmail1" className='form-text'>Email address</label>
                    <input type="email" className="form-control input-email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
                     value={email}
                     onChange={(e) => setEmail(e.target.value)} name="email" required />
                    <small id="emailHelp" className="form-text text-muted form-text">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group form-password">
                    <label htmlFor="exampleInputPassword1" className='form-text'>Password</label>
                    <input type="password" className="form-control input-password" id="exampleInputPassword1" placeholder="Password" 
                     value={password}
                     onChange={(e) => setPassword(e.target.value)} name="password" required />
                </div>
                <div className="form-group form-password">
                    <label htmlFor="exampleInputPassword2" className='form-text'>Verification password</label>
                    <input type="password" className="form-control input-password" id="exampleInputPassword2" placeholder="Verification password" 
                     value={verifyPassword}
                     onChange={(e) => setVerifyPassword(e.target.value)} name="verifyPassword" required />
                </div>
                <div className="d-inline">
                <input type="checkbox" id="Condition" name="Condition" checked={isChecked} onChange={handleCheckboxChange}/>
                <label htmlFor="condition" className="p-2 cd-use" >En créant un compte, vous acceptez les conditions d'utilisation</label>
                </div>
                <div className='from-submit'>
                    <button type="submit" disabled={!isChecked} className="btn btn-primary">Envoyer</button>
                </div>
                <div className='text-center sign-in'>
                    <a href="/login">Se connecter !</a>
                </div>
                <ul className="mt-3" ref={myUlRef} style={{ display: 'none' }}>
                        <li style={{ color: 'red'}}>Vérification de mot de passe incorrecte</li>
                    </ul>
            </fieldset>
            </form>
        </div>
         <Footer />
        </>
       
    );
};

export default CreateAccount;