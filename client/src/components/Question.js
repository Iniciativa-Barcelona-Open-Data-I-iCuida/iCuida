import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { question, questionLike, questionDislike} from './QuestionFunctions';
import { submitAnswer, getAnswers } from './AnswerFunctions';
import {getComments} from './CommentFunctions';
import  tagsData from '../assets/tagsData'
import '../assets/css/Login.css'

export default class Question extends Component {

    state = {
        questionData: null,
        answers: null,
        answer: '',
        comments: null,
        categories: ["derechos-laborales", "tramites-legales", "seguridad-social", "recursos-barcelona"]
    }

    componentDidMount() {
        this.dataRequest();
    }

    dataRequest = () => {
        question(this.getUrl())
            .then(res => {
                this.setState({questionData: res.data})
            })
            .catch(err => {
                console.log(err)
            })


        getAnswers(this.getUrl())
            .then(res => {
                this.setState({answers: res.data})
            })
            .catch(err => {
                console.log(err)
            })

        getComments(this.getUrl())
            .then(res => {
                this.setState({comments: res.data})
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

    questionLike = (id) => {
        questionLike(id)
    }

    questionDislike = (id) => {
        questionDislike(id)
    }


    renderQuestion(objectData) {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{objectData.title}</h5>
                        <div dangerouslySetInnerHTML={{__html: objectData.description}}></div>
                        <div className="mt-5">
                            {
                                JSON.parse(objectData.categories) &&
                                    JSON.parse(objectData.categories).map( (category) => {
                                        return <Link to={{
                                            pathname: '/preguntas',
                                            state: {
                                                tag: category
                                            }
                                        }
                                        } key={category} className="badge badge-pill badge-primary">{tagsData[category].tagName}</Link>
                                    })
                            }

                        </div>
                        <div>
                            <a  className="m-2" onClick={ () => {this.questionLike(objectData.id)}}><i className="fa fa-thumbs-o-up"></i> {objectData.like}</a>
                            <a className="m-2" onClick={() => {this.questionDislike(objectData.id)}}><i className="fa fa-thumbs-o-down"></i> {objectData.dislike}</a>
                        </div>
                    </div>
                </div>
            </div>


        );
    }

    renderAnswers =(objectData) => {
        return objectData.map(answer => {

            return (
                <React.Fragment>
                <div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">{answer.answer}</p>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        this.state.comments &&
                            this.state.comments.map(comment => {
                                const questionId = this.getUrl();
                                const answerId = answer.id;
                                if (questionId === comment.question_id && answerId === comment.answer_id) {
                                    return (
                                        <p>{comment.comment}</p>
                                    )
                                }

                            })
                    }
                </div>
                </React.Fragment>

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
            <div className="p-4">
            <div>
                <h2>Pregunta</h2>
                {
                    this.state.questionData &&
                    this.renderQuestion( this.state.questionData)
                }
            </div>
                <div>
                    <h2>Respuestas</h2>
                    {
                        this.state.answers &&
                        this.renderAnswers( this.state.answers)
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
            </div>

        )
    }
}