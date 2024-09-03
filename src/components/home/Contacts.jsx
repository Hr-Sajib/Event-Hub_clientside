import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { Link } from "react-router-dom";


const Contacts = () => {
    return (
        <div className="h-[500px] border font-josefin-sans mb-[1000px]">
            <div className="h-[200px] bg-orange-100 text-orange-800 text-7xl flex justify-between pt-[100px] px-5 ">
                <p>Contact Us</p>
                <p className="text-[100px]">Let's Talk</p>
            </div>
            <div className="h-full bg-orange-100 flex">

                {/* contacts  */}
                <div className="border border-black bg-opacity-50 h-full w-[30%] bg-gray-800 text-white">

                    {/* phone and address  */}
                    <div className="ml-10">
                        <div  className="flex gap-5 items-center mt-16">
                            <FaLocationDot className="text-3xl" />
                            <div>
                                <p>Example Company Inc.</p>
                                <p>123 Broadway, Suite 456</p>
                                <p>New York, NY 10001</p>
                            </div>
                        </div>
                        <div className="ml-[50px]">
                            <Link to="https://www.google.com/maps/@40.7070893,-74.0151275,17z?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"><button className="bg-orange-100 text-orange-900 rounded-sm px-1">See in map</button></Link>
                        </div>
                        <div  className="flex gap-5  items-center mt-10">
                            <FaPhoneAlt className="text-2xl" />
                            <div>
                                <p>+1 (212) 555-7890</p>
                                <p>+1 (212) 555-1234</p>
                                <p>+1 (718) 555-5678</p>
                            </div>
                        </div>
                        <div  className="flex gap-5  items-center mt-10">
                            <IoMdMail className="text-2xl" />
                            <div>
                                <p>eventhub@gmail.com</p>
                            </div>
                        </div>

                    </div>
                    {/* socials  */}
                    <div className="flex gap-7 mt-20 ml-10">
                        <FaFacebookF  className="text-3xl text-orange-100"  />
                        <FaXTwitter  className="text-3xl text-orange-100"  />
                        <FaLinkedinIn  className="text-3xl text-orange-100"  />
                        <FaYoutube  className="text-3xl text-orange-100"  />
                        <FaInstagram  className="text-3xl text-orange-100"  />
                    </div>

                </div>
                {/* lets talk  */}
                <div className="w-full h-full relative bg-fixed bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://i.postimg.cc/Lsr8sgBf/Screenshot-2024-09-03-at-11-44-39-PM.png')" }}>


                </div>
            </div>
        </div>
    );
};

export default Contacts;

import React from 'react';