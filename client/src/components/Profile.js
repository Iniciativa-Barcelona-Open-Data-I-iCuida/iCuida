import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

class Profile extends Component{
    constructor() {
        super()
        this.state = {
            profile_img: '', 
            user_name: '',
            email: ''
        }
    }

    componentDidMount() {/*
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        this.setState({
            user_name: decoded.user_name,
            email: decoded.email
        })
    */}

    render() {
        return(
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-12 mx-auto">
                        <div className="Card">
                        <h4 className="card-title text-center"> PROFILE</h4>
                        </div>
                        {/*<img className="card-img-top text-center" 
                             src="girl.png" 
                             alt="Profile image">
                        </img>*/}
                        <div className="card-body">
                        </div>
                    </div>
                    <table className="table-col-md-6 mx-auto">
                        <tbody>
                        <tr>
                            <td>Profile Image</td>
                            <td>{/*this.state.profile_img*/}</td>
                        </tr>    
                        <tr>
                            <td>Nombre de Usuario</td>
                            <td>{/*this.state.user_name*/}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{/*this.state.email*/}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile;

 {/* CREDITS FOTOIMAGE
<div> Icons made by 
    <a href="https://www.freepik.com/?__hstc=57440181.615c2b77acef88c7f46c634a64be7b1b.1557827871485.1557827871485.1557827871485.1&__hssc=57440181.4.1557827871485&__hsfp=674943230" 
        title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    
        title="Flaticon">www.flaticon.com</a> is licensed by 
        <a href="http://creativecommons.org/licenses/by/3.0/" 			    
        title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY
    </a>
</div>
*/}