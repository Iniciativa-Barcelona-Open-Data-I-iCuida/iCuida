import React, { Component } from 'react';
import '../assets/css/Profile.css'
import jwt_decode from 'jwt-decode';
import Logo from '../assets/images/icono-iCuida-pantone-7416-naranja-01.png';



class Profile extends Component{
    constructor() {
        super()
        this.state = {
            user_name: '',
            email: ''
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        console.log(decoded)
        this.setState({
            user_name: decoded.first_name + ' ' + decoded.last_name,
            email: decoded.email
        })
    }

    render() {
        return(
            <div className="Profile container p-0">

                        <div className="card hovercard">
                            <div className="cardheader">

                            </div>
                            <div className="avatar">
                                <img alt="" src={Logo}/>
                            </div>
                            <div className="info">
                                <div className="user-info">

                                     <p><span className="font-weight-bolder">Nombre: </span><span>iCuida</span></p>
                                    <p><span className="font-weight-bolder">E-Mail</span>: <span>icuidabarcelona@gmail.com</span></p>

                                </div>
                            </div>
                            <div className="bottom mt-3">
                                <a className="ml-2 mr-2 border rounded-pill p-2" href="">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a className="ml-2 mr-2 border rounded-pill p-2" rel="publisher"
                                   >
                                    <i className="fa fa-google-plus"></i>
                                </a>
                                <a className="ml-2 mr-2 border rounded-pill p-2" rel="publisher"
                                   >
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </div>
                        </div>
            </div>
        )
    }
}

export default Profile;