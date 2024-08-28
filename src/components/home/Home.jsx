const Home = () => {
    return (
        <div className='flex gap-4 lg:mt-5'>

            {/* Icon div */}
            <div className='border-[5px] border-l-0 border-[#f79f47] p-5 lg:py-11 w-[40%] rounded-r-3xl flex flex-col justify-center'>
                <img className='rotation-animation lg:w-[650px] lg:h-[650px] p-5 object-cover object-top' src="https://i.ibb.co/9Y13m7K/hero-banner-icon.png" alt="" />
                <div>
                    <p className='font-josefin-sans text-orange-400 text-3xl text-center pb-4'>
                        Its a <b className='text-orange-900'>BREEEEZE</b> with us with the help of best designers and planners in the industry to make your important event a lifetime experience
                    </p>
                </div>
            </div>

            {/* Events div */}
            <div className='border-[5px] border-[#f79f47] w-[65%] mr-5 rounded-3xl p-4'>
                
                {/* Row one */}
                <div className="flex gap-3">
                    {/* Event type Seminar */}
                    <div id="event1Container" className='relative rounded-2xl w-[500px] h-[360px] group overflow-hidden'>
                        <img className='w-[500px] h-[360px] rounded-2xl object-cover object-right transition-transform duration-500 ease-in-out group-hover:scale-110' src="https://i.ibb.co/bWHRfhc/1000-F-670307649-4br-Foy-XTCw9-Uc-P3o-NDJRjbqu48-XTHe4-L.jpg" alt="" />
                        <div id="boxSeminar" className='w-[450px] h-[330px] border-2 border-white transition-opacity duration-500 ease-in-out opacity-40 group-hover:opacity-100 rounded-2xl border-r-4 border-t-4 absolute bottom-[15px] left-6 group-hover:flex '></div>
                        <div id="labelSeminar" className='text-orange-500 border-t-[5px] border-orange-400 w-[500px] bg-white text-2xl absolute bottom-8 left-0 transition-all duration-300 ease-in-out group-hover:left-20'>
                            <button className='font-josefin-sans relative left-0 transition-all duration-300 ease-in-out group-hover:left-10'>SEMINARS</button>
                        </div>
                    </div>

                   {/* Event type Party */}
                    <div id="event1Container" className='relative rounded-2xl w-[610px] h-[360px] group overflow-hidden'>
                        
                    <iframe 
                        className='h-[390px] w-[680px] transition-transform duration-500 ease-in-out group-hover:scale-110' 
                        src="https://www.youtube.com/embed/n_cdSzb2z58?autoplay=1&controls=0&modestbranding=1&loop=1&playlist=n_cdSzb2z58" 
                        frameBorder="0" 
                        allow="autoplay; encrypted-media" 
                        allowFullScreen
                        title="YouTube Video"
                    ></iframe>                        
                        <div id="boxSeminar" className='w-[570px] h-[330px] border-2 border-white transition-opacity duration-500 ease-in-out opacity-40 group-hover:opacity-100 rounded-2xl border-r-4 border-t-4 absolute bottom-[15px] left-6 group-hover:flex '></div>
                        <div id="labelSeminar" className='text-orange-500 border-b-[5px] border-orange-400 w-[680px] bg-white text-2xl absolute bottom-8 left-0 transition-all duration-300 ease-in-out group-hover:left-20'>
                            <button className='font-josefin-sans relative left-0 transition-all duration-300 ease-in-out group-hover:left-10'>PARTIES & CONCERTS</button>
                        </div>
                    </div>

                </div>


                {/* Row two  */}
                <div>
                    {/* Event type Wedding */}
                    <div id="event2Container" className='mt-3 relative rounded-2xl w-[600px] h-[380px] group overflow-hidden'>
                        <img className='w-[600px] h-[460px] rounded-2xl object-cover object-right transition-transform duration-500 ease-in-out group-hover:scale-110' src="https://i.ibb.co/XFG11WC/wedding.jpg" alt="" />
                        <div id="boxSeminar" className='w-[550px] h-[350px] border-2 border-white transition-opacity duration-500 ease-in-out opacity-40 group-hover:opacity-100 rounded-2xl border-l-4 border-t-4 absolute bottom-[15px] left-6 group-hover:flex '></div>
                        <div id="labelSeminar" className='text-orange-500 border-b-[5px] border-orange-400 w-[600px] bg-white  text-2xl absolute bottom-10 left-0 transition-all duration-300 ease-in-out group-hover:left-20'>
                            <button className='font-josefin-sans relative left-0 transition-all duration-300 ease-in-out group-hover:left-10'>WEDDINGS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


// https://youtu.be/n_cdSzb2z58?si=r-qB9-qB9LCMZ7bS
export default Home;
