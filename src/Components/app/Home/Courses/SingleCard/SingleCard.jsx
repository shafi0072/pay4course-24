import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/router';

const SingleCard = ({course}) => {
    const router = useRouter();
    return (
        <div className='bg-[#0B1926] px-6 py-10 rounded'>
            <img className='h-56 rounded' src={course.image} alt="" />
            <h3 className='text-2xl my-2 mt-4'>{course.name}</h3>
            <p>Master web development: Learn HTML, CSS, JavaScript for interactive websites.</p>
            <p className='my-2 text-xl '>Duration: 6-8 month</p>
            <div className='mt-6 flex justify-between'>
               <div>
               <span className='font-bold bg-[#112334] text-[#D830BB] px-4 py-2'>PRICE</span>
                <span className='bg-[#1D3953] text-white ps-4 pe-8 py-2 font-bold'>{course.price} BDT</span>
               </div>
               <div>
               <button onClick={()=>router.push(`/course/${course.id}`)} className='opacity-20'>See Details<ArrowForwardIcon/></button>
               </div>
            </div>
        </div>
    );
};

export default SingleCard;