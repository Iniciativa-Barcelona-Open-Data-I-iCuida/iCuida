import React, {Component} from 'react';
import '../assets/css/Landing.css';

export default class Landing extends Component {
    render() {
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <div className="jumbotron mt-5">
                        <h1 className="text-center">iCuida</h1>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}