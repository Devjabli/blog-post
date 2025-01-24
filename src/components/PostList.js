import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Paginate } from './Paginate'
import prf from '../images/profile-icon-9.png'


export const PostList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page") || 1;

  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState(1);


  useEffect(() => {
    fetch(`/post/?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        const { posts, pages } = data;
        setPosts(posts);
        setPages(pages);
      })
      .catch((error) => console.error(error));
  }, [page]);

  return (
    <div className="bg-white py-4 text-left px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto flex justify-center flex-wrap gap-2">
          {posts.map((post) => (
            <div key={post._id} className="flex md:max-w-sm flex-col w-[350px] items-start justify-between shadow-indigo-700 shadow-2xl">
              <img src={post.image} alt="" className="" />
              <div className="mt-2 flex items-center gap-x-2 px-2">
                <img
                  alt="User profile"
                  src={post.User?.profile_image ?? prf}
                  className="w-[40px] h-[40px] border-slate-400 border-[1px] rounded-full bg-gray-50"
                />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    {post.User?.first_name + ' ' + post.User?.last_name}
                  </p>
                  <p className="text-gray-600">sport</p>
                </div>
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <time className="text-gray-500">{post.createdAt.slice(0, 10)}</time>
                <div className="mt-1 text-sm w-full font-semibold text-gray-900">{post.title}</div>
              </div>
              <div className="w-full px-2">
                <h3 className="rounded-full text-sm  bg-gray-500 font-medium text-gray-600 hover:bg-gray-100">
                  {post.subject?.slice(0, 200) ?? 'No subject available'}
                </h3>
                <div className="text-right text-sm font-light mt-2 pb-2 underline bg-purple-900 w-fit m-2 p-2 rounded-md text-white">
                  <Link to={`/post/${post._id}/`}>read more</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          
            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
          <div className="p-5">
            
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
            </div>
          </div>
        </div>
        <div>
          <Paginate page={page} pages={pages} />
        </div>
      </div>
    </div>
  );
};
