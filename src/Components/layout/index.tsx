import React from 'react';
import Navbar from '@/src/Components/shared/Navbar'
import Footer from '@/src/Components/shared/Footer'

interface propsTypes{
  children: React.ReactNode
}

const index = ({children} : propsTypes) => {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
};

export default index;