import React from 'react'
import logo from '../assets/logo.png'
import { GiWorld } from 'react-icons/gi'
import { FiMenu, FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
    return (
    <div className='flex items-center justify-between border-b'>
        {/* left */}
        <div className='h-20 flex'>
            <img src={logo} className='object-cover -my-6 ' />
        </div>
        {/* middle */}
        <div className='flex relative shadow-md border rounded-full justify-center items-center '>
            <input type='search' placeholder='' className='py-2.5 w-[20rem] rounded-full outline-0' />
            <div className='flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-600 '>
                <button className='w-full'>Place</button>
                <button className='border-l border-x px-6'>Time</button>
                <button className='w-full text-gray-400 pl-2'>People</button>
            </div>
            <div className='flex space-between bg-[#2814de] rounded-full p-2 mr-2'>
                <FiSearch className='text-white' />
            </div>
        </div>
        {/* right */}
        
        <div className='flex items-center pr-4 font-semibold text-gray-600'>
            <p>Rent a House</p>
            <GiWorld className='mx-4'/>
            <div className='flex items-center'>
            <FiMenu />
            <AiOutlineUser className='pr-4 text-black'/>
            </div>
        </div>
    </div>
    )
}

export default Navbar;