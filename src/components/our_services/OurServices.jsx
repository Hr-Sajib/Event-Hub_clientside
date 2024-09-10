import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/bundle';
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation'
import { useEffect } from 'react';
import { useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const OurServices = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [slideNumber, setSlideNumber]=useState(0);
    const imagesArray = ['https://i.ibb.co/Kjmn4Gv/146152.jpg','https://i.postimg.cc/28Z2bckZ/art-school-student-consulting-drawing-master-1262-18373.jpg','https://i.postimg.cc/9fJrLbfX/rustic-decorated-indoors-wedding-venue-637285-5663.jpg','https://i.postimg.cc/3rPCj86S/FOODS.avif','https://i.postimg.cc/zXZKbdb4/LOGISTICS.avif','https://i.postimg.cc/SR0dKmbv/portrait-fitness-influencer-23-2151564832-1.png','https://i.postimg.cc/wxGyLwt9/security-service.jpg' ]


    const handleSlideChange = (swiper) => {
        setSlideNumber(swiper.activeIndex)
    };


    return (
        <div className="">
            <div className="max-w-[1800px] mx-auto font-josefin-sans lg:mt-36 relative">

                {/* image div  */}
                <div data-aos="fade-right">
                    <img className={`${slideNumber == 0 ? ' border-orange-400' : slideNumber == 1 ? ' border-red-500' : slideNumber == 2 ? ' border-[#fef3c7]':slideNumber == 3 ? ' border-[#84cc16]':slideNumber == 4 ? ' border-[#b91c1c]':slideNumber == 5 ? ' border-[#0ea5e9]':  'border-[#8b5cf6]' } w-[1200px] h-[700px] object-right object-cover rounded-3xl border-b-[10px]`} src={imagesArray[slideNumber]} alt="" />
                </div>
                
                {/* text box div  */}
                <div data-aos="fade-left"  className="absolute top-[5vh] left-10 w-[1100px] ml-[600px] ">

                <Swiper
                        modules={[Navigation, Autoplay]}
                        onSlideChange={handleSlideChange}
                        slidesPerView={1}
                        navigation={true}
                    >

                        <SwiperSlide>
                            <div className="h-[600px] w-[1000px] border-l-[10px] border-t-[5px]  border-orange-400  bg-orange-950 rounded-3xl bg-opacity-60 backdrop-blur-sm  ml-12">
                                <p className="text-white text-[100px]">PLANNING</p>
                                <p className="text-white text-2xl p-5  h-[270px]">Transforming ideas into reality requires meticulous planning. From conceptualizing the event’s flow to managing budgets and schedules, our team crafts a detailed roadmap that aligns with your vision. We coordinate with vendors, create timelines, and anticipate potential challenges to ensure everything unfolds seamlessly. With a keen eye for detail and a proactive approach, we turn complex logistics into smooth operations, letting you focus on enjoying your special occasion.</p>
                                <div className="flex justify-end mr-[30px]">
                                    <div className="h-[150px] w-[150px] bg-white flex justify-center items-center rounded-full p-">
                                        <img className="h-[100px]" src="https://i.postimg.cc/q7fty5q9/planning-566973.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-[600px] w-[1000px] border-l-[10px] border-t-[5px]  border-red-600  bg-orange-950 rounded-3xl bg-opacity-60 backdrop-blur-sm  ml-12">
                            <p className="text-white text-[100px]">DESIGNING</p>
                            <p className="text-white text-2xl p-5  h-[270px]">Imagine a space that perfectly reflects your style and vision. Our design services turn this vision into an extraordinary experience. By blending creative concepts with practical design, we create stunning layouts, color schemes, and decor elements. Whether you envision an elegant ballroom or a casual outdoor setting, our designs ensure every detail enhances the atmosphere. From lighting to seating arrangements, each element is thoughtfully curated to create a memorable visual impact.</p>
                            <div className="flex justify-end mr-[30px]">
                                <div className="h-[150px] w-[150px] bg-white flex justify-center items-center rounded-full p-">
                                    <img className="h-[100px]" src="https://i.postimg.cc/c4S07GB7/pencil-paintbrush-10490064.png" alt="" />
                                </div>
                            </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-[600px] w-[1000px] border-l-[10px] border-t-[5px]  border-[#fef3c7]  bg-orange-950 rounded-3xl bg-opacity-60 backdrop-blur-sm  ml-12">
                            <p className="text-white text-[100px]">DECORATION</p>
                            <p className="text-white text-2xl p-5  h-[270px]">Elevate your event with bespoke decorations that captivate and inspire. From luxurious floral arrangements to custom lighting designs, we infuse your event with a unique charm. Our decorators craft immersive environments that resonate with your theme and captivate your guests. With an eye for elegance and a flair for creativity, we ensure every decorative piece contributes to a cohesive and enchanting atmosphere.</p>
                            <div className="flex justify-end mr-[30px]">
                                <div className="h-[150px] w-[150px] bg-white flex justify-center items-center rounded-full p-">
                                    <img className="h-[100px]" src="https://i.postimg.cc/C5V5fBKk/vase-15380805.png" alt="" />
                                </div>
                            </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-[600px] w-[1000px] border-l-[10px] border-t-[5px]  border-[#84cc16]  bg-orange-950 rounded-3xl bg-opacity-60 backdrop-blur-sm  ml-12">
                            <p className="text-white text-[100px]">FOODS</p>
                            <p className="text-white text-2xl p-5  h-[270px]">Delight your guests with a culinary experience that’s both sophisticated and satisfying. Our food services offer an array of gourmet options, carefully crafted to please diverse palates. From elegant appetizers to mouthwatering main courses and exquisite desserts, each dish is a work of art. We accommodate dietary preferences and restrictions, ensuring everyone enjoys a delicious and memorable dining experience that complements your event perfectly.</p>
                            <div className="flex justify-end mr-[30px]">
                                <div className="h-[150px] w-[150px] bg-white flex justify-center items-center rounded-full p-">
                                    <img className="h-[100px]" src="https://i.postimg.cc/ZYVzNv0m/fast-food-1695521.png" alt="" />
                                </div>
                            </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-[600px] w-[1000px] border-l-[10px] border-t-[5px]  border-[#b91c1c]  bg-orange-950 rounded-3xl bg-opacity-60 backdrop-blur-sm  ml-12">
                            <p className="text-white text-[100px]">LOGISTICS</p>
                            <p className="text-white text-2xl p-5  h-[270px]">Effortless execution is the hallmark of exceptional events. We handle all logistical aspects, from coordinating transportation and setting up the venue to managing equipment and ensuring smooth operations. Our team orchestrates every detail, working behind the scenes to ensure everything is in its place. By seamlessly managing logistics, we create a flawless event environment where every aspect runs smoothly, allowing you to enjoy the celebration worry-free.</p>
                            <div className="flex justify-end mr-[30px]">
                                <div className="h-[150px] w-[150px] bg-white flex justify-center items-center rounded-full p-">
                                    <img className="h-[100px]" src="https://i.postimg.cc/SxYBHZdQ/truck-container-6956015.png" alt="" />
                                </div>
                            </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-[600px] w-[1000px] border-l-[10px] border-t-[5px]  border-[#0ea5e9]  bg-orange-950 rounded-3xl bg-opacity-60 backdrop-blur-sm  ml-12">
                            <p className="text-white text-[100px]">MEDIA</p>
                            <p className="text-white text-2xl p-5  h-[270px]">Make a lasting impression with dynamic media coverage that showcases your event’s highlights. Our media services include professional photography, videography, and live streaming, capturing every memorable moment. We also handle social media and promotional content, amplifying your event’s reach and engagement. By blending creativity with technical expertise, we ensure your event is presented in the best possible light, creating lasting memories and broadening your audience’s impact.</p>
                            <div className="flex justify-end mr-[30px]">
                                <div className="h-[150px] w-[150px] bg-white flex justify-center items-center rounded-full p-">
                                    <img className="h-[100px]" src="https://i.postimg.cc/Dy0kPfbX/video-camera-686458.png" alt="" />
                                </div>
                            </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-[600px] w-[1000px] border-l-[10px] border-t-[5px]  border-[#8b5cf6]  bg-orange-950 rounded-3xl bg-opacity-60 backdrop-blur-sm  ml-12">
                            <p className="text-white text-[100px]">SECURITY</p>
                            <p className="text-white text-2xl p-5  h-[270px]">Ensuring a safe and secure environment is crucial for any event. Our security services are designed to give you peace of mind by protecting guests, staff, and property. We collaborate with professional security teams to conduct risk assessments, create customized security plans, and deploy trained personnel on-site. From access control and guest monitoring to emergency response protocols, every aspect of security is managed meticulously. Advanced technology like surveillance cameras and communication systems is integrated to monitor the event in real-time.</p>
                            <div className="flex justify-end mr-[30px]">
                                <div className="h-[150px] w-[150px] bg-white flex justify-center items-center rounded-full p-">
                                    <img className="h-[100px]" src="https://i.postimg.cc/sDLF6Fp0/video-16481378.png" alt="" />
                                </div>
                            </div>
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>


                </div>

            </div>


            {/* approach  */}

            <div className="mx-[5vw] mt-36">
                <div className="h-5 w-5 bg-orange-700 rounded-t-lg"></div>

                {/* planning  */}
                <div data-aos="fade-right" className="font-josefin-sans border-r-2  border-t-2 border-orange-700 rounded-tr-3xl p-10 text-right">
                    <p className="text-5xl mb-5">Planning Phase</p>
                    {/* Initial Consultation and Vision Setting */}
                    <div className="my-10">
                        <p className="text-3xl mb-5 text-orange-400">Initial Consultation and Vision Setting</p>
                        <p className="text-xl mb-5">Goal → Understanding the client's vision, objectives, and key priorities for the event.</p>
                        <ul className="  ml-10">
                            <li>Meet with the client to discuss their ideas, preferences, and overall theme.</li>
                            <li>Clarify the event's purpose (e.g., corporate, social, family) and target audience.</li>
                            <li>Set key objectives like guest experience, ambiance, and tone of the event.</li>
                        </ul>
                    </div>

                    {/* Budget Development */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-orange-400">Budget Development</p>
                        <p className="text-xl mb-5">Goal → Establish a comprehensive budget to ensure all aspects of the event are financially covered.</p>
                        <ul className="  ml-10">
                            <li>Identify the total event budget.</li>
                            <li>Break down the budget into categories (venue, food, decor, entertainment, etc.).</li>
                            <li>Account for contingencies and unexpected costs (typically 10-15% of the total budget).</li>
                        </ul>
                    </div>

                    {/* Venue Selection */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-orange-400">Venue Selection</p>
                        <p className="text-xl mb-5">Goal → Secure a venue that aligns with the client's vision, event type, and logistical needs.</p>
                        <ul className="  ml-10">
                            <li>Research venues that fit the event's theme and budget.</li>
                            <li>Consider venue location, capacity, parking, and accessibility.</li>
                            <li>Finalize the venue booking and ensure availability for the event date.</li>
                        </ul>
                    </div>

                    {/* Timeline Creation */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-orange-400">Timeline and Scheduling</p>
                        <p className="text-xl mb-5">Goal → Create a detailed event timeline to ensure smooth coordination and flow.</p>
                        <ul className="  ml-10">
                            <li>Draft a detailed event timeline, including setup, the event itself, and teardown.</li>
                            <li>Coordinate with vendors and service providers to align on timing.</li>
                            <li>Identify key milestones and track progress.</li>
                        </ul>
                    </div>

                    {/* Vendor Coordination */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-orange-400">Vendor Coordination</p>
                        <p className="text-xl mb-5">Goal → Engage and manage all necessary vendors to provide services like catering, decor, and AV equipment.</p>
                        <ul className="  ml-10">
                            <li>Identify and hire vendors based on the event's needs and budget.</li>
                            <li>Coordinate contracts and ensure vendor availability for the event date.</li>
                            <li>Communicate timelines and specific requirements to each vendor.</li>
                        </ul>
                    </div>

                    {/* Risk Management */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-orange-400">Risk Management and Contingency Planning</p>
                        <p className="text-xl mb-5">Goal → Anticipate potential risks and create contingency plans to mitigate them.</p>
                        <ul className="  ml-10">
                            <li>Identify possible risks (e.g., weather, technical failures, or delays).</li>
                            <li>Develop contingency plans for each identified risk.</li>
                            <li>Ensure backup options are available (e.g., alternative venues, extra staff, etc.).</li>
                        </ul>
                    </div>

                </div>

                {/* designing */}
                <div data-aos="fade-left" className="font-josefin-sans border-l-2 border-t-2 border-red-600 rounded-l-3xl rounded-b-[0px] p-10">
                    <p className="text-5xl mb-5">Designing Delight</p>

                    {/* Concept Development */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-red-400">Concept Development</p>
                        <p className="text-xl mb-5">Goal → Create a design concept that reflects the client’s vision and the event’s purpose.</p>
                        <ul className="ml-10">
                            <li>Discuss design ideas and preferences with the client.</li>
                            <li>Develop a design concept that aligns with the event theme and client’s vision.</li>
                            <li>Create mood boards or design mockups for client review and approval.</li>
                        </ul>
                    </div>

                    {/* Layout Planning */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-red-400">Layout Planning</p>
                        <p className="text-xl mb-5">Goal → Plan the layout of the venue to optimize space and enhance the guest experience.</p>
                        <ul className="ml-10">
                            <li>Design floor plans that include seating arrangements, stage setup, and guest flow.</li>
                            <li>Ensure layout aligns with the event’s needs and enhances functionality.</li>
                            <li>Consider accessibility, safety, and comfort in the layout design.</li>
                        </ul>
                    </div>

                    {/* Color Scheme and Decor */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-red-400">Color Scheme and Decor</p>
                        <p className="text-xl mb-5">Goal → Select a cohesive color scheme and decor elements that enhance the event’s theme.</p>
                        <ul className="ml-10">
                            <li>Choose a color palette that reflects the event’s theme and atmosphere.</li>
                            <li>Select decor items such as centerpieces, floral arrangements, and lighting.</li>
                            <li>Coordinate decor elements with the venue’s existing features and layout.</li>
                        </ul>
                    </div>

                    {/* Design Mockups */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-red-400">Design Mockups</p>
                        <p className="text-xl mb-5">Goal → Create detailed mockups of the event setup for client approval and final adjustments.</p>
                        <ul className="ml-10">
                            <li>Produce detailed design mockups or 3D renderings of the event space.</li>
                            <li>Incorporate feedback from the client to finalize the design.</li>
                            <li>Prepare a design presentation to share with the client and stakeholders.</li>
                        </ul>
                    </div>

                    {/* Implementation and Setup */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-red-400">Implementation and Setup</p>
                        <p className="text-xl mb-5">Goal → Oversee the implementation of the design concept and ensure everything is set up as planned.</p>
                        <ul className="ml-10">
                            <li>Coordinate with vendors to execute the design plan.</li>
                            <li>Supervise the setup and arrangement of decor elements according to the design.</li>
                            <li>Conduct a final walkthrough to ensure everything is in place and meets design specifications.</li>
                        </ul>
                    </div>
                </div>

                {/* decoration */}
                <div data-aos="fade-right" className="font-josefin-sans border-r-2  border-t-2 border-blue-700 rounded-tr-3xl p-10 text-right">
                    <p className="text-5xl mb-5">Decoration Approach</p>

                    {/* Theme and Style */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-blue-400">Theme and Style</p>
                        <p className="text-xl mb-5">Goal → Develop a cohesive theme and style that enhances the overall ambiance of the event.</p>
                        <ul className="ml-10">
                            <li>Determine the overall theme and style based on the client's vision.</li>
                            <li>Select decor elements that align with the theme (e.g., color schemes, motifs).</li>
                            <li>Coordinate with designers to ensure all decor elements fit the theme.</li>
                        </ul>
                    </div>

                    {/* Decor Placement */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-blue-400">Decor Placement</p>
                        <p className="text-xl mb-5">Goal → Strategically place decor items to enhance the venue's aesthetics and functionality.</p>
                        <ul className="ml-10">
                            <li>Map out the placement of major decor items (e.g., centerpieces, drapes, lighting).</li>
                            <li>Ensure decor placement complements the layout and enhances the guest experience.</li>
                            <li>Adjust placement as needed based on venue constraints and client feedback.</li>
                        </ul>
                    </div>

                    {/* Final Touches */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-blue-400">Final Touches</p>
                        <p className="text-xl mb-5">Goal → Add final decorative touches to complete the look and feel of the event space.</p>
                        <ul className="ml-10">
                            <li>Add finishing touches to decor items (e.g., floral arrangements, table settings).</li>
                            <li>Ensure all decor elements are in place and meet the desired aesthetic.</li>
                            <li>Conduct a final inspection to make adjustments if necessary.</li>
                        </ul>
                    </div>
                </div>

                {/* foods */}
                <div data-aos="fade-left" className="font-josefin-sans border-l-2 border-t-2 border-green-600 rounded-l-3xl rounded-b-[0px] p-10">
                    <p className="text-5xl mb-5">Foods Of Taste</p>

                    {/* Menu Planning */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-green-600">Menu Planning</p>
                        <p className="text-xl mb-5">Goal → Develop a menu that suits the event type and guest preferences.</p>
                        <ul className="ml-10">
                            <li>Consult with the client to understand their food preferences and dietary restrictions.</li>
                            <li>Create a menu that fits the event’s theme and budget.</li>
                            <li>Include options for various dietary needs (e.g., vegetarian, gluten-free).</li>
                        </ul>
                    </div>

                    {/* Vendor Selection */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-green-600">Vendor Selection</p>
                        <p className="text-xl mb-5">Goal → Choose reliable vendors to provide high-quality food and beverages for the event.</p>
                        <ul className="ml-10">
                            <li>Research and select catering vendors based on their reputation and offerings.</li>
                            <li>Review and negotiate contracts with selected vendors.</li>
                            <li>Coordinate with vendors to ensure timely delivery and setup.</li>
                        </ul>
                    </div>

                    {/* Tasting and Approval */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-green-600">Tasting and Approval</p>
                        <p className="text-xl mb-5">Goal → Ensure the quality and taste of food meet the client’s expectations.</p>
                        <ul className="ml-10">
                            <li>Arrange a tasting session with the client to review menu options.</li>
                            <li>Make any necessary adjustments based on feedback.</li>
                            <li>Finalize the menu and confirm details with the vendor.</li>
                        </ul>
                    </div>

                    {/* Setup and Service */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-green-600">Setup and Service</p>
                        <p className="text-xl mb-5">Goal → Ensure the food and beverage setup runs smoothly during the event.</p>
                        <ul className="ml-10">
                            <li>Oversee the setup of food stations or service areas.</li>
                            <li>Coordinate with service staff to ensure timely and efficient service.</li>
                            <li>Address any issues that arise during the event to maintain service quality.</li>
                        </ul>
                    </div>
                </div>

                {/* logistics */}
                <div data-aos="fade-right" className="font-josefin-sans border-r-2  border-t-2 border-gray-700 rounded-tr-3xl p-10 text-right">
                    <p className="text-5xl mb-5">Logistics Management</p>

                    {/* Transportation Planning */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-gray-400">Transportation Planning</p>
                        <p className="text-xl mb-5">Goal → Ensure smooth transportation of guests, vendors, and equipment.</p>
                        <ul className="ml-10">
                            <li>Arrange transportation for guests and VIPs as needed.</li>
                            <li>Coordinate logistics for transporting equipment and decor to the venue.</li>
                            <li>Plan for any parking arrangements and loading/unloading zones.</li>
                        </ul>
                    </div>

                    {/* Equipment and Setup */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-gray-400">Equipment and Setup</p>
                        <p className="text-xl mb-5">Goal → Ensure all necessary equipment is in place and set up correctly before the event.</p>
                        <ul className="ml-10">
                            <li>Confirm delivery and setup of all required equipment (e.g., AV, lighting).</li>
                            <li>Oversee the installation and functionality of equipment.</li>
                            <li>Conduct a pre-event check to ensure everything is operational.</li>
                        </ul>
                    </div>

                    {/* Coordination and Communication */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-gray-400">Coordination and Communication</p>
                        <p className="text-xl mb-5">Goal → Maintain effective communication among all parties involved in the event.</p>
                        <ul className="ml-10">
                            <li>Establish clear communication channels with vendors, staff, and clients.</li>
                            <li>Provide regular updates and coordinate actions to address any issues.</li>
                            <li>Ensure all parties are informed of the event timeline and key details.</li>
                        </ul>
                    </div>

                    {/* On-Site Management */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-gray-400">On-Site Management</p>
                        <p className="text-xl mb-5">Goal → Oversee event logistics on-site to ensure smooth operation and resolution of issues.</p>
                        <ul className="ml-10">
                            <li>Monitor event flow and address any logistical challenges that arise.</li>
                            <li>Ensure timely execution of event activities and schedules.</li>
                            <li>Provide support and solutions for any unexpected issues or delays.</li>
                        </ul>
                    </div>
                </div>

                {/* media */}
                <div data-aos="fade-left" className="font-josefin-sans border-l-2 border-t-2 border-purple-600 rounded-l-3xl rounded-b-[0px] p-10">
                    <p className="text-5xl mb-5">Media Coverage</p>

                    {/* Media Planning */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-purple-400">Media Planning</p>
                        <p className="text-xl mb-5">Goal → Develop a media strategy to promote the event and engage the audience.</p>
                        <ul className="ml-10">
                            <li>Identify target media outlets and channels for event promotion.</li>
                            <li>Create a media plan that includes press releases, social media, and other channels.</li>
                            <li>Coordinate with media partners for coverage and advertising opportunities.</li>
                        </ul>
                    </div>

                    {/* Content Creation */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-purple-400">Content Creation</p>
                        <p className="text-xl mb-5">Goal → Produce engaging content to attract and inform the audience.</p>
                        <ul className="ml-10">
                            <li>Create promotional materials such as flyers, banners, and social media posts.</li>
                            <li>Develop engaging content for press releases, blog posts, and newsletters.</li>
                            <li>Ensure all content aligns with the event’s branding and messaging.</li>
                        </ul>
                    </div>

                    {/* Media Coverage */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-purple-400">Media Coverage</p>
                        <p className="text-xl mb-5">Goal → Coordinate media coverage to maximize event exposure and reach.</p>
                        <ul className="ml-10">
                            <li>Arrange for media representatives to cover the event (e.g., photographers, reporters).</li>
                            <li>Ensure media access and support during the event.</li>
                            <li>Monitor media coverage and address any issues or requests from media partners.</li>
                        </ul>
                    </div>

                    {/* Post-Event Promotion */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-purple-400">Post-Event Promotion</p>
                        <p className="text-xl mb-5">Goal → Promote post-event content and engage with attendees after the event.</p>
                        <ul className="ml-10">
                            <li>Share event highlights, photos, and videos through media channels.</li>
                            <li>Thank attendees and media partners for their support.</li>
                            <li>Gather feedback and assess the impact of media efforts.</li>
                        </ul>
                    </div>
                </div>

                {/* security */}
                <div data-aos="fade-right" className="font-josefin-sans border-r-2 border-b-2 border-t-2 border-yellow-600 rounded-r-3xl p-10 text-right">
                    <p className="text-5xl mb-5">Security Ensuring</p>

                    {/* Risk Assessment */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-yellow-500">Risk Assessment</p>
                        <p className="text-xl mb-5">Goal → Identify and assess potential security risks associated with the event.</p>
                        <ul className="ml-10">
                            <li>Conduct a risk assessment to identify potential security threats.</li>
                            <li>Evaluate the event’s security needs based on its size, location, and attendees.</li>
                            <li>Develop a security plan to address identified risks.</li>
                        </ul>
                    </div>

                    {/* Security Personnel */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-yellow-500">Security Personnel</p>
                        <p className="text-xl mb-5">Goal → Deploy trained security personnel to manage and maintain safety at the event.</p>
                        <ul className="ml-10">
                            <li>Hire security personnel with experience in event security.</li>
                            <li>Assign roles and responsibilities to security staff.</li>
                            <li>Ensure security personnel are briefed on the event’s security plan and protocols.</li>
                        </ul>
                    </div>

                    {/* Access Control */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-yellow-500">Access Control</p>
                        <p className="text-xl mb-5">Goal → Implement access control measures to manage guest entry and restrict unauthorized access.</p>
                        <ul className="ml-10">
                            <li>Set up check-in points and credential verification for guests and staff.</li>
                            <li>Monitor entry and exit points to control access to different areas.</li>
                            <li>Manage the distribution and collection of event credentials or passes.</li>
                        </ul>
                    </div>

                    {/* Emergency Response */}
                    <div className="my-10">
                        <p className="text-3xl mb-5  text-yellow-500">Emergency Response</p>
                        <p className="text-xl mb-5">Goal → Prepare for and respond to any emergency situations during the event.</p>
                        <ul className="ml-10">
                            <li>Develop an emergency response plan for various scenarios (e.g., medical emergencies, evacuations).</li>
                            <li>Ensure security personnel are trained in emergency response procedures.</li>
                            <li>Coordinate with local authorities and emergency services as needed.</li>
                        </ul>
                    </div>
                </div>

                <div className="h-5 w-5 bg-yellow-600 rounded-b-lg"></div>
            </div>

            <p className="text-center mt-36 text-gray-400">We appreciate customer advices and preferences always as the satisfaction as focal priority</p>

        </div>
    );
};

export default OurServices;