import React from 'react'

export const CreatePost = () => {
    return (
        <div className='mx-40 py-20'>
            <div className="text-left py-4 text-xl font-bold text-purple-900">Update Post</div>

            <div className='text-left text-sm rounded-sm py-3 my-2 px-2 bg-slate-400 w-fit'>
                <label for="files">Select Image ..</label>
                <input id="files" className='hidden' type="file" />
            </div>
            <input
                type="text"
                className='w-full p-4 my-4 text-xl outline-none border-purple-800 border-[1px] rounded-lg'
                placeholder="Enter title of your subject..."
                />
            <div
                className="overflow-hidden p-4 rounded-lg border-purple-800 border-[1px]"
            >
                <textarea
                    id="OrderNotes"
                    className="w-full resize-none align-top focus:ring-0 sm:text-sm outline-none"
                    rows="4"
                    placeholder="Enter any additional order notes..."
                ></textarea>

                <div className="flex items-center justify-end gap-2 bg-white p-3">
                    <button
                        type="button"
                        className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
                    >
                        Create Post
                    </button>
                </div>
            </div>
        </div>
    )
}
