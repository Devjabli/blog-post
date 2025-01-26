import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const SectionCards = () => {

  // State to store fetched posts
  const [posts, setPosts] = useState([]);

  // Effect hook to fetch posts data when the component mounts
  useEffect(() => {
    fetch(`/post/`)  // Fetch the posts from the server
      .then((response) => response.json())  // Parse the response as JSON
      .then((data) => {
        const { posts } = data;  // Extract posts data from the response
        setPosts(posts);  // Update state with the posts
      })
      .catch((error) => console.error(error));  // Handle any errors during the fetch
  }, []);  // Empty dependency array means this runs only once when the component mounts

  return (
    <div className="bg-white py-4 text-left px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto flex justify-center flex-wrap gap-2">
          {/* If posts are available, display up to the first 3 posts */}
          {posts.length > 0 ? posts.slice(0, 3).map((post) => (

            <div className="bg-white border w-[350px] border-gray-200 rounded-lg shadow-indigo-800 shadow-xl" key={post._id}>
              {/* Display post image */}
              <img className="rounded-t-lg h-[250px] w-[350px]" src={post.image} alt="" />
              
              {/* Display post creation date */}
              <p className='text-xs text-slate-600 float-right p-1'>Date created: {post.createdAt.slice(0, 10)}</p>
              
              <div className='flex gap-3 items-center text-sm text-slate-600 ml-4 mt-4'>
                {/* Display user profile image */}
                <img src={post.User.profile_image} alt="" className="w-[50px] h-[50px] rounded-full border-indigo-900 border-[2px]" />
                {/* Display user full name */}
                <p>{post.User.first_name + ' ' + post.User.last_name}</p>
              </div>
              
              <div className="p-5">
                {/* Display post title */}
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{post.title}</h5>

                {/* Display a snippet of the post subject */}
                <p className="mb-3 font-normal text-gray-700 h-fit" style={{
                  whiteSpace: 'pre-wrap',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                }}>
                  {post.subject.slice(0, 180)}  {/* Show first 180 characters of the subject */}
                </p>
                
                {/* Link to the full post */}
                <Link to={`/post/${post._id}`}>
                  <div className="bg-indigo-600 cursor-pointer text-sm text-white w-fit float-right my-2 p-1 px-3 rounded-lg">
                    Read more
                  </div>
                </Link>
              </div>
            </div>
          )) : (
            // Message when no posts are available
            <div className='text-2xl mt-20'>No Posts Available</div>
          )}
        </div>
      </div>
    </div>
  );
}
