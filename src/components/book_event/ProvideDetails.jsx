import axios from 'axios';
import React from 'react';
import TermsAndConditions from './TermsAndConditions';

const ProvideDetails = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const name = e.target.eventName.value;
        const organizer = e.target.organizerName.value;
        const email = e.target.contactEmail.value; // Now correctly capturing email
        const date = e.target.eventDate.value;
        const time = e.target.eventTime.value;
        const location = e.target.location.value;
        const eventType = e.target.eventType.value;
        const guests = e.target.numberOfGuests.value;
        const packageType = e.target.packageType.value;
        const details = e.target.additionalDetails.value;
        const phone = e.target.phone.value; // Now correctly capturing phone number
    
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
    
        console.log(newBooking);
    
        try {
            const response = await axios.post('http://localhost:5500/book-event', newBooking);
            console.log('Booking successful:', response.data);
        } catch (error) {
            console.error('Error submitting booking:', error);
        }
    };
    

    return (
        <div className="flex min-h-screen ml-16 mt-10 gap-16">
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-orange-100 p-6 rounded-lg h-[135vh]">
                <h2 className="text-2xl font-bold mb-6 text-center">Event Booking Form</h2>

                {/* Form Fields */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="eventName">
                        Event Name
                    </label>
                    <input type="text" id="eventName" name="eventName" className="w-full px-4 py-2 rounded-lg" required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="organizerName">
                        Organizer Name
                    </label>
                    <input type="text" id="organizerName" name="organizerName" className="w-full px-4 py-2 rounded-lg" required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="contactEmail">
                        Contact Email
                    </label>
                    <input type="email" id="contactEmail" name="contactEmail" className="w-full px-4 py-2 rounded-lg" required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="contactPhone">
                        Phone Number
                    </label>
                    <input type="text" id='contactPhone' name="phone" className="w-full px-4 py-2 rounded-lg" required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="eventDate">
                        Event Date
                    </label>
                    <input type="date" id="eventDate" name="eventDate" className="w-full px-4 py-2 rounded-lg" required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="eventTime">
                        Event Time
                    </label>
                    <input type="time" id="eventTime" name="eventTime" className="w-full px-4 py-2 rounded-lg" required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="location">
                        Location
                    </label>
                    <input type="text" id="location" name="location" className="w-full px-4 py-2 rounded-lg" required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="eventType">
                        Event Type
                    </label>
                    <select id="eventType" name="eventType" className="w-full px-4 py-2 rounded-lg" required>
                        <option value="" disabled>Select an event type</option>
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
                    <input type="number" id="numberOfGuests" name="numberOfGuests" className="w-full px-4 py-2 rounded-lg" required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="packageType">
                        Package Type
                    </label>
                    <select id="packageType" name="packageType" className="w-full px-4 py-2 rounded-lg" required>
                        <option value="" disabled>Select a package</option>
                        <option value="Budget">Budget</option>
                        <option value="Balanced">Balanced</option>
                        <option value="Premium">Premium</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="additionalDetails">
                        Additional Details
                    </label>
                    <textarea id="additionalDetails" name="additionalDetails" className="w-full px-4 py-2 rounded-lg" rows="4"></textarea>
                </div>

                <button type="submit" className="w-full bg-orange-700 text-white py-2 rounded-lg hover:bg-blue-700">
                    Book Event
                </button>
            </form>

            <TermsAndConditions />
        </div>
    );
};

export default ProvideDetails;
