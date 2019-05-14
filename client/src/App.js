import React, { /*Component*/ } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'
//import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Questions from './components/Questions'
import Question from './components/Question'
//import Answers from './components/Anwsers'
//import Answer from './components/Answer'
//import Error from './components/Error'

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
            {/*<Route exact path="/answers"  component={Answer} />*/} 
            {/*<Route exact path="/answer/:qid"  component={Answer} />*/}
            {/*<Route component={Error} />*/} 
        </div>
      </div>
    </Router>
  );
}

export default App;