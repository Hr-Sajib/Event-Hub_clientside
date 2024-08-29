import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


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

      const { ref: totalEventssRef, inView: totalEventsInView } = useInView();
      const { ref: awardssRef, inView: awardsInView } = useInView();
      const { ref: yearssRef, inView: yearsInView } = useInView();
      const { ref: countriessRef, inView: countriesInView } = useInView();


    return (
    <>
      <div className="flex gap-4 max-w-[1600px] mx-auto">
        <img data-aos="fade-right" className="w-[40%] rounded-3xl" src="https://i.ibb.co/KNfrjr5/12643939-5013256.jpg" alt="" />
        {/* cards div  */}
        <div className="font-josefin-sans">
           
            {/* row one  */}
            <div className="flex gap-2">
                {/* projects  */}
                <div  data-aos="zoom-in" className="bg-orange-900 p-10 rounded-2xl w-[500px] flex gap-3">
                    <div className=" rounded-full h-[110px] w-[110px] flex items-center justify-center bg-white">
                        <img className="h-[60px]" src="https://i.ibb.co/NF2gp9R/calendar-17382867.png" alt="" />
                    </div>
                    <div ref={totalEventssRef}>
                        <div className="flex justify-between">
                            <p className="text-white text-7xl">
                                {
                                    totalEventsInView &&
                                    <CountUp 
                                        end={427} 
                                        duration={2} 
                                        
                                />
                                }
                            </p>
                            <p className="text-6xl text-white -rotate-45 relative bottom-5 left-8">→</p>
                        </div>
                        <p className="text-white text-4xl">Events Completed</p>
                    </div>
                </div>
                {/* awards  */}
                <div ref={awardssRef} data-aos="zoom-in" className="bg-orange-900 p-10 rounded-2xl w-[300px]">
                    <div className="flex justify-between">
                        <p className="text-cyan-100 text-7xl">
                                    {
                                        awardsInView &&
                                        <CountUp 
                                            end={11} 
                                            duration={1} 
                                        
                                    />
                                    }
                        </p>
                        <img className="h-16 relative bottom-8 border-[6px] border-yellow-100 rounded-full left-8" src="https://i.ibb.co/27wpqYc/trophy-17061037.png" alt="" />
                    </div>
                    
                    <p className="text-white text-4xl">Awards Won</p>
                </div>
            </div>


            {/* row two  */}
            <div className="flex gap-2 mt-2">
                 {/* Experience  */}
                 <div ref={yearssRef} data-aos="zoom-in" className="bg-orange-900 px-3 pt-3 rounded-2xl w-[300px] flex justify-center items-center gap-3">
                    <p className="text-green-200 text-[100px] w-[100px]">
                    {
                                    yearsInView &&
                                    <CountUp 
                                        end={12} 
                                        duration={1} 
                                       
                                />
                                }
                    </p>
                    <p className="text-orange-100 text-4xl">Years Of Experience</p>
                </div>
                {/* Countries  */}
                <div data-aos="zoom-in" className="bg-orange-900 p-2 pl-3 justify-center items-center rounded-2xl  flex gap-3">
                    <div className=" rounded-full h-[110px] w-[110px] flex items-center justify-center bg-white">
                        <img className="h-[60px]" src="https://i.ibb.co/hDtht4X/globe-16267960.png" alt="" />
                    </div>
                    <div>
                        <div ref={countriessRef}  className="flex justify-between">
                            <p className="text-yellow-200 text-7xl ">
                            {
                                    countriesInView &&
                                    <CountUp 
                                        end={7} 
                                        duration={1} 
                                       
                                />
                                }
                            </p>
                        </div>
                        <p className="text-white text-4xl">Countries</p>
                    </div>
                </div>

                {/* Experience  */}
                <div ref={yearssRef} data-aos="zoom-in" className="bg-orange-900 px-3 pt-3 rounded-2xl w-[32s0px] flex justify-center items-center gap-10">
                    <p className="text-[#fda4af] playball-regular text-[100px] w-[100px]">
                    {
                                    yearsInView &&
                                    <CountUp 
                                        end={24} 
                                        duration={1} 
                                       
                                />
                                }
                    </p>
                    <p className="playball-regular text-white text-5xl relative bottom-2">Ongoing<br/>Events</p>
                </div>
                
            </div>
            
        </div>
      </div>
      <div className="">
        <div className="bg-orange-100 font-josefin-sans pt-3">
            <Slider {...sliderSettings} className=" border-black  w-[1800px]">
                                    
                <div><p className="text-7xl mb-0 text-orange-700">PLANNING</p></div>
                <div><p className="text-7xl mb-0 text-orange-700">DESIGNING</p></div>
                <div><p className="text-7xl mb-0 text-orange-700">DECORATION</p></div>
                <div><p className="text-7xl mb-0 text-orange-700">FOODS</p></div>
                <div><p className="text-7xl mb-0 text-orange-700">LOGISTICS</p></div>
                <div><p className="text-7xl mb-0 text-orange-700">MEDIA</p></div>
                <div><p className="text-7xl mb-0 text-orange-700">SECURITY</p></div>
                                                    
            </Slider>
        </div>
        <div data-aos="fade-right" className="flex justify-end relative bottom-[87px] mr-5 text-orange-700">
            <p className="text-7xl">⬲</p>
        </div>
      </div>
    </>
    );
};

export default Section3;
