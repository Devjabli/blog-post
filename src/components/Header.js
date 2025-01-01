import React from 'react'

export const Header = () => {
  return (
    <div className='bg-[#726eff] text-white font-[poppins]'>
      <div className='flex justify-between items-center p-8'>
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
        <div className="">login</div>
      </div>
    </div>
  )
}
