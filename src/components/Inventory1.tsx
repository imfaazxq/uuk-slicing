import React from 'react'
import Foto1 from '@/assets/icon/home.png';
import Foto2 from '@/assets/icon/list.png';
import Foto3 from '@/assets/icon/profil.png';
import Foto4 from '@/assets/icon/transaction.png';
import Foto5 from '@/assets/icon/edit.png';
import Foto6 from '@/assets/icon/trash.png';
import Image from 'next/image';

function Inventory() {
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
            <div>
              <h1 className='font-bold text-3xl'>Inventory</h1>
              <nav>
                <a href="#Inventory1" className="font-medium text-2xl underline">All</a>
                <a href="#Inventory2" className="font-medium text-2xl ml-4">Warehouse</a>
              </nav>
            </div>
            <button className="border border-primary text-primary px-4 py-2 rounded ml-4">
              Add
            </button>
          </div>
          
          <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse rounded-lg shadow-lg overflow-hidden">
            <thead className="bg-slate-400 text-white">
              <tr>
                <th scope="col" className="px-6 py-3"></th> {/* Space for icons */}
                <th scope="col" className="px-6 py-3">Product Name</th>
                <th scope="col" className="px-6 py-3">Series No.</th>
                <th scope="col" className="px-6 py-3">Items</th>
                <th scope="col" className="px-6 py-3">Purchase Date</th>
                <th scope="col" className="px-6 py-3">Unit Price</th>
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
                <td className="px-6 py-4">Product A</td>
                <td className="px-6 py-4">12345</td>
                <td className="px-6 py-4">10</td>
                <td className="px-6 py-4">2024-01-01</td>
                <td className="px-6 py-4">$100</td>
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
                <td className="px-6 py-4">Product B</td>
                <td className="px-6 py-4">67890</td>
                <td className="px-6 py-4">5</td>
                <td className="px-6 py-4">2024-02-01</td>
                <td className="px-6 py-4">$150</td>
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
                <td className="px-6 py-4">Product C</td>
                <td className="px-6 py-4">54321</td>
                <td className="px-6 py-4">15</td>
                <td className="px-6 py-4">2024-03-01</td>
                <td className="px-6 py-4">$200</td>
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
                <td className="px-6 py-4">Product D</td>
                <td className="px-6 py-4">98765</td>
                <td className="px-6 py-4">8</td>
                <td className="px-6 py-4">2024-04-01</td>
                <td className="px-6 py-4">$250</td>
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
                <td className="px-6 py-4">Product E</td>
                <td className="px-6 py-4">24680</td>
                <td className="px-6 py-4">12</td>
                <td className="px-6 py-4">2024-05-01</td>
                <td className="px-6 py-4">$300</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Inventory;
