import React from 'react';
import SingleCard from './SingleCard/SingleCard'
import {courses} from '@/src/constant/course'

const index = () => {
    return (
        <div className='max-w-screen-2xl mx-auto mt-24 cursor-pointer px-4'>
            <p className='text-[#D830BB]'>BROWSE BY PAY4COURSE RECOMMENDATION</p>
            <h3 className='text-4xl font-semibold'>RECOMMENDED COURSES FOR YOU</h3>
          <div className=' mt-6 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {
               courses.map((course)=><SingleCard key={course.id} course={course}/>) 
            }
          </div>
        </div>
    );
};

export default index;