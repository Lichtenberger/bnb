import React from 'react'

const Filter = ({ title, icon }) => {
  return (
    <div className='flex items-center gap-1 py-1 px-3 sm:px-4 rounded-full text-white bg-[#7d70f7] hover:bg-[#f97171] duration-200 ease-out text-[14px] sm:text[16px]'>
        {icon}
        {title}
    </div>
  )
}

export default Filter
