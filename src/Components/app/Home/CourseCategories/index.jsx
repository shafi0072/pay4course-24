import React from 'react';
import SingleCategory from './SingleCategory'
const index = () => {
    return (
        <div className='max-w-screen-2xl mx-auto mt-24 px-4 lg:px-0'>
             <p className='text-[#D830BB]'>BROWSE BY POPULAR CATEGORIES</p>
            <h3 className='text-4xl font-semibold'>EXPLORE COURSES BY CATEGORIES</h3>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
               <SingleCategory/>
               <SingleCategory/>
               <SingleCategory/>
            </div>
        </div>
    );
};

export default index;