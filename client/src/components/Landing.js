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
                    <div className="row">
                        <div className="col-sm-3">.col-sm-3</div>
                        <div className="col-sm-3">.col-sm-3</div>
                        <div className="col-sm-3">.col-sm-3</div>
                        <div className="col-sm-3">.col-sm-3</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">.col-sm-3</div>
                        <div className="col-sm-3">.col-sm-3</div>
                        <div className="col-sm-3">.col-sm-3</div>
                        <div className="col-sm-3">.col-sm-3</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">.col-sm-3</div>
                        <div className="col-sm-3">.col-sm-3</div>
                        <div className="col-sm-3">.col-sm-3</div>
                        <div className="col-sm-3">.col-sm-3</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}