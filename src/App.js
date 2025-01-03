import './App.css';
import { Board } from './components/Board.js';
import { Footer } from './components/Footer.js';
import { Header } from './components/Header';
import { SectionCards } from './components/SectionCards.js';


function App() {
  return (
    <div className="App">
      <Header/>
      <Board/>
      <SectionCards/>
      <Footer/>
    </div>
  );
}

export default App;
