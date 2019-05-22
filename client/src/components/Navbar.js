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
                    <Link to="/perfil" className="nav-link">Usuario</Link>
                </li>
                <li className="nav-item">
                    <Link to="navlink"
                    onClick={this.logOut.bind(this)} className="nav-link">Logout
                    </Link>
                </li>
            </ul>
            )
        
        return(
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-dark bg-newcolor">
                    <Link to="/" className="navbar-brand">iCuida</Link>
                    <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                    aria-controls="#navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-md-center"id="navbarCollapse">
                        <ul className="navbar-nav">
                        <li className="nav-breadcrumb-item dropdown"><Link to="#"
                            className="nav-link active dropdown-toggle"data-toggle="dropdown">Categorias</Link>
                            <div className="dropdown-menu">
                                <Link to={{
                                    pathname: "/preguntas",
                                    state: {
                                            tag: 'derechos-laborales'
                                            }
                                    }}
                                    className="dropdown-item">Derechos Laborales
                                </Link>
                                <Link to={{
                                    pathname: "/preguntas",
                                    state: {
                                        tag: 'tramites-legales'
                                    }
                                }}
                                    className="dropdown-item">Tramites Legales
                                </Link>
                                <Link to={{
                                    pathname: "/preguntas",
                                    state: {
                                        tag: 'seguridad-social'
                                    }
                                }}
                                    className="dropdown-item">Seguridad Social
                                </Link>
                                <Link to={{
                                    pathname: "/preguntas",
                                    state: {
                                        tag: 'extranjeria'
                                    }
                                }}
                                    className="dropdown-item">Extranjería
                                </Link>
                                <Link to={{
                                    pathname: "/preguntas",
                                    state: {
                                        tag: 'centros-soport'
                                    }
                                }}
                                    className="dropdown-item">Centros de Suporte
                                </Link>
                                <Link to={{
                                    pathname: "/preguntas",
                                    state: {
                                        tag: 'cuidado-dependientes'
                                    }
                                }}
                                    className="dropdown-item">Cuidado de Dependientes
                                </Link>
                                <Link to={{
                                    pathname: "/preguntas",
                                    state: {
                                        tag: 'cuidado-mayores'
                                    }
                                }}
                                    className="dropdown-item">Cuidado de Mayores
                                </Link>
                                <Link to={{
                                    pathname: "/preguntas",
                                    state: {
                                        tag: 'canguros'
                                    }
                                }}
                                    className="dropdown-item">Canguros
                                </Link>
                                <Link to={{
                                    pathname: "/preguntas",
                                    state: {
                                        tag: 'consejos-limpieza'
                                    }
                                }}
                                    className="dropdown-item">Consejos de Limpieza
                                </Link>
                                <Link to={{
                                    pathname: "/preguntas",
                                    state: {
                                        tag: 'ayudas-practicas'
                                    }
                                }}
                                    className="dropdown-item">Ayudas Prácticas
                                </Link>
                                <Link to={{
                                    pathname: "/preguntas",
                                    state: {
                                        tag: 'derechos-laborales'
                                    }
                                }}
                                    className="dropdown-item">Recursos de Barcelona
                                </Link>
                                <Link to={{
                                    pathname: "/preguntas",
                                    state: {
                                        tag: 'derechos-laborales'
                                    }
                                }}
                                    className="dropdown-item">Otros
                                </Link>
                            </div>
                        </li>
                        <li className="nav-breadcrumb-item">
                            <Link to="/preguntas"
                                className="nav-link active">Preguntas</Link>
                        </li>
                        <li className="nav-breadcrumb-item">
                            <Link to="/respuestas"
                                className="nav-link active">Respuestas</Link>
                        </li>
                        {localStorage.usertoken ? userLink : loginRegLink}
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
            )
        }
    }
        
export default withRouter(Navbar);