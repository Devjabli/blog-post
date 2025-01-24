import React, { useEffect, } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postDetailThunk } from '../utils/postSlices'

export const PostDetail = () => {
  const dispatch = useDispatch();
  const { postDetailState } = useSelector(state => state.postDetail);
  const { userInfo } = useSelector(state => state.authUser);
  const { postId } = useParams();

  

  useEffect(() => {
    dispatch(postDetailThunk(postId));
  }, [dispatch, postId])

  return (
    <div className='flex justify-center py-20 px-4 lg:px-0'>
      <div className='w-[800px]' key={postDetailState._id}>
        <img alt='' src={postDetailState.image} className='w-[800px]' />
        <div className='py-4 flex items-center gap-2'>
          <img alt='' src={postDetailState.User?.profile_image} className='w-12 h-12 rounded-full' />
          <p>{postDetailState.User?.first_name + ' ' + postDetailState.User?.last_name}</p>
          <p>Date: {postDetailState.createdAt?.slice(0, 10)}</p>
          {userInfo.email === postDetailState.User?.email && (
            <div className='flex gap-2'>

              <button className='bg-green-700 hover:bg-green-400 hover:text-green-950 px-3 py-1 text-white text-xs rounded-sm'>
                <Link to={`/post/update/:id`}>
                  Update
                </Link>
              </button>
              <button className='bg-red-700 hover:bg-red-400 hover:text-red-950 px-3 py-1 text-white text-xs rounded-sm'>Delete</button>
            </div>
          )}
        </div>
        <div className='text-left'>
          <p className='py-4 font-bold text-2xl'>{postDetailState.title}</p>
          <h1>{postDetailState.subject}</h1>
        </div>
      </div>
    </div>
  )
}
