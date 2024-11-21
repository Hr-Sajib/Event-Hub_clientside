import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import Aos from "aos";
import 'aos/dist/aos.css';
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { MdOutlinePublic } from "react-icons/md";
import { FaLock } from "react-icons/fa";



const UpcomingEvents = () => {

    const [events, setEvent] = useState([]);
    const [focus, setFocus] = useState(null);

    useEffect(()=>{
        axios.get('http://localhost:5500/getUpcommingEvents')
        .then(r=>{
            setEvent(r.data);
            
        })
    },[])

    useEffect(() => {
        const interval = setInterval(() => {
            setFocus((prevFocus) => (prevFocus + 1) % 6); // Cycle from 0 to 5
        }, 2000);

        return () => clearInterval(interval); // Clean up the interval on unmount
    }, []);

    // console.log(events);





    return (
        <div className='mt-[10vw] mb-[5vw] mx-[3vw]'>
            <div className="text-center mb-5 font-josefin-sans">
                <p data-aos="fade-up" className="text-5xl"><span className='text-orange-700 opacity-65'>U p c o m i n g</span> Events</p>
            </div>

            {/* cards  */}
            <div className='flex justify-center gap-1'>
                {
                    events.map((e,index) =>
                        <div key={e.name} className={`relative h-[80vh] ${index == focus ? ' w-[40vw]' : ' w-[10vw]'} font-josefin-sans transition-width duration-500 ease-in-out`}>
                            <div className={`absolute bg-black bg-opacity-55 h-full w-full ${index == focus ? 'hidden' : 'flex'}`}></div>
                            <img src={e.image} className={`h-full w-full  object-cover`} alt="Image Loading" />
                            <div  className={`absolute inset-0 bg-black ${index == focus ? 'bg-opacity-55' : 'bg-opacity-0'}   p-3 mt-[25vw] border-t-[4px] transition-width duration-500 ease-in-out`}>
                                <p className={`h-[10vh] text-orange-200 ${index == focus ? ' w-[30vw] text-[2.2vw]' : 'hidden'}`}>{e.name}</p>
                                <div className='flex items-center gap-2'>
                                    <FaLocationDot className={`text-white relative bottom-[2px] ${index == focus ? 'flex' : 'hidden '}`}/>
                                    <p className={`text-gray-200 text-[1vw] ${index == focus ? 'flex' : 'hidden'}`}>{e.location}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <MdOutlineAccessTimeFilled className={`text-white relative bottom-[2px] ${index == focus ? 'flex' : 'hidden '}`}/>
                                    <p className={`text-gray-200 text-[1vw] ${index == focus ? 'flex' : 'hidden'}`}>{e.date}</p>
                                </div>

                                <div className={`mt-5 ml-2 ${index == focus ? 'flex' : 'hidden'}`}>
                                    <p className='text-black bg-white rounded-sm px-1'>{e.category}</p>
                                    <p className='text-black bg-white rounded-l-sm ml-1 px-1'>Organized By</p>
                                    <p className='text-white border bg-black rounded-r-sm px-1'>{e.organizer}</p>
                                </div>
                                <div className={`mt-5 ml-2 w-[7vw] bg-orange-200 rounded-sm ${index == focus ? 'flex items-center justify-center' : 'hidden'}`}>
                                    <FaLock className={`text-black ${e.access == 'Private' ? "flex": "hidden" } `} />
                                    <MdOutlinePublic className={`text-black pl-[2px] ${e.access == 'Public' ? "flex text-[1vw]": "hidden" } `} />
                                    <p className='relative top-1 text-black bg-orange-200 rounded-xl text-[.8vw] px-1'>{e.access} Event</p>
                                </div>

                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default UpcomingEvents;