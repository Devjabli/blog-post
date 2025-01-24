import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../utils/authUserSlice';

export const Header = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.authUser)
  return (
    <div className='bg-[#726eff] w-full text-white font-[poppins]'>
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
                <div className='bg-slate-300 hover:bg-white text-[#726eff] p-1 h-fit rounded-sm'>
                  <Link to='/create'>
                    Create Post
                  </Link>
                </div>
                <div onClick={() => dispatch(logOut())} className=' hover:bg-white bg-slate-300 h-fit text-[#726eff] p-1 rounded-sm'>Logout</div>
                <div className='flex gap-2 items-center'>
                  <img src={userInfo.profile_image} alt="" className='w-[40px] h-[40px] rounded-full bg-white'/>
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
