import {Typewriter } from 'react-simple-typewriter';
import Section2 from './Section2';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Section3 from './Section3';
import Services from './Services';
import Reviews from './Reviews';
import Generator from './Generator';
import Newsletter from './Newsletter';
import Contacts from './Contacts';
import Partners from './Partners';
import OurTeam from './OurTeam';
import UpcomingEvents from './UpcomingEvents';


const Home = () => {

    useEffect(() => {
        Aos.init();
    }, []);


    return (
    <div id='HeroSection' className=''>
        <div data-aos="fade-up"  className='flex gap-4 '>

            {/* Icon div */}
            <div className='border-[.3vw] border-l-0 border-[#f79f47] p-5 lg:py-16 w-[40%] h-[85vh] rounded-r-3xl flex flex-col justify-center'>
                <img className='rotation-animation lg:w-[650px] lg:h-[650px] p-5 object-cover object-top' src="https://i.ibb.co/9Y13m7K/hero-banner-icon.png" alt="" />
                <div>
                    <p className='font-josefin-sans text-orange-400 text-xl text-center pb-4'>
                        Its a <b className='text-orange-900'>BREEEEZE</b> with us with the help of best designers and planners in the industry to make your important event a lifetime experience
                    </p>
                </div>
            </div>



            {/* Events div */}
            <div className='border-[.3vw] border-[#f79f47] h-[82vh] w-[65%] rounded-3xl p-4'>
                
                {/* Row one */}
                <div className="flex gap-3">
                    {/* Event type Seminar */}
                    <div id="event1Container" className='relative rounded-2xl w-[45%] h-[38vh] group overflow-hidden'>
                        <img className='h-full w-full rounded-2xl object-cover object-right transition-transform duration-500 ease-in-out group-hover:scale-110' src="https://i.ibb.co/bWHRfhc/1000-F-670307649-4br-Foy-XTCw9-Uc-P3o-NDJRjbqu48-XTHe4-L.jpg" alt="" />
                        <div id="boxSeminar" className='w-[23.5vw] h-[35vh] border-2 border-white transition-opacity duration-500 ease-in-out opacity-40 group-hover:opacity-100 rounded-2xl border-r-4 border-t-4 absolute bottom-[1.5vh] left-[1.2vw] group-hover:flex '></div>
                        <div id="labelSeminar" className='text-orange-500 border-t-[5px] border-orange-400 w-[500px] bg-white text-2xl absolute bottom-[5vh] left-2 transition-all duration-300 ease-in-out group-hover:left-20'>
                            <button className='font-josefin-sans relative left-2 transition-all duration-300 ease-in-out group-hover:left-10'>SEMINARS</button>
                        </div>
                    </div>

                   {/* Event type Party */}
                   <div id="event1Container" className='relative rounded-2xl w-[55%] h-[38vh] group overflow-hidden'>
                        <iframe 
                            className=' h-full w-full transition-transform duration-500 ease-in-out group-hover:scale-110' 
                            src="https://www.youtube.com/embed/n_cdSzb2z58 ?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=n_cdSzb2z58" 
                            frameBorder="0" 
                            allow="autoplay; encrypted-media" 
                            allowFullScreen
                            title="YouTube Video"
                        ></iframe>
                        <div id="boxSeminar" className='w-[29vw] h-[35vh] border-2 border-white transition-opacity duration-500 ease-in-out opacity-40 group-hover:opacity-100 rounded-2xl border-r-4 border-t-4 absolute bottom-[15px] left-[1.2vw] group-hover:flex '></div>
                        <div id="labelSeminar" className='text-orange-500 border-b-[5px] border-orange-400 w-[680px] h-10 bg-white absolute bottom-[5vh] left-2 transition-all duration-300 ease-in-out group-hover:left-20'>
                            <button className='font-josefin-sans text-4xl relative left-2 transition-all duration-300 ease-in-out group-hover:left-10'>Parties & Concerts</button>
                        </div>
                    </div>

                </div>


                {/* Row two  */}
                <div className="flex gap-3">
                    {/* Event type Wedding */}
                    <div id="event2Container" className='mt-3 relative rounded-2xl  w-[55%] h-[38vh] group overflow-hidden'>
                        <img className='w-full h-full rounded-2xl object-cover object-right transition-transform duration-500 ease-in-out group-hover:scale-110' src="https://i.ibb.co/XFG11WC/wedding.jpg" alt="" />
                        <div id="boxSeminar" className='w-[29vw] h-[35vh] border-2 border-white transition-opacity duration-500 ease-in-out opacity-40 group-hover:opacity-100 rounded-2xl border-l-4 border-t-4 absolute bottom-[15px] left-[1.2vw] group-hover:flex '></div>
                        <div id="labelSeminar" className='text-orange-500 h-10 border-b-[5px] border-orange-400 w-[600px] bg-white  text-2xl absolute bottom-10 left-2 transition-all duration-300 ease-in-out group-hover:left-20'>
                            <button className='qwitcher-grypen-bold text-[90px] relative bottom-1 left-2 transition-all duration-300 ease-in-out group-hover:left-10'>Weddings</button>
                        </div>
                    </div>

                    {/* Event type Birthday */}
                    <div id="event2Container" className='mt-3 relative rounded-2xl w-[45%] h-[38vh] group overflow-hidden'>
                        <img className='w-full h-full rounded-2xl object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110' src="https://i.ibb.co/2jjnRpV/brthdays.jpg" alt="" />
                        <div id="boxSeminar" className='w-[23.2vw] h-[35vh] border-2 border-white transition-opacity duration-500 ease-in-out opacity-40 group-hover:opacity-100 rounded-2xl border-l-4 border-t-4 absolute bottom-[15px] left-[1.2vw] group-hover:flex '></div>
                        <div id="labelSeminar" className='text-orange-500 h-10 border-t-[5px] border-orange-400 w-[600px] bg-white  text-2xl absolute bottom-10 left-2 transition-all duration-300 ease-in-out group-hover:left-20'>
                            <button className='lobster-regular text-4xl relative bottom-1 left-2 transition-all duration-300 ease-in-out group-hover:left-10'>Birthdays</button>
                        </div>
                    </div>
                </div>

                
            </div>

            
        </div>


        <Section2/>
        <Section3/>
        <UpcomingEvents/>
        <Services/>
         <Reviews/>
        <Generator/>
        <Newsletter/>
        <OurTeam/>
        <Contacts/>
        <Partners/>
    </div>
    );
};


export default Home;


