import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Paginate } from './Paginate'
import { useDispatch, useSelector } from 'react-redux'
import { postLists } from '../utils/postSlices'
import prf from '../images/profile-icon-9.png'


export const PostList = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page") || 1;

  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState(1);

  const dispatch = useDispatch();
  const { postList } = useSelector((state) => state.posts);


  useEffect(() => {
    fetch(`/post/?page=${page}`)
    .then((response) => response.json())
      .then((data) => {
        const { posts, pages } = data;
        setPosts(posts);
        setPages(pages);
      })
      .catch((error) => error);
  }, [page])

  return (
    <div className="bg-white py-4 text-left px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto flex justify-center flex-wrap gap-6">
          {posts.map((post) => (
            <div key={post._id} className="flex md:max-w-sm flex-col w-[350px] h-[400px] items-start justify-between shadow-indigo-700 shadow-2xl">
              <img src={post.image} alt="" className=' lg:w[200px]  lg:h-[280px]' />
              <div className="relative mt-2 flex items-center gap-x-4 px-2">
                <img alt="" src={post.User.profile_image === null ? prf : post.User.profile_image} className="w-[40px] h-[40px] border-slate-400 border-[1px] rounded-full bg-gray-50" />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <div>
                      {post.User.first_name + ' ' + post.User.last_name}
                    </div>
                  </p>
                  <p className="text-gray-600">sport</p>              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <time className="text-gray-500">
                  {post.createdAt}
                </time>
                <div
                  className="mt-1 text-sm w-full font-semibold text-gray-900"
                >
                  {post.title}
                </div>
              </div>
              <div className="group relative px-2">
                <h3 className="rounded-full text-sm bg-gray-50 font-medium text-gray-600 hover:bg-gray-100">
                  <div>
                    {post.subject.slice(0, 200)}
                  </div>
                </h3>
                <div className='text-right text-sm font-light mt-2 pb-2 underline bg-purple-900 w-fit float-right m-2 p-2 rounded-md text-white'>
                  <Link to={`/post/${post._id}/`}>
                    read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=''>
        <Paginate page={page} pages={pages}/>
      </div>
    </div>
  )
}
