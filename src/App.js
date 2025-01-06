import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home.js';
import { Routes, Route } from 'react-router-dom';
import { PostDetail } from './components/PostDetail.js';
import { PostUpdate } from './components/PostUpdate.js';
import { CreatePost } from './components/CreatePost.js';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/post/:id' element={<PostDetail/>}></Route>
        <Route path='/post/update/:id' element={<PostUpdate/>}></Route>
        <Route path='/create' element={<CreatePost/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
