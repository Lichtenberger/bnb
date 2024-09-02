import React from 'react'
import logo from '../assets/logo.png'
import { GiWorld } from 'react-icons/gi'
import { FiSearch } from "react-icons/fi";
import { BiUser } from "react-icons/bi";

const Navbar = () => {
    return (
        <div className='border-b sticky z-50 top-0 bg-white'>
        <div className='flex items-center justify-between sm:mx-6 md:mx-10 lg:mx-12'>
            {/* left */}
            <div className='h-20 flex'>
                <img src={logo} className='object-cover -my-6 ' alt='House Logo' />
            </div>
            {/* middle */}
            <div className='hidden lg:flex relative shadow-md border rounded-full justify-center items-center '>
                <input type='search' placeholder='' className='py-2.5 w-[20rem] rounded-full outline-0' />
                <div className='flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-600 '>
                    <button className='w-full'>Place</button>
                    <button className='border-l border-x px-6'>Time</button>
                    <button className='w-full text-gray-400 pl-2'>People</button>
                </div>
                <div className='flex space-between bg-[#7d70f7] rounded-full p-2 mr-2'>
                    <FiSearch className='text-white' />
                </div>
            </div>
            {/* right */}
            
            <div className='flex items-center pr-4 font-semibold text-gray-600'>
                {/* <p className='text-[17px]'>Rent your House</p> */}
                <div className='flex items-center mx-10 gap-1'>
                <GiWorld className='text-[17px]'/>
                <p>EN</p>
                </div>            
                <div className='flex items-center gap-2 border px-4 py-2 rounded-full bg-[#7d70f7] text-white shadow-md shadow-gray-300 hover:bg-[#f97171] duration-200 ease-out'>
                <p>Login</p>
                <BiUser className='text-[19px]'/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Navbar;