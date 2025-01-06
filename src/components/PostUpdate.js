import React from 'react'

export const PostUpdate = () => {
    return (
        <div className='mx-40 py-20'>
            <div className="text-left py-4">Order notes</div>
            
            <input
            type="file"
            id="img"
            name="img"
            alt='upload'
            className='w-full py-4'
            title='Upload Image'
          />
            <div
                className="overflow-hidden p-4 rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
                <textarea
                    id="OrderNotes"
                    className="w-full resize-none border-none align-top focus:ring-0 sm:text-sm outline-none"
                    rows="4"
                    placeholder="Enter any additional order notes..."
                ></textarea>

                <div className="flex items-center justify-end gap-2 bg-white p-3">
                    <button
                        type="button"
                        className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    )
}
