import React from 'react';
import Foto1 from '@/assets/icon/home.png';
import Foto2 from '@/assets/icon/list.png';
import Foto3 from '@/assets/icon/profil.png';
import Foto4 from '@/assets/icon/transaction.png';
import Image from 'next/image';

function Tambahpengguna() {
  return (
    <>
      <div className="flex w-full h-screen">
        {/* Sidebar */}
        <div className="w-1/5 h-full bg-white p-4 shadow-md">
          <div className="flex items-center mb-5 mt-7">
            <Image src={Foto1} alt="home" width={30} height={30} className="rounded-lg ml-5" />
            <h1 className="text-base ml-2">Home</h1>
          </div>
          <div className="flex items-center mb-5">
            <Image src={Foto2} alt="list" width={30} height={30} className="rounded-lg ml-5" />
            <h1 className="text-base ml-2">Inventory</h1>
          </div>
          <div className="flex items-center mb-5">
            <Image src={Foto3} alt="profil" width={30} height={30} className="rounded-lg ml-5" />
            <h1 className="text-base ml-2">All Account</h1>
          </div>
          <div className="flex items-center mb-5">
            <Image src={Foto4} alt="transaction" width={30} height={30} className="rounded-lg ml-5" />
            <h1 className="text-base ml-2">Transactions</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="container bg-white py-13 px-10 shadow-lg max-w-screen-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-bold text-3xl mt-5">Add Account</h1>
            <hr className="border-gray-400 mb-8 mt-2" />
          </div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 flex mb-8 justify-center">
              <h1 className="font-bold mb-2 text-3xl text-gray-500">Account</h1>
            </div>
            <div className="text-center lg:w-1/2">
              <form action="">
                <div className="w-full px-4 mb-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-3/4 bg-slate-200 text-dark p-2 rounded-md focus:outline-none mx-auto"
                  />
                </div>
                <div className="w-full px-4 mb-4">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-3/4 bg-slate-200 text-dark p-2 rounded-md focus:outline-none mx-auto"
                  />
                </div>
                <div className="w-full px-4 mb-4">
                  <input
                    type="text"
                    placeholder="Email ID"
                    className="w-3/4 bg-slate-200 text-dark p-2 rounded-md focus:outline-none mx-auto"
                  />
                </div>
                <div className="w-full px-4 mb-4">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-3/4 bg-slate-200 text-dark p-2 rounded-md focus:outline-none mx-auto"
                  />
                </div>
                <div className="w-full px-4 mb-4">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-3/4 bg-slate-200 text-dark p-2 rounded-md focus:outline-none mx-auto"
                  />
                </div>
                <div className="w-full px-4 mb-4">
                  <input
                    type="text"
                    placeholder="Gender"
                    className="w-3/4 bg-slate-200 text-dark p-2 rounded-md focus:outline-none mx-auto"
                  />
                </div>
                <div className="w-full px-4 mb-4">
                  <input
                    type="text"
                    placeholder="Age"
                    className="w-3/4 bg-slate-200 text-dark p-2 rounded-md focus:outline-none mx-auto"
                  />
                </div>
                <div className="w-full px-4 mb-8 text-center">
                  <label className="mr-2 text-gray-600">Type:</label>
                  <label className="mr-2">
                    <input type="radio" name="type" value="admin" className="mr-1" /> Admin
                  </label>
                  <label>
                    <input type="radio" name="type" value="employee" className="mr-1" /> Employee
                  </label>
                </div>
                <button className=" text-base font-semibold text-white bg-primary px-2 py-2 rounded-full w-1/2 hover:opacity-80 hover:shadow-lg transition duration-500 mx-auto">
                    Register
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tambahpengguna;
