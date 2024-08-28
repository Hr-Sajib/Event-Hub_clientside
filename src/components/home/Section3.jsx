import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Section3 = () => {

    useEffect(() => {
        Aos.init();
    }, []);


    return (
    <>
            <div  className="my-36 px-36 py-16 pl-[260px] bg-gradient-to-r from-orange-100 to-orange-00 flex font-josefin-sans">
            
            <img data-aos="fade-up" className="h-[600px] object-cover object-right w-[600px] rounded-br-[100px] border-b-2 border-r-2 border-black" src="https://i.ibb.co/qDzgfJX/happy-successful-businessman-winning-fist-pump-rejoice-shouting-yes.png" alt="" />
            <div data-aos="fade-left" className="border-t-2 border-l-2 rounded-tl-[100px] pt-32 pl-2 relative bottom-[100px] right-[2px] border-black h-[600px] w-[700px]">
                <p className="text-7xl mb-0 text-orange-700">PLANNING</p>
                <p className="text-7xl mb-0 text-orange-600">DESIGNING</p>
                <p className="text-7xl mb-0 text-orange-500">DECORATION</p>
                <p className="text-7xl mb-0 text-orange-400">FOODS</p>
                <p className="text-7xl mb-0 text-orange-300">LOGISTICS</p>
                <p className="text-7xl mb-0 text-orange-200">MEDIA</p>
                
            </div>
        </div>
        <div >
            <img className="w-[400px] relative -rotate-[35deg] left-[200px] bottom-[650px] object-cover" src="https://i.ibb.co/2yjw6vG/Online-Signatures-net-830-Touch-Excellence.png" alt="" />
        </div>
    </>
    );
};

export default Section3;