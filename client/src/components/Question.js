import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { question, questionLike, questionDislike} from './QuestionFunctions';
import { submitAnswer, getAnswers, answerLike, answerDislike } from './AnswerFunctions';
import {getComments} from './CommentFunctions';
import { EditorState, convertToRaw } from'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';

import  tagsData from '../assets/tagsData'
import '../assets/css/Login.css'

export default class Question extends Component {

    state = {
        questionData: null,
        answers: null,
        answer: '',
        comments: null,
        categories: ["derechos-laborales", "tramites-legales", "seguridad-social", "recursos-barcelona"],
        editorState: EditorState.createEmpty()
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
                        <div className="py-3 text-utils">
                            <div className="like-container">
                                <a  className="m-2" onClick={ () => {questionLike(objectData.id)}}><i className="fa fa-thumbs-o-up"></i> {objectData.like}</a>
                                <a className="m-2" onClick={() => {questionDislike(objectData.id)}}><i className="fa fa-thumbs-o-down"></i> {objectData.dislike}</a>
                            </div>
                            <div className="question-date">
                                <a className="text-right" >{objectData.updated_at ? objectData.update_at : objectData.created_at}</a>
                            </div>
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
                            <div className="py-3 text-utils">
                                <div className="like-container">
                                    <a  className="m-2" onClick={ () => {answerLike(answer.id)}}><i className="fa fa-thumbs-o-up"></i> {answer.like}</a>
                                    <a className="m-2" onClick={() => {answerDislike(answer.id)}}><i className="fa fa-thumbs-o-down"></i> {answer.dislike}</a>
                                </div>
                                <div className="question-date">
                                    <a className="text-right" >{answer.updated_at ? answer.update_at : answer.created_at}</a>
                                </div>

                            </div>
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

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState
        })
    }

    updateDescription = () => {
        let description = this.state.editorState ? draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())) : '';

        this.setState({
            description
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
                        <Editor
                            editorState={this.state.editorState}
                            editorClassName={"demo-editor"}
                            onEditorStateChange={this.onEditorStateChange}
                            onChange={this.updateDescription}
                        />
                    </div>
                    <button className="btn btn-primary"type="submit">Submit</button>
                </form>
            </div>

        )
    }
}