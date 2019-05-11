import React, {Component} from 'react';
import '../assets/css/Loading.css';

export default class Loading extends Component {
    render() {
        return(
             <React.Fragment> 
                <h1>iCuida</h1>
             <div className="bs-example">
                    <div role="loading">
                        <div className="spinner-border">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
             </React.Fragment>
               )
            }
        }                      
