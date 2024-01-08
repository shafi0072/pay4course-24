import React from "react";
import Subscribe from "./Subscribe";
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneCallbackRoundedIcon from '@mui/icons-material/PhoneCallbackRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';


const Footer = () => {
  return (
    <footer className=" mt-56">
      <div className="bg-[#0B1D34] pt-11 text-white">
        <div className=" mx-auto pt-16 px-3">
          <div className="relative max-w-screen-xl mx-auto  mt-11 ">
            <Subscribe />
         <div className="flex flex-wrap justify-between gap-3 md:gap-4 pt-16 lg:pt-0">
         <div className="w-1/3">
            <img className="w-40 " src="https://i.ibb.co/wYFg26s/logo-94tzv-A0-Bh-transformed-removebg-preview.png" alt="" />
              <p className="my-4">
                Master web development: Learn HTML, CSS, JavaScript for
                interactive websites
              </p>
           
            </div>

            <div>
              <h1 className="text-2xl font-bold mb-5">Useful Links</h1>
              <ul className="">
                <li className="mb-2">
                  <a href="#">Home</a>
                </li>
                <li className="mb-2">
                  <a href="#">About Us</a>
                </li>
                <li className="mb-2">
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                  <div>

                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="text-2xl font-bold mb-5">Company</h1>
              <ul className="">
                <li className="mb-2">
                  <a href="#">Careers</a>
                </li>
                <li className="mb-2">
                  <a href="#">Awards</a>
                </li>
              </ul>
            </div>

            {/* support */}
            <div>
              <h1 className="text-2xl font-bold mb-5">Contact</h1>
             <div>
                <div className="flex flex-col space-y-3 border-2 rounded-md p-4 shadow-sm">
                    <div>
                    <LocationOnRoundedIcon/> Dhaka,Bangladesh
                    </div>
                    <div>
                    <PhoneCallbackRoundedIcon/> 01475645454
                    </div>
                    <div>
                            <EmailRoundedIcon/> depthsearch@gmail.com
                    </div>

                </div>
             </div>
            </div>
         </div>
          </div>

          {/* bottom */}
          
        </div>
        <div className="mt-11 py-5 border-y-0 ">
            <hr className="mb-11" />
           <div className="max-w-screen-xl mx-auto flex justify-between px-4 ">
           <p className="ms-12 lg:ms-0">
              &copy; Copyright <span>Pay4Course - Depth Search</span>
            </p>
            <div className=" hidden lg:flex gap-4 ">
                <p>Home</p> <span>|</span>
                <p>About</p> <span>|</span>
                <p>Service</p> <span>|</span>
                <p>Contact</p>
            </div>
           </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
