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
                    <Link to="/registrar" className="nav-link">Registrar</Link>
                </li>
            </ul>
            )
    
    const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">Usuario</Link>
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
                <div className="bs-example"> 
                <nav className="navbar navbar-expand-md navbar-dark bg-newcolor">
                    <a href="#iCuida" className="navbar-brand">iCuida</a>
                    <button className="navbar-toggler" 
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                    aria-controls="#navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                        <span className="navbar-toggle-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-md-center"id="navbarCollapse">
                        <ul className="navbar-nav">
                        <li className="nav-breadcrumb-item"><a href="#https://icuida.barcelona/categorias" className="nav-link active">Categorias</a></li>
                        <li className="nav-breadcrumb-item"><a href="#https://icuida.barcelona/preguntas" className="nav-link active">Preguntas</a></li>
                        <li className="nav-breadcrumb-item"><a href="#https://icuida.barcelona/respuestas" className="nav-link active">Respuestas</a></li>
                        {localStorage.usertoken ? userLink : loginRegLink}
                        </ul>
                    </div>
                </nav>
                </div>
            </React.Fragment>
            )
        }
    }
        
export default withRouter(Navbar);