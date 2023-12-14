// import { UserContext } from "../context/UserProvider";
// import { useContext } from 'react';
const Nav = () => {
    // const { user, userState } = useContext(UserContext);
    // const fullName = user.firstname || user.lastname ? `${user.firstname} ${user.lastname}` : '';
    return(
        <nav className='site-nav'>
            <div className='site-logo'>
                <p className='site-logo-name'><a href='/'>John<br/>Locke</a></p>
                <p className='site-logo-slogan'>Passionate Webdesigner</p>
            </div>
            <div className='primary-nav'> 
                <a href='/'>home</a>
                <a href='/experience'>experience</a>
                <a href='/login'>login</a>
               
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