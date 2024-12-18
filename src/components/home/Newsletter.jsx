import Aos from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useState } from 'react';

const Newsletter = () => {

    const [loading, setLoading] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
      
        const name = e.target.name.value;
        const email = e.target.email.value;
      
        try {

          const emailSend = await axios.post('http://localhost:5500/send-mail', {name, email}, {
            headers:{
              'Content-Type': 'application/json',
            }
          })
          console.log('Sending email Info:', emailSend.data);

          Swal.fire({
            icon:'success',
            title: 'Subscribed Successfully!',
            text: 'Check your email for confirmation message',
            confirmButtonText: 'OK',
            confirmButtonColor: '#7c2d12'

          });
        } catch (error) {
          Swal.fire({
            icon:'error',
            title: 'Something went wront',
            text: 'Please try again later.',
            confirmButtonText: 'OK',
            confirmButtonColor: '#7c2d12'
          });
        }

        setLoading(false);

      };
      

    return (
        <div className="font-josefin-sans flex gap-5 w-[95vw] h-[44.5vh] mx-auto border-2 border-r-[7px] rounded-br-[100px] border-orange-300 border-b-[7px] rounded-2xl mt-[300px] mb-36">
            <img data-aos="fade-up" className="h-[400px] relative bottom-2" src="https://i.ibb.co/SywLszb/view-3d-man-using-laptop.png" alt="Newsletter Illustration" />
            <div>
                <div data-aos="fade-up" className="bg-white relative bottom-[14vh] left-[20vw] w-[560px] flex flex-col justify-center items-center">
                    <p className="text-[5vw] h-[13vh] ">Newsletter</p>
                    <p className="text-xl text-orange-700">Subscribe to our newsletter to get regular useful updates</p>
                </div>
                <form onSubmit={sendEmail} className="text-[1.2vw] relative bottom-[80px] w-[63vw]">
                    <p className="mb-8">
                        Subscribe to our newsletter and be the first to know about upcoming events, special offers, and exclusive insights.
                        Our newsletter is packed with valuable information tailored just for you. Whether you're interested in industry trends, 
                        tips for planning successful events, or behind-the-scenes stories, we've got you covered. Don't miss out—join our community 
                        today and stay connected!
                    </p>
                    <input
                        required
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="border-2 mb-2 bg-orange-100 border-gray-500 px-5 h-16 w-[500px] rounded-full"
                    />
                    <div className="flex justify-between">
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            className="border-2 bg-orange-100 border-gray-500 px-5 h-16 w-[50vw] rounded-full"
                        />
                      <div className='relative'>
                        <input data-aos="fade-right" type="submit" value={` ${loading ? '' : 'Subscribe'}`} className="hover:bg-orange-200 rounded-full h-16 w-36 hover:text-orange-900 font-bold p-3 text-xl bg-orange-800 text-white transition-color duration-500 ease-in-out border-0 border-orange-900 hover:border" />
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
    );
};

export default Newsletter;
