import React from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import logo from './assets/pokemon-logo.png';

function App() {
  return (
    <>
      <img src={logo} alt="Logo" />
      <CardList />
    </>
  );
}

export default App;
