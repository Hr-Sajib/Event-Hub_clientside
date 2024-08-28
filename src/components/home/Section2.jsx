import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Section2 = () => {
    useEffect(() => {
        Aos.init();
    }, []);


    return (
        <div data-aos="fade-up" className="my-56 flex ml-36 items-center">
            <img data-aos="fade-right" className="w-[330px] z-10 relative left-16 rounded-3xl" src="https://i.ibb.co/QH9CPwX/Exhibitions.jpg" alt="" />
            <div data-aos="fade-left" className="border bg-orange-200 p-36 h-[300px] rounded-l-[50px] flex flex-col justify-center">
                    <p className="dancing-script text-5xl text-left mb-5">Explore the exotic</p>
                    <p className="font-josefin-sans text-xl">We are delighted to have you here! Our passion is bringing your vision to life, whether it’s a wedding, birthday celebration, corporate event, or any special occasion. With our expert planning, stunning decorations, delicious food, and seamless logistics, we ensure every moment is perfect. Let us handle the details so you can enjoy your event without a worry. Your memorable experience starts here!</p>
            </div>
        </div>
    );
};

export default Section2;