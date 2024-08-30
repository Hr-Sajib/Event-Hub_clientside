import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Generator = () => {
    const [plans, setPlans] = useState([]);

    useEffect(()=>{
        axios.get('/plans.json')
        .then(r=>{
            setPlans(r.data)
        })
    },[])


    return (
        <div className="font-josefin-sans mb-56">
            <div className="text-center mt-36">
                <div className="relative">
                    <p data-aos="fade-up" className="text-[80px] h-[100px]">Event Guide</p>
                    <div className="absolute inset-0 top-[85px] bg-white w-[450px] h-36 mx-auto"></div>
                </div>
                <p className="text-xl text-orange-700 relative z-10">See our Automatic guide for your event</p>
            </div>

            <div>
                
            </div>

            

    
        </div>
    );
};

export default Generator;

