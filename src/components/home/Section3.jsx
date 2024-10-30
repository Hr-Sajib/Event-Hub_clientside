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
                <div  data-aos="zoom-in" className="bg-orange-900 p-[3vh] rounded-2xl w-[25vw] h-[21vh] flex gap-3">
                    <div className=" rounded-full h-[15vh] w-[15vh] flex items-center justify-center bg-white">
                        <img className="h-[60px]" src="https://i.ibb.co/NF2gp9R/calendar-17382867.png" alt="" />
                    </div>
                    <div ref={totalEventssRef}>
                        <div className="flex justify-between">
                            <p className="text-white text-[4vw]">
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
                        <p className="text-white text-[2vh]">Events Completed</p>
                    </div>
                </div>
                {/* awards  */}
                <div ref={awardssRef} data-aos="zoom-in" className="bg-orange-900 p-[3vh] rounded-2xl w-[300px] h-[21vh]">
                    <div className="flex justify-between">
                        <p className="text-cyan-100 text-[9vh] h-[10vh]">
                                    {
                                        awardsInView &&
                                        <CountUp 
                                            end={11} 
                                            duration={1} 
                                        
                                    />
                                    }
                        </p>
                        <img className="h-16 relative bottom-[1vh] left-[1.2vh] border-[6px] border-yellow-100 rounded-full" src="https://i.ibb.co/27wpqYc/trophy-17061037.png" alt="" />
                    </div>
                    
                    <p className="text-white text-[3vh]">Awards Won</p>
                </div>
            </div>


            {/* row two  */}
            <div className="flex gap-2 mt-2">
                 {/* Experience  */}
                 <div ref={yearssRef} data-aos="zoom-in" className="bg-orange-900 p-[2vh] rounded-2xl w-[16vw] h-[20vh] flex justify-center items-center gap-3">
                    <p className="text-green-200 text-[10vh] w-[100px]">
                    {
                                    yearsInView &&
                                    <CountUp 
                                        end={12} 
                                        duration={1} 
                                       
                                />
                                }
                    </p>
                    <p className="text-orange-100 text-[2.5vh]">Years Of Experience</p>
                </div>


                {/* Countries  */}
                <div data-aos="zoom-in" className="bg-orange-900 p-[2vh] justify-center items-center rounded-2xl  flex gap-3">
                    <div className=" rounded-full h-[110px] w-[110px] flex items-center justify-center bg-white">
                        <img className="h-[60px]" src="https://i.ibb.co/hDtht4X/globe-16267960.png" alt="" />
                    </div>
                    <div>
                        <div ref={countriessRef}  className="flex justify-between">
                            <p className="text-yellow-200 text-[7vh] h-[8vh]">
                            {
                                    countriesInView &&
                                    <CountUp 
                                        end={7} 
                                        duration={1} 
                                       
                                />
                                }
                            </p>
                        </div>
                        <p className="text-white text-[3vh]">Countries</p>
                    </div>
                </div>

                {/* Ongoing  */}
                <div ref={yearssRef} data-aos="zoom-in" className="bg-orange-900 px-3 rounded-2xl w-[17vw] flex justify-center items-center gap-[2vw]">
                    <p className="text-[#fda4af] playball-regular text-[8vh]">
                    {
                                    yearsInView &&
                                    <CountUp 
                                        end={24} 
                                        duration={1} 
                                       
                                />
                                }
                    </p>
                    <p className="playball-regular text-white text-[3vh]">Ongoing<br/>Events</p>
                </div>
                
            </div>
            
        </div>
      </div>
      <div className="">
        <div className="bg-orange-100 font-josefin-sans pt-3">
            <Slider {...sliderSettings} className=" border-black  w-[90vw]">
                                    
                <div><p className="text-[3.5vw] mb-0 text-orange-700">PLANNING</p></div>
                <div><p className="text-[3.5vw] mb-0 text-orange-700">DESIGNING</p></div>
                <div><p className="text-[3.5vw] mb-0 text-orange-700">DECORATION</p></div>
                <div><p className="text-[3.5vw] mb-0 text-orange-700">FOODS</p></div>
                <div><p className="text-[3.5vw] mb-0 text-orange-700">LOGISTICS</p></div>
                <div><p className="text-[3.5vw] mb-0 text-orange-700">MEDIA</p></div>
                <div><p className="text-[3.5vw] mb-0 text-orange-700">SECURITY</p></div>
                                                    
            </Slider>
        </div>
        <div data-aos="fade-right" className="flex justify-end relative bottom-[10.5vh] mr-5 text-orange-700">
            <p className="text-7xl">⬲</p>
        </div>
      </div>
    </>
    );
};

export default Section3;
