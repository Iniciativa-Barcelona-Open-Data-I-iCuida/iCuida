import React, { Component} from 'react';
import { register } from './UserFunctions';
import '../assets/css/Register.css'


class Register extends Component {

        state = {
            user_name: '',
            email: '',
            password: '',

        }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()

        const user = {
            user_name: this.state.user_name,
            email: this.state.email,
            password: this.state.password
        }

        register(user).then(res => {
            if(res) {
                this.props.history.push('/login')
            }
        })
    }

    render() {
        return (
            <div id="Register" className="icuida-blue container">
                <div className="row">
                {/*  EMAIL IS REQUIRED
                <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon">
                            <i className="fa fa-lock"> </i>
                            </span>
<<<<<<< HEAD
                            <input type="password" 
                                autoComplete="password"
                                className="form-control" 
                                name="password" 
                                placeholder="Password" 
=======
                            <input type="password"
                                className="form-control"
                                name="password"
                                placeholder="Password"
>>>>>>> 06f0553cacb472c4b287e657959269990dc917a7
                                required="required">
                            </input>
                        </div>
                </div>
                 */}
                    <div className="col-m-6 mt-5 mx-auto">
                        <form  className= "loginform" noValidate onSubmit={this.onSubmit}>
                        <h1 className="text-center h3 mb-3 font-weight-normal">Registrar</h1>
                        <hr></hr>
                            <div className="form-group">
                            <label htmlFor="user_name">Nombre de Usuario</label>
                            <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fa fa-user"> </i>
                            </span>
                            <input type="user_name"
                                    autoComplete="username"
                                    className="form-control"
                                    name="user_name"
                                    placeholder="Entrar Nombre"
                                    required="required"
                                    value={this.state.last_name}
                                    onChange={this.onChange}
                            />
                            </div>
                        </div>
                            <div className="form-group">
                                <label htmlFor="email">Correo Electrónico</label>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-lock"> </i>
                                    </span>
                                <input type="email"
                                       autoComplete="email"
                                       className="form-control"
                                       name="email"
                                       placeholder="Entrar Correo"
                                       required="required"
                                       value={this.state.email}
                                       onChange={this.onChange}
                                />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-lock"> </i>
                                    </span>
                                <input type="password"
                                       autoComplete="current-password"
                                       className="form-control"
                                       name="password"
                                       placeholder="Entrar Contraseña"
                                       required="required"
                                       value={this.state.password}
                                       onChange={this.onChange}
                                />
                                </div>
                            </div>
                            <div className="form-group">
                            </div>
                            <div>
                                <button className="btn btn-primary w-100" type="submit"> Registrar</button>
                            </div>

                            <a href="#Olvidarcontraseña"
                                className="pull-right text-success">Olvidaste la contraseña?
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;