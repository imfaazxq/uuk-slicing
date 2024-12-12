import React from 'react';
import Foto from '@/assets/image.png';
import Image from 'next/image';

function Hero() {
  return (
    <>
      <div className="container bg-white py-10 px-10 shadow-lg max-w-screen-lg mx-auto">
        <div className='flex flex-wrap'>
          <div className='w-full lg:w-1/2 flex justify-center items-center mb-8'> 
            <div className="relative">
              <Image 
                src={Foto} 
                alt='foto' 
                width={250} 
                height={400}
                className='rounded-lg mx-auto' 
              />
            </div>
          </div>
          {/* section 2 */}
          <div className='text-center lg:w-1/2'>
            <h1 className='font-bold mb-8 text-3xl'>Login</h1> 
            <form action="">
              <div className='w-full px-4 mb-4'> 
                <input 
                  type="text" 
                  placeholder="Username" 
                  className='w-3/4 bg-slate-200 text-dark p-2 rounded-md focus:outline-none mx-auto' 
                />
              </div>
              <div className='w-full px-4 mb-4'> 
                <input 
                  type="password" 
                  placeholder="Password" 
                  className='w-3/4 bg-slate-200 text-dark p-2 rounded-md focus:outline-none mx-auto' 
                />
              </div>
              <div className='w-full mt-8'> 
                <button className='text-base font-semibold text-white bg-primary px-2 py-2 rounded-full w-1/2 hover:opacity-80 hover:shadow-lg transition duration-500 mx-auto'> Login</button> 
              </div>
            </form>
            <h1 className='mt-8'>New user? <span className='font-bold'>Register</span></h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
