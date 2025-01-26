import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postCreateThunk } from '../utils/postSlices';
import { useNavigate } from 'react-router-dom';
import { BsCloudUpload, BsFillCloudCheckFill } from 'react-icons/bs'


export const CreatePost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        navigate('/posts');
        e.preventDefault();
        const form_data = new FormData();
        form_data.append("image", image);
        form_data.append("subject", subject);
        form_data.append("title", title);
        dispatch(postCreateThunk(form_data))
    }



    return (
        <form onSubmit={handleSubmit} className='mx-auto px-4 py-20 max-w-2xl'>
            <div className="text-left py-4 text-xl font-bold text-purple-900">Create Post</div>

            {!image ? (
            <label class="border-[1px] flex text-lg border-indigo-800 rounded-sm cursor-pointer bg-gray-50">
                <div class="flex gap-2 items-center justify-center p-2 text-gray-500 text-center">
                    <BsCloudUpload fontSize={30} />
                    <p class="text-xs text-gray-500">Upload your image</p>
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
                        <p class="text-xs">Your Image is ready</p>
                    </div>
                    <input
                        id="dropzone-file"
                        type="file"
                        class="hidden"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </label>
                <img src={image} alt='' className='w-[40px]' />
            </div>
          )}
            <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className='w-full p-4 my-4 text-xl outline-none border-purple-800 border-[1px] rounded-lg'
                placeholder="Enter title of your subject..."
            />
            <div
                className="overflow-hidden p-4 rounded-lg border-purple-800 border-[1px]"
            >

                <textarea
                    type='text'
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full align-top focus:ring-0 sm:text-sm outline-none"
                    rows="6"
                    placeholder="Enter any additional order notes..."
                />

                <div className="flex items-center justify-end gap-2 bg-white p-3">
                    <button
                        type="submit"
                        className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
                    >
                        Create Post
                    </button>
                </div>
            </div>
        </form>
    )
}