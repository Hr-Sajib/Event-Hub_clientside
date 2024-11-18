
const Partners = () => {
    return (
        <div className="font-josefin-sans mt-[450px] mb-20">
            {/* title  */}
            <div className="text-center mt-[200px]">
                <div className="relative">
                    <p data-aos="fade-up"  className="text-center text-7xl">Our Partners</p>
                    <div className="absolute inset-0 top-[60px] bg-white w-[450px] h-[80px] mx-auto"></div>
                </div>
                <p className="text-lg text-orange-700 relative">Our trusted partners deliver exceptional services, ensuring your event is flawlessly executed from start to finish.</p>
            </div>

            {/* icons  */}
            <div>
                <div className="flex gap-10 justify-center mt-16 items-center">
                    <img data-aos="zoom-in" className="h-[150px] relative top-3" src="https://i.postimg.cc/280fWQwv/amazon.webp" alt="" />
                    <img data-aos="zoom-in" className="h-[150px] " src="https://i.postimg.cc/TPLGfKnb/Bizzabo.jpg" alt="" />
                    <img data-aos="zoom-in" className="h-20" src="https://i.postimg.cc/nr5G8wxB/evenko.jpg" alt="" />
                    <img data-aos="zoom-in" className="h-8 mx-1" src="https://i.postimg.cc/43DGdX1S/Freeman.png" alt="" />
                    <img data-aos="zoom-in" className="h-11 mx-1" src="https://i.postimg.cc/mkRGYVJ3/google.png" alt="" />
                    <img data-aos="zoom-in" className="h-16 mx-2" src="https://i.postimg.cc/76SkJjsY/Mc-Donald-s.png" alt="" />
                    <img data-aos="zoom-in" className="h-11 mx-3" src="https://i.postimg.cc/2yJMHwXX/Radisson-Hotel-Logo-sas.png" alt="" />

                </div>
                <div  className="flex gap-10 justify-center mt-16 items-center">
                    <img data-aos="zoom-in" className="h-16 ml-3" src="https://i.postimg.cc/1RHppXNw/Adidas-logo.png" alt="" />
                    <img data-aos="zoom-in" className="h-20 ml-3" src="https://i.postimg.cc/28xrjpMz/kfc.png" alt="" />
                    <img data-aos="zoom-in" className="h-8 ml-3" src="https://i.postimg.cc/nhtppF0S/nestle-logo-3.png" alt="" />
                    <img data-aos="zoom-in" className="h-10 ml-3" src="https://i.postimg.cc/0jcDxXqc/netflix.png" alt="" />
                    <img data-aos="zoom-in" className="h-14 ml-3" src="https://i.postimg.cc/tRtbqQnB/MCI-Group.png" alt="" />

                </div>
            </div>
            
        </div>
    );
};

export default Partners;