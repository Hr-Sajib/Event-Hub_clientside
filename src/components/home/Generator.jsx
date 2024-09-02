import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Generator = () => {
    const [plans, setPlans] = useState([]);

    const [category, setCategory] = useState(null);
    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState(null);
    const [eventPlan, setEventPlan] = useState(null);
    const [venue, setVenue] = useState(null);
    const [decorations, setDecorations] = useState([]);
    const [catering, setCatering] = useState([]);
    const [entertainment, setEntertainment] = useState([]);
    const [activities, setActivities] = useState([]);
    const [duration, setDuration] = useState([]);

    useEffect(()=>{
        axios.get('/plans.json')
        .then(r=>{
            setPlans(r.data)
        })
    },[])

    const handleSetCategory=(category)=>{
        setCategory(category)
        const categoryFiltered = plans.filter(p => p.eventType == category)
        setEvents(categoryFiltered[0].events)
    }

    const handleSelectEvent =(event) =>{
        setEvent(event)
        const eventFiltered = events.filter(e => e.name == event)

        console.log(eventFiltered)
        setEventPlan(eventFiltered[0].plan)
       
        setVenue(eventFiltered[0].plan.venue)
        setDecorations(eventFiltered[0].plan.decorations)
        setCatering(eventFiltered[0].plan.catering)
        setEntertainment(eventFiltered[0].plan.entertainment)
        setActivities(eventFiltered[0].plan.activities)
        setDuration(eventFiltered[0].plan.duration)


    }


    console.log("eventPlan: ",eventPlan);



    return (
        <div className="font-josefin-sans mb-56 text-center ">
            <div className="text-center mt-[200px]">
                <div className="relative">
                    <p data-aos="fade-up" className="text-[80px] h-[100px]">Event Guide</p>
                    <div className="absolute inset-0 top-[85px] bg-white w-[450px] h-[80px] mx-auto"></div>
                </div>
                <p className="text-xl text-orange-700 relative z-10">See our Automatic guide for your event</p>
            </div>

            <div className="border mx-[115px] rounded-2xl transition-hight duration-500 ease-in-out p-5">

                <div className="mt-[50px] text-xl">
                    <p>Select the type of your event</p>
                    <div className="flex justify-center gap-2 mt-5 ">
                        <button onClick={()=>handleSetCategory('Social')}       className={`${(category == 'Social' ?'bg-orange-300': 'bg-orange-100')}  hover:bg-orange-200 w-[200px] h-16 rounded-md transition-color duration-500 ease-in-out`}>Social</button>
                        <button onClick={()=>handleSetCategory('Corporate')}    className={`${(category == 'Corporate' ?'bg-orange-300': 'bg-orange-100')}  hover:bg-orange-200 w-[200px] h-16 rounded-md transition-color duration-500 ease-in-out`}>Corporate</button>
                        <button onClick={()=>handleSetCategory('Family')}       className={`${(category == 'Family' ?'bg-orange-300': 'bg-orange-100')}  hover:bg-orange-200 w-[200px] h-16 rounded-md transition-color duration-500 ease-in-out`}>Family</button>
                        <button onClick={()=>handleSetCategory('Cultural')}     className={`${(category == 'Cultural' ?'bg-orange-300': 'bg-orange-100')}  hover:bg-orange-200 w-[200px] h-16 rounded-md transition-color duration-500 ease-in-out`}>Cultural</button>
                        <button onClick={()=>handleSetCategory('Religious')}    className={`${(category == 'Religious' ?'bg-orange-300': 'bg-orange-100')}  hover:bg-orange-200 w-[200px] h-16 rounded-md transition-color duration-500 ease-in-out`}>Religious</button>
                        <button onClick={()=>handleSetCategory('Educational')}  className={`${(category == 'Educational' ?'bg-orange-300': 'bg-orange-100')}  hover:bg-orange-200 w-[200px] h-16 rounded-md transition-color duration-500 ease-in-out`}>Educational</button>
                    </div>
                </div>

                {
                events.length>0 &&
                <div data-aos="fade-down" className="text-xl p-5 pt-0 ">
                    <img className="h-[100px] mx-auto " src="https://i.postimg.cc/1zzQ8FNn/down-Arrow.png" alt="" />
                    <div className="flex justify-center gap-2 ">

                        {
                            events.map(e => 
                                <button key={e.name} onClick={()=>handleSelectEvent(e.name)} className={`${(event == e.name ?'bg-orange-300': 'bg-orange-100')} bg-orange-100 hover:bg-orange-200 px-16 h-16 rounded-md transition-color duration-500 ease-in-out`}>{e.name}</button>
                            )
                        }

                    </div>
                </div>

                }

                {
                
                eventPlan &&
                <div data-aos="fade-down" >
                    <img className="h-[100px] mx-auto " src="https://i.postimg.cc/1zzQ8FNn/down-Arrow.png" alt="" />

                    <div className="flex max-w-[1400px] mx-auto">
                        <div data-aos="fade-left">
                            <div className="flex gap-[2px] mb-[5px]">
                                <div className="bg-orange-200 h-10 flex items-center p-2 w-[200px] rounded-l-md">Venue</div>
                                <div className="bg-orange-100 h-10 flex items-center p-2 w-[400px]">{venue}</div>
                            </div>
                            <div className="flex gap-[2px] mb-[5px]">
                                <div className="bg-orange-200 h-10 flex items-center p-2 w-[200px] rounded-l-md">Decorations</div>
                                <div className="bg-orange-100 h-auto flex flex-col items-start p-2 w-[400px]">
                                    {decorations.map((d, index) => (
                                        <p key={index} className="whitespace-pre-line">
                                        {d}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-[2px] mb-[5px]">
                                <div className="bg-orange-200 h-10 flex items-center p-2 w-[200px] rounded-l-md">Catering</div>
                                <div className="bg-orange-100 h-auto flex flex-col items-start p-2 w-[400px]">
                                    {catering.map((d, index) => (
                                        <p key={index} className="whitespace-pre-line">
                                        {d}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-[2px] mb-[5px]">
                                <div className="bg-orange-200 h-10 flex items-center p-2 w-[200px] rounded-l-md">Entertainment</div>
                                <div className="bg-orange-100 h-auto flex flex-col items-start p-2 w-[400px]">
                                    {entertainment.map((d, index) => (
                                        <p key={index} className="whitespace-pre-line">
                                        {d}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-[2px] mb-[5px]">
                                <div className="bg-orange-200 h-10 flex items-center p-2 w-[200px] rounded-l-md">Activities</div>
                                <div className="bg-orange-100 h-auto flex flex-col items-start p-2 w-[400px]">
                                    {activities.map((d, index) => (
                                        <p key={index} className="whitespace-pre-line">
                                        {d}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-[2px] mb-[5px]">
                            <div className="bg-orange-200 h-10 flex items-center p-2 w-[200px] rounded-l-md">Duration</div>
                            <div className="bg-orange-100 h-10 flex items-center p-2 w-[400px]">{duration}</div>
                            </div>
                        </div>
                    
                        <div className="w-1 bg-orange-300 mx-1 h-[457px]"></div>
                        <img data-aos="fade-right" className="w-[777px] h-[457px] object-cover  rounded-r-2xl" src="https://i.postimg.cc/9fJrLbfX/rustic-decorated-indoors-wedding-venue-637285-5663.jpg" alt="" />
                    
                    </div>
                    <p className="text-gray-400">This system suggests a basic possible plan for your event. Please consider contacting us to get proffessional Event plan</p>
                </div>

                }


            </div>

    
        </div>
    );
};

export default Generator;

