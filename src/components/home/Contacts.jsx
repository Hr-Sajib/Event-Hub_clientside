import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import Swal from 'sweetalert2';


const Contacts = () => {
    const [loading, setLoding] = useState(false);

    const form = useRef();

    
    const sendEmail = (e) => {
        e.preventDefault();
        setLoding(true);
    
        const formData = new FormData(form.current);
        const userEmail = formData.get('email');
        const userName = formData.get('name');
        const userMessage = formData.get('message');
    
        const templateParams = {
            from_name: 'EventHub',
            from_email: userEmail,
            name: userName,
            message: userMessage,
        };
    
        emailjs.send('service_o8upbpr', 'template_xafqw9e', templateParams, 'ZF5npbVhSWZvkYdcx')
            .then(
                () => {
                    Swal.fire({
                        icon: 'success',
                        title: '<p style="color: #c2410c;">Email Sent</p>',
                        text: 'Your message is sent to the EventHub team',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#c2410c'
                    });
                    form.current.reset();
                    setLoding(false);  // Move this here to reset loading
                },
                (error) => {
                    Swal.fire({
                        icon: 'error',
                        title: '<p style="color: #c2410c;">Error !</p>',
                        text: 'Something went wrong. Please try again.',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#c2410c'
                    });
                    console.log('FAILED...', error.text);
                    setLoding(false);  // Reset loading state after error
                }
            );
    };
    

    return (
        <div id="contactsSection" className="h-[500px] font-josefin-sans my-[250px]">
            <div className="h-[200px] bg-orange-100 text-orange-800 text-7xl flex justify-between pt-[100px] px-5 ">
                <p data-aos="fade-up">Contact Us</p>
                <p data-aos="fade-up" className="text-[100px]">Let's Talk</p>
            </div>

            <div className="h-full bg-orange-100 flex">

                {/* contacts  */}
                <div className="h-full w-[30%] bg-black text-white">

                    {/* phone and address  */}
                    <div className="ml-10">
                        <div  className="flex gap-5 items-center mt-16">
                            <FaLocationDot  className="text-3xl" />
                            <div data-aos="fade-right">
                                <p>Example Company Inc.</p>
                                <p>123 Broadway, Suite 456</p>
                                <p>New York, NY 10001</p>
                            </div>
                        </div>
                        <div className="ml-[50px]">
                            <Link to="https://www.google.com/maps/@40.7070893,-74.0151275,17z?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"><button className="bg-orange-100 text-orange-900 rounded-sm px-1 hover:bg-orange-200">See in map</button></Link>
                        </div>
                        <div  className="flex gap-5  items-center mt-10">
                            <FaPhoneAlt className="text-2xl" />
                            <div data-aos="fade-right">
                                <p>+1 (212) 555-7890</p>
                                <p>+1 (212) 555-1234</p>
                                <p>+1 (718) 555-5678</p>
                            </div>
                        </div>
                        <div  className="flex gap-5  items-center mt-10">
                            <IoMdMail className="text-2xl" />
                            <div>
                                <p data-aos="fade-right">eventhub@gmail.com</p>
                            </div>
                        </div>

                    </div>
                    {/* socials  */}
                    <div data-aos="zoom-in" className="flex gap-7 mt-20 ml-10">
                        <Link to="https://www.facebook.com/"><FaFacebookF data-aos="zoom-in"  className="text-3xl text-orange-100"  /></Link>
                        <Link to="https://www.x.com/"><FaXTwitter   className="text-3xl text-orange-100"  /></Link>
                        <Link to="https://www.linkedin.com/"><FaLinkedinIn   className="text-3xl text-orange-100"  /></Link>
                        <Link to="https://www.youtube.com/"><FaYoutube   className="text-3xl text-orange-100"  /></Link>
                        <Link to="https://www.instagram.com/"><FaInstagram   className="text-3xl text-orange-100"  /></Link>
                    </div>

                </div>
                {/* lets talk  */}
                <div  className="w-full h-full relative bg-fixed bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://i.postimg.cc/Lsr8sgBf/Screenshot-2024-09-03-at-11-44-39-PM.png')" }}>

                    <div data-aos="fade-right" className="flex justify-end mr-5">
                        <form onSubmit={sendEmail} ref={form} className=" w-3/4 mt-20">
                            <div className="flex gap-5 mb-5">
                                <input  required type="text" name="name" placeholder="Your Name" className="rounded-full pl-5 h-16 w-3/5" />
                                <input required  type="text" name="email" placeholder="Your Email" className="rounded-full pl-5 h-16 w-full" />
                            </div>
                            <textarea  required type="text" name="message"   placeholder="Write your message here ..." className="h-36 w-full rounded-3xl p-5"/>
                            
                            <div className="flex w-3/4 justify-between pl-5 gap-10 bg-white rounded-full mt-10 p-1">
                                <div className="flex gap-3 items-center">
                                    <input required  type="checkbox" name="" id="" className="relative bottom-[1px]"/>
                                    <p className="text-orange-800" >I hold responsibility of being agreed with the company terms and conditions</p>
                                </div>
                                <div className='relative'>
                                    <input data-aos="fade-right" type="submit" value={` ${loading ? '' : 'Send Us'}`} className="hover:bg-orange-200 rounded-full h-16 w-36 hover:text-orange-900 font-bold p-3 text-xl bg-orange-800 text-white transition-color duration-500 ease-in-out border-0 border-orange-900 hover:border" />
                                    {
                                        loading ? 
                                        <div className=' h-10 w-10 absolute top-3 right-14'>
                                            <img className='h-10 custom-spin' src="https://i.postimg.cc/qRVH32Nc/loading-icon.png" alt="" />
                                        </div> : null
                                    }
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;

