import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Paginate } from './Paginate'
import { useDispatch, useSelector } from 'react-redux'
import { userPostLists } from '../utils/postSlices'
import prf from '../images/profile-icon-9.png'


export const UserPosts = () => {


  const dispatch = useDispatch();
  const { postList } = useSelector((state) => state.posts);


  useEffect(() => {
    dispatch(userPostLists());
  }, [dispatch])

  return (
    <div className="bg-white py-4 text-left px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto flex justify-center flex-wrap gap-6">
          {postList.length === 0 ? (
            <div className='text-2xl mt-20'>you have no posts right now</div>
          ) : 
           postList.map((post) => (
            <div key={post._id} className="flex md:max-w-sm flex-col items-start justify-between shadow-indigo-700 shadow-2xl">
              <img src={post.image} alt="" className=' lg:w[200px]  lg:h-[280px]' />
              <div className="relative mt-2 flex items-center gap-x-4 px-2">
                <img alt="" src={post.User.profile_image === null ? prf : post.User.profile_image} className="w-[40px] h-[40px] border-slate-400 border-[1px] rounded-full bg-gray-50" />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <div>
                      {post.User.first_name + ' ' + post.User.last_name}
                    </div>
                  </p>
                  <p className="text-gray-600">role</p>
                </div>
              </div>
              <div className="flex items-center gap-x-4 text-xs px-2">
                <time className="text-gray-500">
                  {post.datetime}
                </time>
                <div
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.title}
                </div>
              </div>
              <div className="group relative px-2">
                <h3 className="mt-3 text-md font-semibold text-gray-900 group-hover:text-gray-600">
                  <div>
                    {post.subject.slice(0, 200)}
                  </div>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                <div className='text-right text-sm font-light mt-2 pb-2 underline bg-purple-900 w-fit float-right m-2 p-2 rounded-md text-white'>
                  <Link to={`/post/${post._id}/`}>
                    read moref
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='bg-green-600'>
        <Paginate />
      </div>
    </div>
  )
}
