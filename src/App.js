import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [mensaje, setMensaje] = useState('Qué es React?');

  const updatear = () => {
    // mensaje = 'Es una libreria de JS';
    // console.log(mensaje)
    setMensaje('Es una libreria de JS')
    console.log(mensaje)
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
          {mensaje}
        </a>
        <button onClick={updatear}>Responder</button>
      </header>
    </div>
  );
}

export default App;
