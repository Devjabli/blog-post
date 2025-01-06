import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home.js';
import { Routes, Route } from 'react-router-dom';
import { PostDetail } from './components/PostDetail.js';
import { PostUpdate } from './components/PostUpdate.js';
import { CreatePost } from './components/CreatePost.js';
import { useLocation } from 'react-router-dom';
import { Login } from './components/Login.js';

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/login' && <Header />}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/post/:id' element={<PostDetail />}></Route>
        <Route path='/post/update/:id' element={<PostUpdate />}></Route>
        <Route path='/create' element={<CreatePost />}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>

    </>
  );
}

export default App;
