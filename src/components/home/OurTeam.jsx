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


    return (
        <div className=" mt-[250px] mx-[5vw]">
            
            
            
            <div className="bg-orange-950 h-[15vh]">
                <div className="bg-white h-[18vh] w-[18vh]  relative rounded-full left-[5vw] top-[3vw] text-9xl text-black flex justify-center items-center rotate-45">→</div>
                
                <div className="relative bottom-[6.5vh]">
                    <div className="flex justify-center gap-[2vw] ">
                        <p data-aos="fade-left"  className="text-center text-orange-200 text-xl letter-spacing">OUR</p>
                        <p  className="text-center text-orange-200 text-xl letter-spacing">PROFESSIONAL</p>
                        <p data-aos="fade-right" className="text-center text-orange-200 text-xl letter-spacing">TEAM</p>
                    </div>
                    <p className="text-center font-josefin-sans mt-3">Our team combines expertise, creativity, and dedication to deliver exceptional event management solutions.</p>
                </div>
            </div>
            
            
            <div className="flex h-[60vh] bg-gradient-to-r from-orange-100 to-gray-100 ">
                {/* text  */}
                <div data-aos="fade-down" className="pt-[10vh] pl-[5vh]">
                    <p className="font-oswald text-9xl">Unite<br/>For<br/>Excellence</p>
                </div>

                {/* persons  */}
                <div className="grid grid-cols-2 gap-2 gap-y-10 p-2 h-[40vh] mt-[8vh] ml-[15vh]">

                {
                    team.map(person => 
                    
                    <div className="border bg-black rounded-xl w-[50vh] h-[19vh] relative p-2 flex justify-center items-center " key={person.name}>
                        
                        <img data-aos="zoom-in" className="h-[22vh] w-[18vh] pl-2 rounded-xl object-cover object-right" src={person.image} alt="" />
                        <div className="font-oswald pl-5">
                            <p className="text-white text-3xl">{person.name}</p>
                            <p className="text-orange-300 text-xl">{person.designation}</p>
                            <p className="text-gray-200 ">{person.experience}</p>
                            <p className="text-gray-200 ">{person.academicExcellence}</p>
                        </div>
                        
                    </div>
                    
                    
                    )
                }
                </div>

            </div>
            
        </div>
    );
};

export default OurTeam;

{/* <div className="font-oswald ">
                            <p className="text-white text-3xl">{person.name}</p>
                            <p className="text-white">{person.designation}</p>
                            <p className="text-white">{person.experience}</p>
                            <p className="text-white">{person.academicExcellence}</p>
                        </div> */}

                        