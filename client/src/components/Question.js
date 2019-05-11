import React, { Component } from 'react';
import { question } from './QuestionFunctions';

export default class Question extends Component {

    state = {
        questionData: null
    }

    componentDidMount() {

        question(this.getUrl())
            .then(res => {
                this.setState({questionData: res})
            })
            .catch(err => {
                console.log(err)
            })

    }

    getUrl() {
        // eslint-disable-next-line
        let pathname = window. location. pathname;

        let pathId = pathname.split('/').filter(val => {
            return Number.isInteger(Number(val)) && val !== "";
        });

        return Number(pathId[0]);

    }

    renderQuestion(objectData) {
        return (
            <h1>{objectData.question}</h1>
        );
    }

    render() {
        return(
            <div>
                {
                    this.state.questionData &&
                    this.renderQuestion( this.state.questionData.data)
                }
            </div>
        )
    }
}