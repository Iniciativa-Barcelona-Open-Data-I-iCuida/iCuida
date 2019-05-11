import React, { Component } from 'react';
import { question, } from './QuestionFunctions';
import { submitAnswer, getAnswers } from './AnswerFunctions';
import {Link} from "react-router-dom";

export default class Question extends Component {

    state = {
        questionData: null,
        answers: null,
        answer: ''
    }

    componentDidMount() {
        this.dataRequest();
    }

    dataRequest = () => {
        question(this.getUrl())
            .then(res => {
                this.setState({questionData: res})
            })
            .catch(err => {
                console.log(err)
            })


        getAnswers(this.getUrl())
            .then(res => {
                this.setState({answers: res})
            })
            .catch(err => {
                console.log(err)
            })
}

    getUrl() {
        let pathname = window. location. pathname;

        let pathId = pathname.split('/').filter(val => {
            return Number.isInteger(Number(val)) && val !== "";
        });

        return Number(pathId[0]);

    }

    renderQuestion(objectData) {
        return (
            <div>
                <div className="card">
                    <div className="card-header">{objectData.title}</div>
                    <div className="card-body">
                        <h5 className="card-title">{objectData.title}</h5>
                        <p className="card-text">{objectData.description}</p>
                    </div>
                </div>
            </div>


        );
    }

    renderAnswers(objectData) {
        return objectData.map(answer => {
            return (
                <div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">{answer.answer}</p>
                        </div>
                    </div>
                </div>


            );
        }) ;
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        const answer = {
            answer: this.state.answer,
            question_id: this.getUrl()
        }


        submitAnswer(answer)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {
        return(
            <React.Fragment>
            <div>
                <h2>Question</h2>
                {
                    this.state.questionData &&
                    this.renderQuestion( this.state.questionData.data)
                }
            </div>
                <div>
                    <h2>Answer</h2>
                    {
                        this.state.answers &&
                        this.renderAnswers( this.state.answers.data)
                    }
                </div>
                <form noValidate onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Answer</label>
                        <textarea className="form-control"
                                  id="exampleFormControlTextarea1"
                                  name="answer"
                                  value={this.state.answer}
                                  onChange={this.onChange}
                                  rows="3">

                        </textarea>
                    </div>
                    <button className="btn btn-primary"type="submit">Submit</button>
                </form>
            </React.Fragment>

        )
    }
}