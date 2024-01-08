import React from 'react';

const index = () => {
  return (
  <div className='max-w-screen-2xl mx-auto'>
      <div className='mx-5 mt-10 '>
      <div className='lg:flex justify-between  gap-6 '>
        <div className=' mt-32 lg:w-[40%]'>
          <h1 className="text-white text-3xl font-bold uppercase">Unlock Learning Adventures <br /> on <span className='text-[#D830BB] italic'>Pay For Course</span></h1>
          <p className='text-md mt-3'>
            Discover, Learn, Grow – Dive into a vast collection of courses across every category  imaginable at PayForCourse.  Elevate your skills, passions, and career with expert-led content.  <span className='text-[#D830BB]'>Start your journey today!</span>
          </p>
          <button className="bg-[#7B07BE] mt-6 hover:bg-[#B51FBC] text-white font-semibold uppercase py-2 px-4 rounded">
            Explore Now
          </button>
        </div>
        <div className='lg:w-[60%]'>
          <div class="grid md:grid-cols-2  gap-4 mt-4 lg:mt-0">
            <div><img   src="https://courses.wscubetech.com/s/store/courses/5f7edfd90cf212378353d729/cover.jpg?v=1" className='rounded h-[500px]' alt="" /></div>
            <div>
            <div ><img src="https://qph.cf2.quoracdn.net/main-qimg-f9514ea83444ef5dfded019d798ca48b-lq" className='rounded h-[248px] ' alt="" /></div>
            <div className='mt-2'>
              <img src="https://www.freecodecamp.org/news/content/images/2023/05/mathematics-banner.png" alt="" className='rounded h-[248px] ' />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default index;