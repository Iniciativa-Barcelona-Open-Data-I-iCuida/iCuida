import React, {Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import '../assets/css/Navbar.css';
 
class Navbar extends Component{

    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
        }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
            </ul>
            )
    
    const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">User</Link>
                </li>
                <li className="nav-item">
                    <a href="navlink" 
                    onClick={this.logOut.bind(this)} className="nav-link">Logout
                    </a>
                </li>
            </ul>
            )
        
        return(
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-dark bg-newcolor">
                    <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                        <span className="navbar-toggle-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-md-center"id="navbar1">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a to="/" className="nav-link">Home</a></li>
                        </ul>
                        {localStorage.usertoken ? userLink : loginRegLink}
                    </div>
                <div className="bs-example">
                    <nav aria-label="breadcrumb">   
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#Categorias#">Categorias</a></li>
                        <li className="breadcrumb-item"><a href="#Preguntas">Preguntas</a></li>
                        <li className="breadcrumb-item"><a href="#Preguntas">Respuestas</a></li>
                        </ol>
                    </nav>
                </div>
                </nav>
            </React.Fragment>
            )
        }
    }
        
export default withRouter(Navbar);