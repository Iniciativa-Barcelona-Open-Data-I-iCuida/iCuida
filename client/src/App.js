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
                <main className="App icuida icuida-blue">
                    <Navbar/>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/login" component={Login}/>
                        <div className="icuida icuida-blue container">
                            <Route exact path="/perfil" component={Profile}/>
                            <Route exact path="/preguntas" component={Questions}/>
                            <Route exact path="/preguntas/:id" component={Question}/>
                        </div>
                    </main>
            </Router>
        );
    }
}

export default App;
