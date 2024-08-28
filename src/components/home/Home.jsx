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
                <div>
                    {/* Event type 1 */}
                    <div id="event1Container" className='relative rounded-2xl w-[500px] h-[360px] group overflow-hidden'>
                        <img className='w-[500px] h-[360px] rounded-2xl object-cover object-right transition-transform duration-500 ease-in-out group-hover:scale-110' src="https://i.ibb.co/bWHRfhc/1000-F-670307649-4br-Foy-XTCw9-Uc-P3o-NDJRjbqu48-XTHe4-L.jpg" alt="" />
                        <div id="boxSeminar" className='w-[450px] h-[330px] border-2 border-white rounded-2xl border-r-4 border-t-4 absolute bottom-[15px] left-6 group-hover:flex '></div>
                        <div id="labelSeminar" className='text-orange-500 w-[500px] bg-white text-2xl absolute bottom-8 left-0 transition-all duration-300 ease-in-out group-hover:left-20'>
                            <button className='font-josefin-sans relative left-0 transition-all duration-300 ease-in-out group-hover:left-10'>SEMINARS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
