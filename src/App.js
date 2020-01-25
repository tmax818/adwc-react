import React from 'react';
import logo from './images/logo.png';
import './App.css';

function App() {
  return (
    <div className='page'>
    <div className="header-wrapper">
    <div className="logo"><a href="/"><img src={logo}/></a></div>
    </div> 
      <div className='page-wrapper'>
      </div>
    </div>
  );
}

export default App;
