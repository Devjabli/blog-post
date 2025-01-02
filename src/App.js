import './App.css';
import { Board } from './components/Board.js';
import { Header } from './components/Header';
import { SectionCards } from './components/SectionCards.js';


function App() {
  return (
    <div className="App">
      <Header/>
      <Board/>
      <SectionCards/>
    </div>
  );
}

export default App;
