import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const BookEvent = () => {
    const [detailsDone, setDetailsDone] = useState(false);
    const [termsDone, setTermsDone] = useState(false);
    const [feeDone, setFeeDone] = useState(false);


    return (
        <div className="min-h-screen mt-[7vw]">
            
            {/* progress bar  */}

            <div className='flex ml-[5vw] items-center'>
                <p className='bg-slate-200 p-2 px-5 rounded-full'>Provide Details</p>
                <p>---------------</p>
                <p className='bg-slate-200 p-2 px-5 rounded-full'>Agree Terms</p>
                <p>---------------</p>
                <p className='bg-slate-200  p-2 px-5 rounded-full'>Booking Fee  & Confirmation</p>
            </div>


            <Outlet/>


            <div>
                
            </div>
        </div>
    );
};

export default BookEvent;