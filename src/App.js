import React from 'react';
import logo from './images/logo.png';
import {BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import Members from './components/Members'
import './App.css';

function App() {
  return (
    <div className='page'>
    <div className="header-wrapper">
    <div className="logo"><a href="/"><img src={logo}/></a></div>
    </div> 
      <div className='page-wrapper'>
      <BrowserRouter>
      <Header />
      <Switch>
      <Route exact path='/'>
      <Home/>
      </Route>
      <Route path='/members'>
      <Members/>
      </Route>
      </Switch>
      </BrowserRouter>
      
      </div>
    </div>
  );
}

export default App;
