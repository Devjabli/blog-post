import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../utils/authUserSlice';

export const Header = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const { userInfo } = useSelector((state) => state.authUser)

  const handleLogOut = () => {
    dispatch(logOut());
    setOpen(false);
  }
  return (
    <div className='bg-[#5c57e9] text-white font-[poppins]'>
      <div className={`absolute flex flex-col text-center justify-center w-[200px] rounded-md p-2 gap-3 right-0 top-[120px] bg-[#726eff] ${open === false && 'hidden'}`}>
        <div className='flex flex-col gap-3 items-start' onClick={() => setOpen(!open)}>
          <Link to='/create' className='bg-indigo-600 w-full p-1'>Create Post</Link>
          <Link to='/myposts' className='bg-indigo-600 w-full p-1'>my posts</Link>
          <button onClick={handleLogOut} className='bg-indigo-600 w-full p-1'>logout</button>
        </div>
        <div className='lg:invisible visible flex flex-col items-start gap-3' onClick={() => setOpen(!open)}>
          <Link to='/' className='bg-indigo-600 w-full p-1'>Home</Link>
          <Link to='/posts' className='bg-indigo-600 w-full p-1'>Posts</Link>
        </div>
      </div>
      <div className='flex justify-between items-center p-8 w-full m-auto'>
        <div className="font-[oswald] font-bold text-2xl">
          OJBlogger
        </div>
        <div className='invisible lg:visible'>
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
                <div onClick={() => setOpen(!open)} className='flex gap-2 items-center p-2 cursor-pointer'>
                  <img src={userInfo.profile_image} alt="" className='w-[40px] h-[40px] rounded-full bg-white' />
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
