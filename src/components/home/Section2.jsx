import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Section2 = () => {
    useEffect(() => {
        Aos.init();
    }, []);


    return (
        <div data-aos="fade-left" className="my-56 bg-orange-100 flex py-10 items-center">
            <img  className="w-[330px] border-4 border-blue-300 z-10 relative left-16 rounded-3xl" src="https://i.ibb.co/QH9CPwX/Exhibitions.jpg" alt="" />
            <div className="bg-white p-36 h-[300px] rounded-l-[50px] flex flex-col justify-center">
                    <p className="dancing-script text-5xl text-left mb-5">Explore the exotic</p>
                    <p data-aos="zoom-in"  className="font-josefin-sans text-xl">We are delighted to have you here! Our passion is bringing your vision to life, whether it’s a wedding, birthday celebration, corporate event, or any special occasion. With our expert planning, stunning decorations, delicious food, and seamless logistics, we ensure every moment is perfect. Let us handle the details so you can enjoy your event without a worry. Your memorable experience starts here!</p>
            </div>
        </div>
    );
};

export default Section2;