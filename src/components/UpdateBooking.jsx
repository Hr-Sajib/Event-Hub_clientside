import { async } from '@firebase/util';
import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateBooking = () => {
    const bookingData = useLoaderData();

    const handleUpdate = async(e) => {
        e.preventDefault();
    
        const name = e.target.eventName.value;
        const organizer = e.target.organizerName.value;
        const email = e.target.contactEmail.value; 
        const date = e.target.eventDate.value;
        const time = e.target.eventTime.value;
        const location = e.target.location.value;
        const eventType = e.target.eventType.value;
        const guests = e.target.numberOfGuests.value;
        const packageType = e.target.packageType.value;
        const details = e.target.additionalDetails.value;
        const phone = e.target.phone.value; 
    
        const newBooking = {
            name,
            organizer,
            email,
            date,
            time,
            location,
            eventType,
            guests,
            packageType,
            details,
            phone,
        };
    
        try {
            const response = await axios.put(`http://localhost:5500/updateBooking/${bookingData._id}`, newBooking);
            console.log('Booking Update successful:', response.data);
            Swal.fire({
                title: "Updated",
                text: "Your booking has been updated.",
                icon: "success",
                confirmButtonColor: '#b81311'
            });
        } catch (error) {
            console.error('Error updating booking:', error);
        }
    };



    return (
        <div className="flex justify-center items-center min-h-screen p-4 pt-0">
            <form onSubmit={handleUpdate} className="w-full max-w-4xl bg-orange-100 p-8 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-6 text-orange-700">
                    Update Booking Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="eventName">
                                Event Name
                            </label>
                            <input
                                type="text"
                                id="eventName"
                                name="eventName"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                defaultValue={bookingData.name}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="organizerName">
                                Organizer Name
                            </label>
                            <input
                                type="text"
                                id="organizerName"
                                name="organizerName"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                defaultValue={bookingData.organizer}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="contactEmail">
                                Contact Email
                            </label>
                            <input
                                type="email"
                                id="contactEmail"
                                name="contactEmail"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                defaultValue={bookingData.email}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="contactPhone">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                id="contactPhone"
                                name="phone"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                defaultValue={bookingData.phone}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="eventDate">
                                Event Date
                            </label>
                            <input
                                type="date"
                                id="eventDate"
                                name="eventDate"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                defaultValue={bookingData.date}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="eventTime">
                                Event Time
                            </label>
                            <input
                                type="time"
                                id="eventTime"
                                name="eventTime"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                defaultValue={bookingData.time}
                                required
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="location">
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                defaultValue={bookingData.location}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="eventType">
                                Event Type
                            </label>
                            <select
                                id="eventType"
                                name="eventType"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                defaultValue={bookingData.eventType}
                                required
                            >
                                <option value="" disabled>
                                    Select an event type
                                </option>
                                <option value="Wedding">Wedding</option>
                                <option value="Corporate">Corporate</option>
                                <option value="Social Gathering">Social Gathering</option>
                                <option value="Birthday Party">Birthday Party</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="numberOfGuests">
                                Number of Guests
                            </label>
                            <input
                                type="number"
                                id="numberOfGuests"
                                name="numberOfGuests"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                defaultValue={bookingData.guests}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="packageType">
                                Package Type
                            </label>
                            <select
                                id="packageType"
                                name="packageType"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                defaultValue={bookingData.packageType}
                                required
                            >
                                <option value="" disabled>
                                    Select a package
                                </option>
                                <option value="Budget">Budget</option>
                                <option value="Balanced">Balanced</option>
                                <option value="Premium">Premium</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="additionalDetails">
                                Additional Details
                            </label>
                            <textarea
                                id="additionalDetails"
                                name="additionalDetails"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                rows="5"
                                defaultValue={bookingData.details}
                            ></textarea>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-orange-700 text-white py-2 mt-6 rounded-lg hover:bg-orange-800 transition duration-200"
                >
                    Update Booking
                </button>
            </form>
        </div>
    );
};

export default UpdateBooking;
