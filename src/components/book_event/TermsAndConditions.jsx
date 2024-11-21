import React from 'react';

const TermsAndConditions = () => {
    return (
            <div className="max-w-[40vw]">
                <h1 className="text-3xl font-bold text-center mb-6">Terms and Conditions</h1>

                <p className="mb-4">
                    Welcome to our event management services. By booking an event with us, you agree to the following
                    terms and conditions:
                </p>

                <div className="space-y-6">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">1. Booking Confirmation</h2>
                        <p>Event bookings are confirmed only upon receipt of the booking fee or a signed agreement. Full payment must be completed [X days] prior to the event date unless otherwise specified.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">2. Cancellation Policy</h2>
                        <ul className="list-disc ml-6">
                            <li>Cancellations made 30 days before the event will receive a full refund, minus a processing fee.</li>
                            <li>Cancellations within 15-30 days of the event will incur a 50% cancellation fee.</li>
                            <li>Cancellations made less than 15 days prior to the event are non-refundable.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">3. Event Changes</h2>
                        <p>Any changes to the event details (e.g., date, time, location, or guest count) must be communicated at least 14 days in advance. Changes are subject to availability and may incur additional charges.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">4. Client Responsibilities</h2>
                        <ul className="list-disc ml-6">
                            <li>Clients must ensure the event venue is accessible and adheres to legal and safety regulations.</li>
                            <li>The client is responsible for obtaining any necessary permits or licenses for the event.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">5. Service Limitations</h2>
                        <p>Services provided are limited to those agreed upon in the booking contract. Requests for additional services may require extra charges and approval.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">6. Force Majeure</h2>
                        <p>We are not liable for cancellations or delays caused by unforeseen circumstances, such as natural disasters, strikes, or government restrictions.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">7. Liability</h2>
                        <ul className="list-disc ml-6">
                            <li>We are not responsible for any injuries, damages, or losses during the event, unless caused by our negligence.</li>
                            <li>Clients are responsible for the behavior of their guests and any damages caused to the venue or equipment.</li>
                        </ul>
                    </div>

                </div>


        </div>
    );
};

export default TermsAndConditions;
