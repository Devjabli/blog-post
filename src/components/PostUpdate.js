import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { postDetailApi, postUpdateApi } from '../utils/postSlices';
import {BsCloudUpload, BsFillCloudCheckFill} from 'react-icons/bs'


export const PostUpdate = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {postId} = useParams();

    const {postDetailState} = useSelector(state => state.postDetail);

    useEffect(() => {
        dispatch(postDetailApi())
    },[dispatch])
    
    
    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [image, setImage] = useState(null);
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form_data = new FormData();
        form_data.append("image", image);
        form_data.append("title", title);
        form_data.append("subject", subject);
        dispatch(postUpdateApi({postId, form_data}));
        navigate('/myposts');
        
    }

    return (
        <div className="max-w-3xl mx-auto font-[]">
            <p className='p-4'>Update post</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-3 max-w-3xl mx-auto px-4 mt-8 font-[poppins]"
        >
          <div key={postDetailState._id} className="md:flex gap-2 h-[100%] w-full">
            <div className="flex flex-col gap-2 w-full md:mb-0 mb-2">
              <input
                type="text"
                id='title'
                placeholder="Type here your title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border-[1px] border-indigo-800 p-2 rounded-sm"
                required
              />
              <textarea
                type="text"
                placeholder="Type here your subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="border-[1px] border-indigo-800 p-2 h-full rounded-sm"
                required
              ></textarea>
            </div>
  

          </div>
          <div className="flex gap-2 w-full">
  
            {!image ? (
              <label class="border-[1px] flex border-indigo-800 rounded-sm cursor-pointer bg-gray-50">
                <div class="flex gap-2 items-center justify-center p-2 text-gray-500 text-center">
                  <BsCloudUpload fontSize={30} />
                  <p class="text-xs text-gray-500">Click here to upload your image</p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </label>
            ) : (
              <div className='flex'>
  
              <label class="border-[1px] border-green-800 rounded-sm cursor-pointer bg-green-400">
                <div class="flex gap-2 items-center justify-center p-2 text-green-900 text-center">
                  <BsFillCloudCheckFill fontSize={30} />
                  <p class="text-xs">Ready for update</p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  onChange={(e) => setImage(e.target.files[0])}
                  />
              </label>
                <img src={postDetailState.image} alt={postDetailState._id} className='w-[40px]'/>
                  </div>
            )}
          </div>
          <button
            type="submit"
            className="cursor-pointer bg-indigo-600 text-white w-full py-2 px-4 rounded"
          >
            Update your post
          </button>
        </form>
      </div>
  
    )
}
