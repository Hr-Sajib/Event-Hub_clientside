import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/bundle';
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation'

const Services = () => {
    return (
        <div className="max-w-[1800px] mx-auto font-josefin-sans">
           
            {/* image div  */}
            <div>
                <img className="w-[1200px] h-[700px] rounded-3xl border-b-[10px] border-orange-300" src="https://i.ibb.co/Kjmn4Gv/146152.jpg" alt="" />
            </div>
            
            {/* text box div  */}
            <div className="relative bottom-[650px] left-10 w-[1100px] ml-[500px] ">

                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1}
                    navigation={true}
                    autoplay={{
                        delay: 10000, 
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide>
                        <div className="h-[600px] w-[1000px] border-l-[5px] border-t-[8px]  border-orange-400  bg-orange-950 rounded-3xl bg-opacity-60 backdrop-blur-sm  ml-12">
                        <p className="text-white text-[100px]">PLANNING</p>
                        <p className="text-white text-2xl p-5">Our event planning services ensure every detail is flawlessly executed. We begin by understanding your vision and goals, creating a customized plan that reflects your unique style. From concept development and budget management to vendor coordination and logistics, we handle it all. Our expert team creates detailed timelines, liaises with top vendors, and oversees every aspect to ensure your event runs smoothly. On the day of your event, we provide on-site management to address any issues promptly. With our meticulous planning, you can relax and enjoy your special occasion, knowing everything is in capable hands.</p>
                        <div className="flex justify-end mx-10 mt-10">
                            <button className="bg-white rounded-xl text-orange-600 font-bold p-3 text-xl hover:bg-gray-200 ">See Our Approach</button>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[600px] w-[1000px] border-l-[5px] border-t-[8px]  border-orange-400  bg-orange-950 rounded-3xl bg-opacity-60 backdrop-blur-sm  ml-12">
                        <p className="text-white text-[100px]">DESIGNING</p>
                        <p className="text-white text-2xl p-5">Design services transform your vision into a captivating reality. We specialize in creating innovative and aesthetically pleasing event themes that reflect your style and goals. From selecting color schemes and designing layouts to choosing decor elements, we ensure every detail enhances the event's overall atmosphere. Our design experts work with you to develop a cohesive look that ties together all elements, including lighting, seating arrangements, and table settings. By blending creativity with functionality, we deliver designs that not only look stunning but also enhance the event experience.</p>
                        <div className="flex justify-end mx-10 mt-10">
                            <button className="bg-white rounded-xl text-orange-600 font-bold p-3 text-xl hover:bg-gray-200 ">See Our Approach</button>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[600px] w-[1000px] border-l-[5px] border-t-[8px]  border-orange-400  bg-orange-950 rounded-3xl bg-opacity-60 backdrop-blur-sm  ml-12">
                        <p className="text-white text-[100px]">DECORATION</p>
                        <p className="text-white text-2xl p-5">Our decoration services bring your event to life with flair and elegance. We offer a wide range of decorative options, from floral arrangements and centerpieces to custom draping and lighting. Our team ensures that every decorative element complements your event theme and enhances the overall ambiance. Whether it's an intimate gathering or a grand celebration, we tailor our decorations to suit your style and preferences. With attention to detail and a commitment to quality, we create an inviting atmosphere that leaves a lasting impression on your guests.</p>
                        <div className="flex justify-end mx-10 mt-10">
                            <button className="bg-white rounded-xl text-orange-600 font-bold p-3 text-xl hover:bg-gray-200 ">See Our Approach</button>
                        </div>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>

                
            

            </div>
         
         
        
        </div>
    );
};

export default Services;