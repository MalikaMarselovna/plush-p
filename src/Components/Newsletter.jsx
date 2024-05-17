import React from 'react';
import { Send } from '@mui/icons-material';

function Newsletter() {
  return (
    <div className='flex justify-center items-center h-[350px] w-[100%] flex-col bg-[#f92e9e]'>
        <h1 className='text-[50px] font-bold text-[#16ffbd]'>
            NEWSLETTER
        </h1>
        <h2 className='text-[20px] mt-2 text-white'>
            Always in touch with us, for your favorite products
        </h2>
        <form className='flex mt-[2rem] items-center justify-between min-w-[30rem] min-h-[2rem] bg-white border-[#cccccc] rounded-[5px] overflow-hidden'>
            <input
              className='border-none pl-[20px] flex-[7] outline-none h-[50px]'
              type="email" 
              placeholder='email'
            />
            <button type='submit' className='bg-[#16ffbd] flex-1 h-[100%]'>
                <Send className='text-white' />
            </button>
        </form>
    </div>
  );
}

export default Newsletter;
