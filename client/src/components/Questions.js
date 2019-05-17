import React, { Component } from 'react';
import {questions, askQuestion} from "./QuestionFunctions";
import { Router, Route, Link} from 'react-router-dom';
import Tags from './Tags';
import tagsData from "../assets/tagsData";
export default class Questions extends Component {

    state = {
        questionsData: null,
        title: '',
        description: '',
        usedTags: null
    }

    componentWillMount() {


        this.getData();
    }

    getData = () => {
        questions()
            .then(res => {
                this.setState({questionsData: res.data})
            })
            .catch(err => {
                console.log(err)
            })
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        const questionData = {
            title: this.state.title,
            description: this.state.description,
            categories: this.state.usedTags
        }

        askQuestion(questionData).then(res => {
            if(res) {
                this.props.history.push('/preguntas/'+res.data.id)

            }
        })
    }

    renderQuestions(objectData) {
            return objectData.map(val => {
               return (
                   <Route key={val.title}>
                       <Link to={"./preguntas/"+val.id}>
                            <div className="card mt-3 mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">{val.title}</h5>
                                    <p className="card-text ml-2 mr-2">{val.description}</p>
                                    <div className="mt-5">
                                        {
                                            JSON.parse(val.categories) &&
                                            JSON.parse(val.categories).map( (category) => {
                                                return <span key={category} className="badge badge-pill badge-primary">{tagsData[category].tagName}</span>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                       </Link>
                   </Route>
               )
            })
    }

    updateTags = (tags) => {
        this.setState({usedTags: tags})
        console.log(tags)
    }

    render() {
        return(
            <React.Fragment>
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
                <div className="p-5">
                    <form className="card p-2" noValidate onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">pregunta</label>
                            <input className="form-control form-control-lg rounded-pill"
                                   name="title"
                                   type="text"
                                   value={this.state.title}
                                   onChange={this.onChange}
                                   placeholder="Pregunta"/>
                        </div>
                        <Tags updateTags={this.updateTags}/>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Explica tu pregunta</label>
                            <textarea className="form-control "
                                      id="exampleFormControlTextarea1"
                                      name="description"
                                      value={this.state.description}
                                      onChange={this.onChange}
                                      rows="3"
                                      placeholder="Explica tupregunta">

                            </textarea>
                        </div>
                        <button className="btn btn-primary rounded-pill" type="submit">Submit</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}