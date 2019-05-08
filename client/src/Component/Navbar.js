import React, {Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import '../assets/css/Navbar.css';

class Navbar extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                    Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        User
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="navlink" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
            </ul>
        )
        return(
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
                <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
                <div className="bs-example">
            <nav> 
                <ol className="breadcrumb">
                    <li className="breadcrumb-item1"><a href="#Breadcrumb1">1</a></li>
                    <li className="breadcrumb-item2"><a href="#Breadcrumb2">2</a></li>
                    <li className="breadcrumb-item3"><a href="#Breadcrumb3">3</a></li>
                    <li className="breadcrumb-item4"><a href="#Breadcrumb4">4</a></li>
                </ol>
            </nav>
            </div>
            </nav>
        )
    }
}

export default withRouter(Navbar);