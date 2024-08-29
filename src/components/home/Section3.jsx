import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section3 = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    const sliderSettings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        autoplay: true,
        speed: 600,
        autoplaySpeed: 2000,
        arrows: false,

      };


    return (
    <>
      <div className="flex gap-4 max-w-[1500px] mx-auto">
        <img data-aos="fade-right" className="w-[40%] rounded-3xl" src="https://i.ibb.co/KNfrjr5/12643939-5013256.jpg" alt="" />
        {/* cards div  */}
        <div className="font-josefin-sans">
           
            {/* row one  */}
            <div className="flex gap-2">
                {/* projects  */}
                <div data-aos="zoom-in" className="bg-orange-900 p-10 rounded-2xl w-[500px] flex gap-3">
                    <div className=" rounded-full h-[110px] w-[110px] flex items-center justify-center bg-white">
                        <img className="h-[60px]" src="https://i.ibb.co/NF2gp9R/calendar-17382867.png" alt="" />
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <p className="text-white text-7xl">298</p>
                            <p className="text-6xl text-white -rotate-45 relative bottom-5 left-8">→</p>
                        </div>
                        <p className="text-white text-4xl">Events Completed</p>
                    </div>
                </div>
                {/* awards  */}
                <div data-aos="zoom-in" className="bg-orange-900 p-10 rounded-2xl w-[300px]">
                    <p className="text-cyan-100 text-7xl">11</p>
                    <p className="text-white text-4xl">Awards Won</p>
                </div>
            </div>


            {/* row two  */}
            <div className="flex gap-2 mt-2">
                 {/* Experience  */}
                 <div data-aos="zoom-in" className="bg-orange-900 px-3 pt-3 rounded-2xl w-[300px] flex justify-center items-center gap-3">
                    <p className="text-white text-[100px]">12</p>
                    <p className="text-orange-100 text-4xl">Years Of Experience</p>
                </div>
                {/* Countries  */}
                <div data-aos="zoom-in" className="bg-orange-900 p-2 pl-3 justify-center items-center rounded-2xl  flex gap-3">
                    <div className=" rounded-full h-[110px] w-[110px] flex items-center justify-center bg-white">
                        <img className="h-[60px]" src="https://i.ibb.co/hDtht4X/globe-16267960.png" alt="" />
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <p className="text-yellow-200 text-7xl ">7</p>
                            {/* <p className="text-6xl text-white -rotate-45 relative bottom-5 left-8">→</p> */}
                        </div>
                        <p className="text-white text-4xl">Countries</p>
                    </div>
                </div>
               
            </div>


        </div>
      </div>
      <div className="bg-orange-100 mb-36 font-josefin-sans pt-3">
        <Slider {...sliderSettings} className=" border-black">
                                
            <div><p className="text-7xl mb-0 text-orange-700">PLANNING</p></div>
            <div><p className="text-7xl mb-0 text-orange-700">DESIGNING</p></div>
            <div><p className="text-7xl mb-0 text-orange-700">DECORATION</p></div>
            <div><p className="text-7xl mb-0 text-orange-700">FOODS</p></div>
            <div><p className="text-7xl mb-0 text-orange-700">LOGISTICS</p></div>
            <div><p className="text-7xl mb-0 text-orange-700">MEDIA</p></div>
                                                
        </Slider>
      </div>
    </>
    );
};

export default Section3;

{/* <div data-aos="fade-left" className="border-t-2 border-l-2 rounded-tl-[100px] pt-32 pl-2 relative bottom-[100px] right-[2px] border-black h-[600px] w-[700px]">
                <p className="text-7xl mb-0 text-orange-700">PLANNING</p>
                <p className="text-7xl mb-0 text-orange-600">DESIGNING</p>
                <p className="text-7xl mb-0 text-orange-500">DECORATION</p>
                <p className="text-7xl mb-0 text-orange-400">FOODS</p>
                <p className="text-7xl mb-0 text-orange-300">LOGISTICS</p>
                <p className="text-7xl mb-0 text-orange-200">MEDIA</p>
                <img data-aos="zoom-in"  className="h-[350px] relative left-[500px] bottom-[100px]" src="https://i.ibb.co/mR6PFGG/spiral.png" alt="" />
                
            </div> */}