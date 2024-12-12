"use client";
import React, { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Halamanhak from "@/components/Halamanhak";
import Tambahpengguna from "@/components/Tambahpengguna"
import Inventory from "@/components/Inventory1"
import Inventory2 from "@/components/Inventory2"
import Addproduk from "@/components/Addproduk"

import Foto from '@/assets/navbar.png';
import Image from 'next/image';
import Link from "next/link";

function Page() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <>
      <header
        className="fixed bg-primary shadow-md top-0 left-0 w-full flex items-center z-10 transition-all duration-500 ease-in-out"
      >
        <div className="container mx-auto px-2">
          <div className="flex justify-between items-center h-20 relative">
            {/* Logo */}
            <div className="px-2">
              <Image 
                src={Foto} 
                alt='foto' 
                width={150}  // Set width based on the original aspect ratio
                height={100} // Adjust height based on original image aspect ratio
                className='rounded-lg mx-auto -mt-1'  // Apply negative margin to move the image up
              />
            </div>

            {/* Toggle Menu Button */}
            <button
              className="block lg:hidden absolute right-4"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <span
                className={`bg-dark block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
                  menu ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`bg-dark block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${
                  menu ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`bg-dark block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
                  menu ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
              ></span>
            </button>

            {/* Navigation Menu */}
            <nav
              className={`ml-auto absolute top-full right-4 bg-white shadow-lg rounded-md overflow-hidden lg:static lg:bg-transparent lg:shadow-none lg:block transition-all duration-500 ease-in-out ${
                menu ? "block" : "hidden"
              }`}
            >
              <ul className="block lg:flex lg:justify-end">
                <li className="group">
                  <Link
                    href="/"
                    className="text-base text-white py-2 px-4 block group-hover:text-secondary"
                  >
                    Login
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="#HakAksesPengguna"
                    className="text-base text-white py-2 px-4 block group-hover:text-secondary"
                  >
                    HakAksesPengguna
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="#AddAccount"
                    className="text-base text-white py-2 px-4 block group-hover:text-secondary"
                  >
                    AddAccount
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="#Inventory"
                    className="text-base text-white py-2 px-4 block group-hover:text-secondary"
                  >
                   Inventory
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="#Addproduk"
                    className="text-base text-white py-2 px-4 block group-hover:text-secondary"
                  >
                   AddProduk
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-28 bg-slate-100">
        <Hero />
      </section>
      {/* End Hero Section */}

      {/* About Section */}
      <section id="HakAksesPengguna" className="pt-32 pb-28 bg-slate-100">
       <Halamanhak />
      </section>
      {/* End About Section */}

      {/* Portofolio Section */}
      <section id="AddAccount" className="pt-32 pb-28 bg-slate-100">
      <Tambahpengguna />
      </section>
      {/* End Portofolio Section */}

      {/* Client Section */}
      <section id="Inventory" className="pt-32 pb-28 bg-slate-100">
        <Inventory/>
      </section>
      {/* End Client Section */}

      {/* Blog Section */}
      <section id="Inventory2" className="pt-32 pb-28 bg-slate-100">
      <Inventory2/>
      </section>
      {/* End Blog Section */}

      {/* Contact Section */}
      <section id="Addproduk" className="pt-32 pb-28 bg-slate-100">
        <Addproduk/>
      </section>
      {/* End Contact Section */}

      {/* Footer Section */}
      <section className="bg-dark pt-20 pb-10 bg-slate-100">
        
      </section>
      {/* End Footer Section */}
    </>
  );
}

export default Page;
