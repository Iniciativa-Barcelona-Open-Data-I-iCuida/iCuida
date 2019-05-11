import React, { Component } from 'react';
import {questions} from "./QuestionFunctions";
import { /*Router*/ Route, Link} from 'react-router-dom';

export default class Questions extends Component {

    state = {
        questionsData: null
    }

    componentDidMount() {

        questions()
            .then(res => {
                this.setState({questionsData: res})
            })
            .catch(err => {
                console.log(err)
            })

    }
    renderQuestions(objectData) {

            return objectData.map(val => {
               return (
                   <Route>
                        <div className="card">
                            <div className="card-header">Something here</div>
                            <div className="card-body">
                                <h5 className="card-title">{val.question}</h5>
                                <p className="card-text"></p>
                                <Link to={"./questions/"+val.id} className="btn btn-primary">Open</Link>

                            </div>
                        </div>

                   </Route>
               )
            })
    }

    render() {
        return(
            <div>
                {
                    this.state.questionsData &&
                    this.renderQuestions( this.state.questionsData.data)
                }
            </div>
        )
    }
}