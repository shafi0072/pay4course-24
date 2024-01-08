import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
const style = {
};

const Search = ({ open, handleClose }: any) => {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="backdrop-blur-sm bg-white/30 h-[100vh] w-[100%]">
            <div className='flex justify-end mr-5 pt-2 cursor-pointer' onClick={handleClose}>
              <CloseIcon />
            </div>
            <div className='flex justify-center'>

              <form className='w-[40%] mt-5'>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                  <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#7B07BE] hover:bg-[#7B07BE] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#7B07BE] dark:hover:bg-[#7B07BE] dark:focus:ring-blue-800">Search</button>
                </div>
              </form>

            </div>
          </div>

        </Box>
      </Modal>
    </div>
  );
};

export default Search;