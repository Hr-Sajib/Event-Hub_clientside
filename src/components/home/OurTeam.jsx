import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const OurTeam = () => {
    const [team, setTeam] = useState([]);

    useEffect(()=>{
        axios.get('/team.json')
        .then(r=>{
            setTeam(r.data)
        })
    },[])

    console.log(team);

    return (
        <div className=" mt-[250px] mx-[5vw]">
            <div className="flex justify-center gap-[2vw]">
                <p data-aos="fade-left"  className="text-center text-orange-900 text-xl letter-spacing">OUR</p>
                <p  className="text-center text-orange-900 text-xl letter-spacing">PROFESSIONAL</p>
                <p data-aos="fade-right" className="text-center text-orange-900 text-xl letter-spacing">TEAM</p>
            </div>
            <p className="text-center font-josefin-sans mt-3">Our team combines expertise, creativity, and dedication to deliver exceptional event management solutions.</p>
            
            
            <div className="grid grid-cols-3 p-2 gap-2 gap-y-10  mt-10">


                {
                    team.map(person => 
                    
                    <div className="border  relative p-2 flex justify-center items-center" key={person.name}>
                        <img className="h-[30vh]  w-[15vw] object-cover rounded-xl" src={person.image} alt="" />
                        
                        <div className=" p-3 rounded-lg absolute inset-0 h-[10vh] w-[12vw] top-[18vh] left-[13vw]">
                            <div className="h-[10vh] w-[12vw] rounded-lg bg-black border border-gray-300 bg-opacity-40 backdrop-blur-sm"></div>
                            <div className="relative bottom-[9vh] left-[1vw]">
                                <p className="text-2xl  text-orange-200 font-josefin-sans font-bold ">{person.name}</p> 
                                <p className="text-gray-200">{person.designation}</p>
                                <p className="text-gray-200">{person.experience}</p>
                            </div>
                        </div>
                    </div>
                    
                    
                    )
                }


            </div>
        </div>
    );
};

export default OurTeam;

