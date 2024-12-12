import React from 'react';
import Foto1 from '@/assets/icon/home.png';
import Foto2 from '@/assets/icon/list.png';
import Foto3 from '@/assets/icon/profil.png';
import Foto4 from '@/assets/icon/transaction.png';
import Foto5 from '@/assets/icon/edit.png';
import Foto6 from '@/assets/icon/trash.png';
import Image from 'next/image';

function Halamanhak() {
  return (
    <>
      <div className="flex w-full h-screen">
        {/* Sidebar */}
        <div className='w-1/5 h-full bg-white p-4 shadow-md'>
          <div className='flex items-center mb-5 mt-7'>
            <Image 
              src={Foto1} 
              alt='home' 
              width={30} 
              height={30}
              className='rounded-lg ml-5'
            />
            <h1 className='text-base ml-2'>Home</h1>
          </div>
          <div className='flex items-center mb-5'>
            <Image 
              src={Foto2} 
              alt='list' 
              width={30} 
              height={30}
              className='rounded-lg ml-5'
            />
            <h1 className='text-base ml-2'>Inventory</h1>
          </div>
          <div className='flex items-center mb-5'>
            <Image 
              src={Foto3} 
              alt='profil' 
              width={30} 
              height={30}
              className='rounded-lg ml-5'
            />
            <h1 className='text-base ml-2'>All Account</h1>
          </div>
          <div className='flex items-center mb-5'>
            <Image 
              src={Foto4} 
              alt='transaction' 
              width={30} 
              height={30}
              className='rounded-lg ml-5'
            />
            <h1 className='text-base ml-2'>Transactions</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-4/5 p-4 overflow-x-auto">
          <div className="flex justify-between items-center mb-5">
            <h1 className='font-medium text-3xl'>All User</h1>
            <button className="border border-primary text-primary px-4 py-2 rounded ml-4">
              Add
            </button>
          </div>
          
          <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse rounded-lg shadow-lg overflow-hidden">
            <thead className="bg-slate-400 text-white">
              <tr>
                <th scope="col" className="px-6 py-3"></th> {/* Space for icons */}
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Access Status</th>
                <th scope="col" className="px-6 py-3">Email</th>
                <th scope="col" className="px-6 py-3">Age</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-b dark:border-gray-700">
                <td className="px-6 py-4">
                  <div className='flex'>
                    <Image 
                      src={Foto5} 
                      alt='edit' 
                      width={25} 
                      height={25}
                      className='rounded-lg '
                    />
                    <Image 
                      src={Foto6} 
                      alt='delete' 
                      width={25} 
                      height={25}
                      className='rounded-lg ml-3'
                    />
                  </div>
                </td>
                <th scope="row" className="px-6 py-4">
                  John Doe
                </th>
                <td className="px-6 py-4">Active</td>
                <td className="px-6 py-4">john.doe@example.com</td>
                <td className="px-6 py-4">29</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-6 py-4">
                  <div className='flex'>
                    <Image 
                      src={Foto5} 
                      alt='edit' 
                      width={25} 
                      height={25}
                      className='rounded-lg '
                    />
                    <Image 
                      src={Foto6} 
                      alt='delete' 
                      width={25} 
                      height={25}
                      className='rounded-lg ml-3'
                    />
                  </div>
                </td>
                <th scope="row" className="px-6 py-4">
                  Jane Smith
                </th>
                <td className="px-6 py-4">Inactive</td>
                <td className="px-6 py-4">jane.smith@example.com</td>
                <td className="px-6 py-4">34</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-6 py-4">
                  <div className='flex'>
                    <Image 
                      src={Foto5} 
                      alt='edit' 
                      width={25} 
                      height={25}
                      className='rounded-lg '
                    />
                    <Image 
                      src={Foto6} 
                      alt='delete' 
                      width={25} 
                      height={25}
                      className='rounded-lg ml-3'
                    />
                  </div>
                </td>
                <th scope="row" className="px-6 py-4">
                  Alice Brown
                </th>
                <td className="px-6 py-4">Pending</td>
                <td className="px-6 py-4">alice.brown@example.com</td>
                <td className="px-6 py-4">27</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-6 py-4">
                  <div className='flex'>
                    <Image 
                      src={Foto5} 
                      alt='edit' 
                      width={25} 
                      height={25}
                      className='rounded-lg '
                    />
                    <Image 
                      src={Foto6} 
                      alt='delete' 
                      width={25} 
                      height={25}
                      className='rounded-lg ml-3'
                    />
                  </div>
                </td>
                <th scope="row" className="px-6 py-4">
                  Michael Johnson
                </th>
                <td className="px-6 py-4">Active</td>
                <td className="px-6 py-4">michael.johnson@example.com</td>
                <td className="px-6 py-4">42</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-6 py-4">
                  <div className='flex'>
                    <Image 
                      src={Foto5} 
                      alt='edit' 
                      width={25} 
                      height={25}
                      className='rounded-lg '
                    />
                    <Image 
                      src={Foto6} 
                      alt='delete' 
                      width={25} 
                      height={25}
                      className='rounded-lg ml-3'
                    />
                  </div>
                </td>
                <th scope="row" className="px-6 py-4">
                  Emma Watson
                </th>
                <td className="px-6 py-4">Pending</td>
                <td className="px-6 py-4">emma.watson@example.com</td>
                <td className="px-6 py-4">31</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Halamanhak;
