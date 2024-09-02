import React from 'react'
import { FaStar } from "react-icons/fa6";

const Rental = ({ title, image, price, description }) => {
  return (
    <div className=''>
        <div className='relative '>
            <div className='grad absolute w-full h-full rounded-b-[1.3rem]'></div>
            <div className='flex'>
                {/* Image */}
                <img src={image} className='object-cover rounded-[1.3rem] md:h-[14rem] sm:h-[16rem] w-full' alt='house' />
                {/* Title */}
            <div className='absolute text-white font-bold bottom-3 left-6 text-[14px] items-center gap-4 flex'>
                {title}
                {/* <p className='text-[16px]'>{price}</p>             */}
            </div>
        </div>
    </div>
    {/* Description */}
        <div className='pt-3 flex justify-between items-start'>
            <div>
                <p className='max-w-[17rem] font-semibold text-[17px]'>{description}</p>
                <p className='max-w-[17rem] text-[16px] -mt-1 text-gray-400'>Mar 18 - Apr 1</p>
                <p className='max-w-[17rem] text-[16px] -mt-1'>{price}</p>
            </div>
        </div>
        <div className='flex items-center space-x-1'>
            <FaStar />
            <p className='text-[15px]'>4.9</p>
        </div>
    </div>
  )
}

export default Rental
