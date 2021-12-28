
import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Create from './Components/Create';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
                
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/createhuman" component={Create} />
            </BrowserRouter>
    </div>
  );
}

export default App;
