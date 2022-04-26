import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // let sarasa = 'Qué es React???';
  const [sarasa, setSarasa] = useState('Qué es React???');

  const updatear = () => {
    // sarasa = 'Es una libreria de JS';
    // console.log(sarasa)
    setSarasa('Es una libreria de JS')
    console.log(sarasa)
  }




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {sarasa}
        </a>
        <button onClick={updatear}>Responder</button>
      </header>
    </div>
  );
}

export default App;
