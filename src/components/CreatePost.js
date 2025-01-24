import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {postCreateThunk} from '../utils/postSlices';
import { useNavigate } from 'react-router-dom';

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

            <div className='text-left text-sm rounded-sm py-3 my-2 px-2 bg-slate-400 w-fit'>
                <label for="files">Select Image ..</label>
                <input
                onChange={(e) => setImage(e.target.files[0])} 
                type="file"
                className='' 
                />
            </div>
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