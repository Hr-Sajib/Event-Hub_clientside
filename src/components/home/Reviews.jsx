import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Aos from "aos";
import 'aos/dist/aos.css';


const Reviews = () => {

    const reviews = [
        {
            "customerName": "Josh",
            "starCount": 5,
            "reviewText": "Fantastic service! Every detail was handled perfectly. I enjoyed.",
            "imageSrc": "https://i.postimg.cc/TPK1tkRJ/person1.avif"
        },
        {
            "customerName": "Antony",
            "starCount": 5,
            "reviewText": "As a bride, I felt so special! The team made our wedding magical.",
            "imageSrc": "https://i.postimg.cc/T37hq8XP/person2.jpg"
        },
        {
            "customerName": "Mark",
            "starCount": 4,
            "reviewText": "Great event for our corporate meeting. Professional and efficient.",
            "imageSrc": "https://i.postimg.cc/pr1S68nn/young-attractive-man-classic-suit-straightens-his-tie-171337-9532.avif"
        },
        {
            "customerName": "Emma",
            "starCount": 4,
            "reviewText": "As a mother, I appreciated the family-friendly approach !",
            "imageSrc": "https://i.postimg.cc/fRTJ9zpF/person4.jpg"
        },
        {
            "customerName": "Junaid",
            "starCount": 5,
            "reviewText": "Excellent for our school event. Well organized and joyful.",
            "imageSrc": "https://i.postimg.cc/pdwzqdTX/muslim-guy-showcasing-proud-expression.jpg"
        },
        {
            "customerName": "Frank",
            "starCount": 4,
            "reviewText": "Had fun, but some areas needed more attention. Good overall!",
            "imageSrc": "https://i.postimg.cc/3J9wYMNZ/person6.jpg"
        }
    ]


    const [target, setTarget] = useState(null);

    const handleHover =(name)=>{
        setTarget(name);
    }
    
    console.log(target);

    return (
        <div className="mt-[200px] font-josefin-sans max-w-[1800px] mx-auto">
            <div data-aos="fade-right" className=" mr-[100px] text-right">
                <p className="text-[120px] h-[140px]">Client Reviews</p>
                <p className="text-xl mb-10">Transforming visions into unforgettable experiences, we handle every detail—from concept to execution—ensuring your event is flawless and unique.</p>
            </div>

            <div>
                <div data-aos="zoom-in" className="flex gap-1 max-w-[1700px] p-5 mx-auto justify-center mb-10">
                    {
                        reviews.map(r=>
                            <div key={r.customerName} onMouseEnter={()=>handleHover(r.customerName)} className="relative">
                                <div className="relative">
                                    <img className={`${target == r.customerName ? 'w-[450px]' : ' w-[250px]'}  h-[300px] object-cover transition-width duration-500 ease-in-out rounded-xl`} src={r.imageSrc} alt="" />
                                    <div
                                    className={`${target === r.customerName 
                                        ? 'bg-gradient-to-t from-black/100 to-transparent' 
                                        : 'bg-gradient-to-t from-black/100 via-transparent to-transparent'} 
                                        absolute inset-0 transition-bg rounded-xl`}
                                ></div>                                </div>
                                <div className={`${target == r.customerName ? 'top-[11rem]' : 'top-[16rem]'}  w-36 h-8 absolute inset-0 ml-1 transition-position duration-500 ease-in-out`}>
                                    <div className="flex">
                                        <p className="absolute bottom-7 text-6xl text-white">{r.customerName}</p>
                                        {
                                            Array.from({ length: 5 }, (_, i) => (
                                                i < r.starCount ? <FaStar key={i} className="text-yellow-500 ml-1" /> : <FaStar key={i} className="text-gray-300 ml-1" />
                                            ))
                                        }
                                    </div>
                                    <div className={`${target == r.customerName ? 'flex' : 'hidden'} text-gray-100 w-[360px] gap-2 mt-2`}>
                                        <p className="text-white text-5xl noto-serif h-6 w-6">"</p>
                                        <p  className="mt-1 text-xl">{r.reviewText}</p>
                                    </div>

                                </div>
                                
                            </div>    
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default Reviews;