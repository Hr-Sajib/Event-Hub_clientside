import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    const [dropDown, setDropDown] = useState(false);
    const [animateExit, setAnimateExit] = useState(false); 
    const location = useLocation().pathname;
    const navigate = useNavigate();
    const { user, logOut , setShowProfile, showProfile} = useContext(AuthContext);
    const profileIconRef = useRef();

    const [userImage, setUserImage] = useState('https://i.postimg.cc/B67jKZxT/user-9303328.png');

    useEffect(()=>{
        if (user && user.photoURL) {
            setUserImage(user.photoURL);
            console.log(user.photoURL)
        }
        else{
            setUserImage('https://i.postimg.cc/B67jKZxT/user-9303328.png');
        }
    },[user])

    const handleLogOut = () => {
        // logOut function implementation
    };

    useEffect(() => {
        Aos.init();
    }, []);

    const toggleDropdown = () => {
        if (dropDown) {
            // Start exit animation
            setAnimateExit(true);
            setTimeout(() => {
                setDropDown(false);
                setAnimateExit(false);
            }, 200); // Match this to the exit animation duration
        } else {
            setDropDown(true);
        }
    }


    const handleContactsClick = (e) => {
        e.preventDefault();
        if (location.pathname === '/') {
            // If already on home page, scroll to contacts section
            document.getElementById('contactsSection').scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            // Navigate to home first, then scroll to contacts section
            navigate('/');
            setTimeout(() => {
                document.getElementById('contactsSection').scrollIntoView({
                    behavior: 'smooth'
                });
            }, 500); // Adjust delay to match route transition time
        }
    };

    const handleHomeClicked = (e) => {
        e.preventDefault();
    
        // Always scroll to the top if already on the homepage
        if (location === '/') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // If not on the homepage, navigate to it
            navigate('/');
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
        }
    };
    


    return (
        <div id='navbar' className=' bg-[#d5781c] bg-opacity-60 h-[8vh] fixed top-0 left-0 z-10 w-full backdrop-blur-md flex'>
            <div className='lg:border-0 w-full border flex justify-between items-center px-4 lg:px-10 font-ob lg:mr-2'>
                {/* Icon Div */}
                <div className='flex items-center gap-2'>
                    {/* Mobile Options Icon */}
                    <div className='lg:hidden cursor-pointer' onClick={toggleDropdown}>
                        <div className="ml-5 mr-2 transition-transform duration-500">
                            <img
                                src="/public/bar.png"
                                className={`w-7 mb-3 mr-3 transition-transform duration-500 ${dropDown ? '-rotate-45 translate-y-1.5' : 'rotate-0 translate-y-0'}`}
                                alt="Bar icon 1"
                            />
                            <img
                                src="/public/bar.png"
                                className={`w-7 mr-3 transition-transform duration-500 ${dropDown ? 'rotate-45 -translate-y-2' : 'rotate-0 translate-y-0'}`}
                                alt="Bar icon 2"
                            />
                        </div>
                    </div>
                    
                    {/* Computer Icon  */}
                    <div  onClick={handleHomeClicked} className='flex items-center justify-center bg-white rounded-xl px-2 h-11 w-[12vw] ml-[5%]'>
                        <img className='h-9  border-black rounded-full' src="https://i.ibb.co/PYXtZ0r/1724775441626.png" alt="" />
                        <p className='font-josefin-sans text-[1.5vw] pt-2'>Events Hub</p>
                    </div>
                </div>

                {/* Computer Navlinks Div */}
                <div className='lg:flex items-center hidden  justify-center bg-orange-900 h-10 rounded-full pl-16 pr-2 text-lg '>
                    <ul className='flex gap-16 '>
                        <li onClick={handleHomeClicked}><NavLink className={({ isActive }) => isActive ? 'text-white underline-animation' : "text-orange-200 underline-animation"} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-white underline-animation' : "text-orange-200 underline-animation"} to="/book">Book an Event</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-white underline-animation' : "text-orange-200 underline-animation"} to="/services">Our Services</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-white underline-animation' : "text-orange-200 underline-animation"} to="/projects">Projects</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-white underline-animation' : "text-orange-200 underline-animation"} to="/blogs">Blogs</NavLink></li>
                        <li onClick={handleContactsClick}><NavLink className={({ isActive }) => isActive ? 'text-white underline-animation' : "text-orange-200 underline-animation"} to="/contacts">Contacts</NavLink></li>
                    </ul>
                    

                    <div data-aos="zoom-in" className=' w-[13.5vh]'>
                    {
                        // user signed in 
                        user ?
                        <div className='flex justify-center items-center'>
                            <button ref={profileIconRef} onClick={()=>setShowProfile(!showProfile)}><img className='h-[5vh] w-[5vh] ml-[6vh] border-[5px] border-orange-900 rounded-full' src={userImage} alt="" /></button>
                        </div> 
                        :
                        // user not signed in 
                        <div >
                            <Link to="/login"><button className='text-orange-800 px-2 w-[4vw] bg-white rounded-full ml-[6vh] '>Log In</button></Link>
                        </div>
                    }
                    </div>

                </div>


            

            </div>
            {
                dropDown && (
                    <div 
                        data-aos="fade-right" 
                        className={`bg-black text-white z-30 w-[130px] ml-3 rounded-xl fixed py-5 transition-all duration-500 ${animateExit ? 'opacity-0 translate-x-10' : 'opacity-100'}`}
                    >
                        <ul className='flex flex-col gap-5 pl-2'>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-white underline-animation' : "text-orange-100 underline-animation"} to="/">Home</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-white underline-animation' : "text-orange-100 underline-animation"} to="/book">Book an Event</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-white underline-animation' : "text-orange-100 underline-animation"} to="/skills">Our Services</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-white underline-animation' : "text-orange-100 underline-animation"} to="/projects">Projects</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-white underline-animation' : "text-orange-100 underline-animation"} to="/blogs">Blogs</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-white underline-animation' : "text-orange-100 underline-animation"} to="/contacts">Contacts</NavLink></li>
                        </ul>
                    </div>
                )
            }
        </div>
    );
};

export default Navbar;
