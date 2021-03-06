import React, { Component} from 'react';
import { login } from './UserFunctions';
import { Link } from 'react-router-dom';

class Login extends Component {

    state = {
        email: '',
        password: '',
    }


    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if(res) {
                this.props.history.push('/perfil')
            }})
    }

    render() {
        return (
            <div id="Login" className="icuida-blue container-fluid">
                <div className="row">
                    <div className="mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">iCuida</h1>
                            <div className="form-group">
                                <label htmlFor="email">Correo Eléctronico</label>
                                <input type="email"
                                       className="form-control"
                                       name="email"
                                       placeholder="Entrar Correo"
                                       value={this.state.email}
                                       onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Contraseña (Mínimo 8 caracteres)</label>
                                <input type="password"
                                       className="form-control"
                                       name="password"
                                       placeholder="Entrar Contraseña"
                                       value={this.state.password}
                                       onChange={this.onChange}/>
                            </div>
                            <button type="submit"
                                    className="btn btn-lg btn-primary btn-block"
                                    aria-pressed="true">
                                Entrar
                            </button>
                            <hr></hr> 
                            <div className="m-3">
                                <Link to="/register"><span className="hint-text small">¿Todavía no eres miembro?</span>!</Link>
                            </div>
                        </form>
                        <div className="text-center social-btn">
                            <a href="#RegistrarFacebook" className="btn btn-primary btn-block"><i className="fa fa-facebook"> </i> Conéctate con <b>Facebook</b></a>
                            <a href="#RegistrarGoogle" className="btn btn-danger btn-block"><i className="fa fa-google"> </i>  Conéctate con <b>Google</b></a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Login;