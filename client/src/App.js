import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switc } from "react-router-dom";
import './App.css'
//import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Questions from './components/Questions'
import Question from './components/Question'
//import Error from './components/Error'

class App extends Component {



    render() {
        return (
            <Router>
                <div className="App icuida icuida-blue">
                    <Navbar/>
                    <Route exact path="/" component={Landing}/>
                    <div className="p-4">
                        <div className="icuida icuida-blue container">
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/perfil" component={Profile}/>
                            <Route exact path="/preguntas" component={Questions}/>
                            <Route exact path="/preguntas/:id" component={Question}/>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
