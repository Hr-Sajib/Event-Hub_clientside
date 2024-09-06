import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Section2 = () => {
    useEffect(() => {
        Aos.init();
    }, []);


    return (
        <div className="h-[30vh]">
           
        </div>
    );
};

export default Section2;