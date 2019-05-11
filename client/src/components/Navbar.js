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
                    <Link to="/register" className="nav-link">Registrar</Link>
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
                        <li className="nav-breadcrumb-item dropdown"><a href="#https://icuida.barcelona/categorias" 
                            className="nav-link active dropdown-toggle"data-toggle="dropdown">Categorias</a>
                            <div className="dropdown-menu">
                                <a href="https://icuida.barcelona/categorias/derechos-laborales" 
                                    className="dropdown-item">Derechos Laborales
                                </a>
                                <a href="https://icuida.barcelona/categorias/tramites-legales" 
                                    className="dropdown-item">Tramites Legales
                                </a>
                                <a href="https://icuida.barcelona/categorias/seguridad-social" 
                                    className="dropdown-item">Seguridad Social
                                </a>
                                <a href="https://icuida.barcelona/categorias/extranjería" 
                                    className="dropdown-item">Extranjería
                                </a>
                                <a href="https://icuida.barcelona/categorias/centros-de-suporte" 
                                    className="dropdown-item">Centros de Suporte
                                </a>
                                <a href="https://icuida.barcelona/categorias/cuidado-de-dependientes" 
                                    className="dropdown-item">Cuidado de Dependientes
                                </a>
                                <a href="https://icuida.barcelona/categorias/cuidado-de-mayores" 
                                    className="dropdown-item">Cuidado de Mayores
                                </a>
                                <a href="https://icuida.barcelona/categorias/canguros" 
                                    className="dropdown-item">Canguros
                                </a>
                                <a href="https://icuida.barcelona/categorias/consejos-de-limpieza" 
                                    className="dropdown-item">Consejos de Limpieza
                                </a>
                                <a href="https://icuida.barcelona/categorias/ayudas-prácticas" 
                                    className="dropdown-item">Ayudas Prácticas
                                </a>
                                <a href="https://icuida.barcelona/categorias/recursos-de-barcelona" 
                                    className="dropdown-item">Recursos de Barcelona
                                </a>
                                <a href="https://icuida.barcelona/categorias/otros" 
                                    className="dropdown-item">Otros
                                </a>
                            </div>
                        </li>
                        <li className="nav-breadcrumb-item">
                            <a href="#https://icuida.barcelona/preguntas" 
                                className="nav-link active">Preguntas</a>
                        </li>
                        <li className="nav-breadcrumb-item">
                            <a href="#https://icuida.barcelona/respuestas" 
                                className="nav-link active">Respuestas</a>
                        </li>
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