import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ProvideDetails from './provideDetails';

const BookEvent = () => {
    const [detailsDone, setDetailsDone] = useState(false);
    const [termsDone, setTermsDone] = useState(false);
    const [feeDone, setFeeDone] = useState(false);


    return (
        <div className="">
            
            {/* progress bar  */}

            <div className='flex ml-[5vw] items-center'>
                <p className='bg-slate-200 p-2 px-5 rounded-full'>Provide Details</p>
                <p>---------------</p>
                <p className='bg-slate-200 p-2 px-5 rounded-full'>Check Terms</p>
                <p>---------------</p>
                <p className='bg-slate-200  p-2 px-5 rounded-full'>Book</p>
            </div>


            <ProvideDetails/>

        </div>
    );
};

export default BookEvent;