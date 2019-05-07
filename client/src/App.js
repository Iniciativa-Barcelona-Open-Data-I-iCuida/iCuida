import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './Component/Navbar'
import Landing from './Component/Landing'
import Login from './Component/Login'
import Register from './Component/Register'
import Profile from './Component/Profile'
import Questions from './Component/Questions'
import Question from './Component/Question'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route exact path="/" component={Landing}/>
        <div className="container">
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/questions" component={Questions}/>
            <Route exact path="/questions/:id" component={Question}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
