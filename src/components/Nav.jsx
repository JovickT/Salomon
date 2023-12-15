// import { UserContext } from "../context/UserProvider";
// import { useContext } from 'react';
// import '../assets/css/home.css'
const Nav = () => {
    // const { user, userState } = useContext(UserContext);
    // const fullName = user.firstname || user.lastname ? `${user.firstname} ${user.lastname}` : '';
    return(
        <nav className='site-nav'>
            <div className='primary-nav'> 
<<<<<<< HEAD
                <a href='/'> Home </a>
                <a href='/experience'> Experience </a>
                <a href='/login'> Login </a>
                {/* <p> {user.firstname != ""? fullName : ""}</p> <i class="fa fa-user" aria-hidden="true"></i> */}
=======
                <a href='/'>home</a>
                <a href='/experience'>experience</a>
                <a href='/login'>login</a>
>>>>>>> 18bfd0588900418e6bfcbf94ccdb40a2db2c230a
               
                {/* <a href='education.html'>education</a>
                 <a href='skills.html'>skills</a>
                <a href='portfolio.html'>portfolio</a>
                <a href='contact.html'>contact</a>
                <a href='blog.html'>blog</a>
                <a href='register.html'>register</a> */}
            </div>
	    </nav>
    );
} 

export default Nav;