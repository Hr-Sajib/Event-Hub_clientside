import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css';

const Navbar = () => {
    const [dropDown, setDropDown] = useState(false);
    const [animateExit, setAnimateExit] = useState(false); // New state for exit animation
    const location = useLocation().pathname;
    const navigate = useNavigate();

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
                    <Link to="/">
                        <div className='flex items-center justify-center bg-white rounded-md px-2 h-12 w-[12vw] ml-[5%]'>
                            <img className='h-9  border-black rounded-full' src="https://i.ibb.co/PYXtZ0r/1724775441626.png" alt="" />
                            <p className='font-josefin-sans text-[1.5vw] pt-2'>Events Hub</p>
                        </div>
                    </Link>
                </div>

                {/* Computer Navlinks Div */}
                <div className='lg:flex items-center hidden  justify-center bg-orange-900 h-10 rounded-full px-16 text-lg '>
                    <ul className='flex gap-16 '>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-white underline-animation' : "text-white underline-animation"} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-white underline-animation' : "text-white underline-animation"} to="/book">Book an Event</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-white underline-animation' : "text-white underline-animation"} to="/skills">Our Services</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-white underline-animation' : "text-white underline-animation"} to="/projects">Projects</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-white underline-animation' : "text-white underline-animation"} to="/blogs">Blogs</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-white underline-animation' : "text-white underline-animation"} to="/contacts">Contacts</NavLink></li>
                    </ul>
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
