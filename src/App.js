import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home.js';
import { Routes, Route } from 'react-router-dom';
import { PostDetail } from './components/PostDetail.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/post/:id' element={<PostDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
