'use client'; // to use hook, make it client components
import React, { useEffect, useState } from 'react'
import { FaCode, FaDog } from 'react-icons/fa'
import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import { BiDownload } from 'react-icons/bi';
import { HiBars3BottomRight } from 'react-icons/hi2';

/* transition-all: to change background color of top bar when scrolling */

type Props = {
    openNav:() => void;
}

const Nav = ({openNav}:Props) => {

    const [navBg,setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if(window.scrollY >= 90) setNavBg(true); // scroll more than 90px
            if(window.scrollY < 90) setNavBg(false);
        };
        
        window.addEventListener("scroll", handler); // event listener

        // arrow function
        return () => window.removeEventListener("scroll", handler);

    }, []);

  return (
    <div className={`transition-all ${navBg ? 'bg-[#1e091ad9] shadow-md' : "fixed" } duration-200 h-[10vh] z-[10000] fixed w-full`}>
        <div className="flex items-center h-full justify-between w-[90%] mx-auto">
            {/* logo */}
            <div className="flex item-center space-x-2 justify-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
                    <FaDog className="w-5 h-5 text-b" />
                </div>
                {/*
                <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
                    SHINON
                </h1>
                */}
            </div>
            {/* Navlinks */}
            <div className="hidden lg:flex items-center space-x-10">
                {NavLinks.map((link) => {
                    return (
                        <Link 
                            key={link.id} 
                            href={link.url} 
                            className="text-base hover:text-pink-400 text-white font-medium transition-all duration-200">
                                <p>{link.label}</p>
                        </Link>
                    );
                })}
            </div>
            {/* button */}
            <div className="flex items-center space-x-4">
                {/* CV button */}
                <button className="px-6 py-3.5 text-sm cursor-pointer rounded-lg
                 bg-pink-400 hover:bg-pink-600 transition-all duration-300 text-white flex items-center space-x-2">
                    <BiDownload className="w-5 h-5" />
                    <span>Resume</span>
                </button>
                {/* burger menu */}
                <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden'/>
            </div>
        </div>
    </div> 
  );
};

export default Nav;