import React, { useEffect, } from 'react'
import imgone from '../images/bl.jpeg'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postDetailThunk } from '../utils/postSlices'

export const PostDetail = () => {
  const dispatch = useDispatch();
  const {postDetailState} = useSelector(state => state.postDetail);
  const {postId} = useParams();

  useEffect(() => {
    dispatch(postDetailThunk(postId));
  },[dispatch, postId])

  return (
    <div className='flex justify-center py-20 px-4 lg:px-0'>
        <div className='w-[800px]' key={postDetailState._id}>
            <img alt='' src={postDetailState.image} className='w-[800px]'/>
            <div className='py-4 flex items-center gap-2'>
                <img alt='' src={imgone} className='w-12 h-12 rounded-full'/>
                <p>Otmane Aroussi</p>
                <p>Date: 01/06/2025</p>
                <button className='bg-green-700 hover:bg-green-400 hover:text-green-950 px-3 py-1 text-white text-xs rounded-sm'>
                    <Link to={`/post/update/:id`}>
                    Update
                    </Link>
                </button>
                <button className='bg-red-700 hover:bg-red-400 hover:text-red-950 px-3 py-1 text-white text-xs rounded-sm'>Delete</button>
            </div>
            <div className='text-left'>
                <p className='py-4 font-bold text-2xl'>Lorem Ipsum is simply dummy text of the printing</p>
                <h1>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</h1>
            </div>
        </div>
    </div>
  )
}
