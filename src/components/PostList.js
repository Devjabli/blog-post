import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Paginate } from './Paginate'


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
          {posts.length > 0 ? posts.map((post) => (

            <div className=" bg-white border w-[350px] border-gray-200 rounded-lg shadow-indigo-800 shadow-xl" key={post._id}>
              <img className="rounded-t-lg h-[250px] w-[350px]" src={post.image} alt="" />
              <p className='text-xs text-slate-600 float-right p-1'>Date created: {post.createdAt.slice(0, 10)}</p>
              <div className='flex gap-3 items-center text-sm text-slate-600 ml-4 mt-4'>
                <img src={post.User.profile_image} alt="" className="w-[50px] h-[50px]  rounded-full border-indigo-900 border-[2px]" />
                <p>{post.User.first_name + ' ' + post.User.last_name}</p>
              </div>
              <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{post.title}</h5>

                <p className="mb-3 font-normal text-gray-700 h-fit" style={{
                  whiteSpace: 'pre-wrap',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                }}>{post.subject.slice(0, 180)}</p>
                <Link to={`/post/${post._id}`}>
                  <div className="bg-indigo-600 cursor-pointer text-sm text-white w-fit float-right my-2 p-1 px-3 rounded-lg">
                    Read more
                  </div>
                </Link>
              </div>
            </div>
          )) : (
            <div className='text-2xl mt-20'>No Posts Avaialable</div>
          )}
        </div>
        <div>
          <Paginate page={page} pages={pages} />
        </div>
      </div>
    </div>
  );
};
