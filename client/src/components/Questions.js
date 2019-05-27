import React, { Component } from 'react';
import {questions, askQuestion, certainQuestions, questionLike, questionDislike} from "./QuestionFunctions";
import { Router, Route, Link} from 'react-router-dom';
import CreateQuestion from '../components/createQuestion'

import tagsData from "../assets/tagsData";



export default class Questions extends Component {

    state = {
        questionsData: null,
    }

    componentWillReceiveProps(nextProps, nextContext) {

        let link = null;

        if (nextProps.location.state) {
            link = nextProps.location.state.tag
        }

        this.setState({linkTag: link})

        this.getData(link);
    }

    componentDidMount() {
        this.getData(this.props.location.state.tag)
    }

    getData = (tag) => {

        const { handle } = this.props.match.params

       !tag ?

        questions()
            .then(res => {
                this.setState({questionsData: res.data})
            })
            .catch(err => {
                console.log(err)
            })

        :

        certainQuestions(tag)
            .then( res => {
                this.setState({questionsData: res.data})
            })
            .catch(err => {
                console.log(err)
            })
    }


    renderQuestions(objectData) {


        if (objectData.length > 0) {
            return objectData.map(val => {
               return (
                   <Route key={val.title}>
                       <Link to={"./preguntas/"+val.id}>
                            <div className="card mt-3 mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">{val.title}</h5>
                                    <div className="card-text ml-2 mr-2" dangerouslySetInnerHTML={{__html: val.description}}></div>
                                    <div className="mt-5">
                                        {
                                            JSON.parse(val.categories) &&
                                            JSON.parse(val.categories).map( (category) => {
                                                return <span key={category} className="badge badge-pill badge-primary">{tagsData[category].tagName}</span>
                                            })
                                        }
                                    </div>
                                    <div>
                                        <a  className="m-2"><i className="fa fa-thumbs-o-up"></i> {val.like}</a>
                                        <a className="m-2"><i className="fa fa-thumbs-o-down"></i> {val.dislike}</a>
                                        <a className="text-right" >{val.updated_at ? val.update_at : val.created_at}</a>
                                    </div>
                                </div>
                            </div>
                       </Link>
                   </Route>
               )
            })
        } else {
            return (
                <div className="m-auto fit-content-w p-5">
                    <Link className="btn btn-primary" to="preguntar">Formula tu pregunta</Link>
                </div>
            )
        }
    }

    render() {
        const { editorState} = this.state;

        return(
            <div className="p-4 mb-5">
                    <div className="search-form">
                        <nav>
                            <form className="form-inline ml-auto">
                                <input type="text"
                                       className="form-control w-100 rounded-pill"
                                       placeholder="Busca"
                                       id="searchInput">
                                </input>
                            </form>
                        </nav>
                    </div>
                <div>
                    {
                        this.state.questionsData &&
                            this.renderQuestions(this.state.questionsData)
                    }
                </div>
            </div>
        )
    }
}