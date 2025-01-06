import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='bg-[#726eff] w-full text-white font-[poppins]'>
      <div className='flex justify-between items-center p-8 w-full m-auto'>
        <div className="font-[oswald] font-bold text-2xl">
          OJBlogger
        </div>
        <div>
          <ul className='flex gap-12'>
            <Link to='/'>Home</Link>
            <li>Posts</li>
            <li>About</li>
          </ul>
        </div>
        <div className="flex items-center gap-4 text-sm font-bold">
          <div className='bg-slate-300 hover:bg-white text-[#726eff] p-1 rounded-sm'>
            <Link to='/create'>
            Create Post
            </Link>
          </div>
          <div className='w-fit flex items-center gap-2 hover:bg-white bg-slate-300 text-[#726eff] p-1 rounded-sm'>
            <Link to='/login' className='text-sm'>Login</Link>
          </div>
          <div className='w-fit flex items-center gap-2 hover:bg-white bg-slate-300 text-[#726eff] p-1 rounded-sm'>
            <Link to='/register' className='text-sm'>Register</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
