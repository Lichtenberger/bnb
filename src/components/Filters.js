import React from 'react'
import { PiKeyBold, PiMountains, PiFireBold, /* PiSailboatBold, */  } from "react-icons/pi";
import { FaAccessibleIcon } from "react-icons/fa";
import { /* GiBowlingStrike,*/ GiUfo } from "react-icons/gi";
import Filter from "./Filter"

const Filters = () => {
    const sorting = [
        {title:'Private', icon: <PiKeyBold className='text-[#e1ca48]'/> },
        {title:'Mountains', icon: <PiMountains className='text-[#3ef33e]' /> },
        {title:'Trending', icon: <PiFireBold className='text-[#bf2020]' /> },
        {title:'Accessible', icon: <FaAccessibleIcon className='text-[#2b2bfcc3]'/> },
        {title:'Unique', icon: <GiUfo className='text-[#a6f0a6]'/> },
    ]
  return (
    <div className=' '>
      <div className='flex justify-start gap-2 mt-4 px-3 '>
        {sorting.map((obj) => (
            <Filter title={obj.title} icon={obj.icon}/>) )}
      </div>
    </div>
  )
}

export default Filters
