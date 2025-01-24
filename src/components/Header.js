import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../utils/authUserSlice';

export const Header = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const { userInfo } = useSelector((state) => state.authUser)
  return (
    <div className='bg-[#726eff] w-full text-white font-[poppins]'>
      <div className={`absolute flex flex-col items-start p-2 gap-3 right-12 top-[100px] bg-green-700 ${open == false && 'hidden'}`}>
        <button>Create Post</button>
        <button>logout</button>
      </div>
      <div className='flex justify-between items-center p-8 w-full m-auto'>
        <div className="font-[oswald] font-bold text-2xl">
          OJBlogger
        </div>
        <div>
          <ul className='flex gap-12'>
            <Link to='/'>Home</Link>
            <Link to='/posts'>Posts</Link>
            <li>About</li>
          </ul>
        </div>
        <div className="flex items-center gap-4 text-sm font-bold">
          <div className='w-fit flex items-center gap-2'>
            {userInfo && userInfo.email ? (
              <div className='flex gap-2 items-center'>
                <div className='flex gap-2 items-center border-[1px] p-2 rounded-md'>
                  <img src={userInfo.profile_image} onClick={() => setOpen(!open)} alt="" className='w-[40px] h-[40px] rounded-full bg-white'/>
                  <div className='text-white p-1 h-fit rounded-sm'>{userInfo.first_name}</div>
                </div>
              </div>
            ) : (
              <Link to='/login' className='text-sm'>Login</Link>
            )}
            {!userInfo.email && (

              <div className='w-fit flex items-center gap-2 hover:bg-white bg-slate-300 text-[#726eff] p-1 rounded-sm'>
                <Link to='/register' className='text-sm'>Register</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
