import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home.js';
import { Routes, Route } from 'react-router-dom';
import { PostDetail } from './components/PostDetail.js';
import { PostUpdate } from './components/PostUpdate.js';
import { CreatePost } from './components/CreatePost.js';
import { useLocation } from 'react-router-dom';
import { Login } from './components/Login.js';
import { Register } from './components/Register.js';
import { PostList } from './components/PostList.js';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  const {userInfo} = useSelector((state) => state.authUser)

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }, [userInfo])

  return (
    <>
      {(location.pathname !== '/register' && <Header/>)
      && 
      (location.pathname !== '/login' && <Header/>)}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/posts' element={< PostList/>}></Route>
        <Route path='/post/:postId' element={<PostDetail />}></Route>
        <Route path='/post/update/:id/' element={<PostUpdate />}></Route>
        <Route path='/create' element={<CreatePost />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>

    </>
  );
}

export default App;
