import React from 'react'
import { IoIosLogIn } from "react-icons/io";

export const Header = () => {
  return (
    <div className='bg-[#726eff] text-white font-[poppins]'>
      <div className='flex justify-between items-center p-8 w-3/4 m-auto'>
        <div className="font-[oswald] font-bold text-2xl">
          OJBlogger
        </div>
        <div>
          <ul className='flex gap-12'>
            <li>Home</li>
            <li>Posts</li>
            <li>About</li>
          </ul>
        </div>
        <div className="flex items-center gap-1 text-xl">
          <IoIosLogIn />
          <div className='text-xs'>Login</div>
        </div>
      </div>
    </div>
  )
}
