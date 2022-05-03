import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import { AppContextProvider } from './store/app-context';

function App() {


  return (
    <div className="App">
      <AppContextProvider> 
        <Header />
        <Products />
      </AppContextProvider>
    </div>
  );
}

export default App;
