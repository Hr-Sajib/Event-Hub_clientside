import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/bundle';
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation'
import { useEffect } from 'react';
import { useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';


const Services = () => {

    const [slideNumber, setSlideNumber]=useState(0);
    const imagesArray = ['https://i.ibb.co/Kjmn4Gv/146152.jpg','https://i.postimg.cc/rmZRwj6Z/inspiration-ideas-design-creative-thinking-word.jpg','https://i.postimg.cc/9fJrLbfX/rustic-decorated-indoors-wedding-venue-637285-5663.jpg','https://i.postimg.cc/3rPCj86S/FOODS.avif','https://i.postimg.cc/zXZKbdb4/LOGISTICS.avif','https://i.postimg.cc/SR0dKmbv/portrait-fitness-influencer-23-2151564832-1.png' ]

    const handleSlideChange = (swiper) => {
        console.log('Current Slide Index:', swiper.activeIndex);
        setSlideNumber(swiper.activeIndex)
    };

    return (
        <div className="max-w-[1800px] mx-auto font-josefin-sans lg:mt-36">
           
            {/* image div  */}
            <div data-aos="fade-right">
                <img className="w-[1200px] h-[700px] object-right object-cover rounded-3xl border-b-[10px] border-orange-300" src={imagesArray[slideNumber]} alt="" />
            </div>
            
            {/* text box div  */}
            <div data-aos="fade-left" className="relative bottom-[650px] left-10 w-[1100px] ml-[600px] ">

                <Swiper
                    modules={[Navigation, Autoplay]}
                    onSlideChange={handleSlideChange}
                    slidesPerView={1}
                    navigation={true}
                    autoplay={{
                        delay: 3000, 
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide>
                        <div className="h-[600px] w-[1000px] border-l-[5px] border-t-[8px]  border-orange-400  bg-orange-950 rounded-3xl bg-opacity-60 backdrop-blur-sm  ml-12">
                        <p className="text-white text-[100px]">PLANNING</p>
                        <p className="text-white text-2xl p-5">Transforming ideas into reality requires meticulous planning. From conceptualizing the event’s flow to managing budgets and schedules, our team crafts a detailed roadmap that aligns with your vision. We coordinate with vendors, create timelines, and anticipate potential challenges to ensure everything unfolds seamlessly. With a keen eye for detail and a proactive approach, we turn complex logistics into smooth operations, letting you focus on enjoying your special occasion.</p>
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[600px] w-[1000px] border-l-[5px] border-t-[8px]  border-orange-400  bg-orange-950 rounded-3xl bg-opacity-60 backdrop-blur-sm  ml-12">
                        <p className="text-white text-[100px]">DESIGNING</p>
                        <p className="text-white text-2xl p-5">Imagine a space that perfectly reflects your style and vision. Our design services turn this vision into an extraordinary experience. By blending creative concepts with practical design, we create stunning layouts, color schemes, and decor elements. Whether you envision an elegant ballroom or a casual outdoor setting, our designs ensure every detail enhances the atmosphere. From lighting to seating arrangements, each element is thoughtfully curated to create a memorable visual impact.</p>
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[600px] w-[1000px] border-l-[5px] border-t-[8px]  border-orange-400  bg-orange-950 rounded-3xl bg-opacity-60 backdrop-blur-sm  ml-12">
                        <p className="text-white text-[100px]">DECORATION</p>
                        <p className="text-white text-2xl p-5">Elevate your event with bespoke decorations that captivate and inspire. From luxurious floral arrangements to custom lighting designs, we infuse your event with a unique charm. Our decorators craft immersive environments that resonate with your theme and captivate your guests. With an eye for elegance and a flair for creativity, we ensure every decorative piece contributes to a cohesive and enchanting atmosphere.</p>
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[600px] w-[1000px] border-l-[5px] border-t-[8px]  border-orange-400  bg-orange-950 rounded-3xl bg-opacity-60 backdrop-blur-sm  ml-12">
                        <p className="text-white text-[100px]">FOODS</p>
                        <p className="text-white text-2xl p-5">Delight your guests with a culinary experience that’s both sophisticated and satisfying. Our food services offer an array of gourmet options, carefully crafted to please diverse palates. From elegant appetizers to mouthwatering main courses and exquisite desserts, each dish is a work of art. We accommodate dietary preferences and restrictions, ensuring everyone enjoys a delicious and memorable dining experience that complements your event perfectly.</p>
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[600px] w-[1000px] border-l-[5px] border-t-[8px]  border-orange-400  bg-orange-950 rounded-3xl bg-opacity-60 backdrop-blur-sm  ml-12">
                        <p className="text-white text-[100px]">LOGISTICS</p>
                        <p className="text-white text-2xl p-5">Effortless execution is the hallmark of exceptional events. We handle all logistical aspects, from coordinating transportation and setting up the venue to managing equipment and ensuring smooth operations. Our team orchestrates every detail, working behind the scenes to ensure everything is in its place. By seamlessly managing logistics, we create a flawless event environment where every aspect runs smoothly, allowing you to enjoy the celebration worry-free.</p>
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[600px] w-[1000px] border-l-[5px] border-t-[8px]  border-orange-400  bg-orange-950 rounded-3xl bg-opacity-60 backdrop-blur-sm  ml-12">
                        <p className="text-white text-[100px]">MEDIA</p>
                        <p className="text-white text-2xl p-5">Make a lasting impression with dynamic media coverage that showcases your event’s highlights. Our media services include professional photography, videography, and live streaming, capturing every memorable moment. We also handle social media and promotional content, amplifying your event’s reach and engagement. By blending creativity with technical expertise, we ensure your event is presented in the best possible light, creating lasting memories and broadening your audience’s impact.</p>
                        
                        </div>
                    </SwiperSlide>
                    
                </Swiper>

                <div className="flex justify-end mx-10 mt-10 relative bottom-[130px] right-12 z-20">
                    <button className="bg-white rounded-xl text-orange-600 font-bold p-3 text-xl hover:bg-gray-200 ">See Our Approach</button>
                </div>

                
            

            </div>
         
        </div>
    );
};

export default Services;