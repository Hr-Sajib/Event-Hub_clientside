import Aos from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import Swal from 'sweetalert2';

const Newsletter = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const userEmail = formData.get('email');
        const userName = formData.get('name');

        // Prepare the email data
        const templateParams = {
            from_name: 'Your Company Name', // Or use a static company name
            to_email: userEmail,  // This is the recipient's email address
            name: userName, // The name of the subscriber
        };

        emailjs.send('service_o8upbpr', 'template_6i7lgim', templateParams, 'ZF5npbVhSWZvkYdcx')
            .then(
                () => {
                    // Show success alert
                    Swal.fire({
                        icon: 'success',
                        title: 'Subscribed!',
                        text: 'Check your email for confirmation.',
                        confirmButtonText: 'OK'
                    });

                    // Reset the form
                    form.current.reset();
                },
                (error) => {
                    // Show error alert
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong. Please try again.',
                        confirmButtonText: 'OK'
                    });

                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <div className="font-josefin-sans flex gap-5 max-w-[1600px] h-[400px] mx-auto border-2 border-r-[7px] rounded-br-[100px] border-orange-300 border-b-[7px] rounded-2xl mt-[300px] mb-36">
            <img data-aos="fade-up" className="h-[400px] relative bottom-2" src="https://i.ibb.co/SywLszb/view-3d-man-using-laptop.png" alt="Newsletter Illustration" />
            <div>
                <div data-aos="fade-up" className="bg-white relative bottom-[110px] left-[500px] w-[560px] flex flex-col justify-center items-center">
                    <p className="text-[100px] h-[120px]">Newsletter</p>
                    <p className="text-xl text-orange-700 ml-3">Subscribe to our newsletter to get regular useful updates</p>
                </div>
                <form onSubmit={sendEmail} ref={form} className="text-xl relative bottom-[80px] w-[1000px]">
                    <p className="mb-8">
                        Subscribe to our newsletter and be the first to know about upcoming events, special offers, and exclusive insights.
                        Our newsletter is packed with valuable information tailored just for you. Whether you're interested in industry trends, 
                        tips for planning successful events, or behind-the-scenes stories, we've got you covered. Don't miss out—join our community 
                        today and stay connected!
                    </p>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="border-2 mb-2 bg-orange-100 border-gray-500 px-5 h-16 w-[500px] rounded-full"
                    />
                    <div className="flex justify-between">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            className="border-2 bg-orange-100 border-gray-500 px-5 h-16 w-[800px] rounded-full"
                        />
                        <input
                            data-aos="fade-right"
                            type="submit"
                            value="Subscribe"
                            className="bg-orange-800 rounded-full h-16 w-36 text-white font-bold p-3 text-xl hover:bg-orange-200 hover:text-orange-900 transition-color duration-500 ease-in-out border-0 border-orange-900 hover:border"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
