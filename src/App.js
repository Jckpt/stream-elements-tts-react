import React from 'react';
import './App.css';
import Head from './components/Head';
import Foot from './components/Foot';
import Main from './components/Main';

function App() {
  return (
    <div className='App'>
      <Head />
      <Main />
      <Foot />
    </div>
  );
}

export default App;
