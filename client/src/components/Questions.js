import React, { Component } from 'react';
import {questions, askQuestion,certainQuestions} from "./QuestionFunctions";
import { Router, Route, Link} from 'react-router-dom';
import {/*login*/} from "./UserFunctions";
import Tags from './Tags';
import tagsData from "../assets/tagsData";
import { EditorState, convertToRaw } from'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';


export default class Questions extends Component {

    state = {
        questionsData: null,
        title: '',
        description: '',
        newTags: null,
        linkTag: null,
        onEditorStateChange: '',
        editorState: EditorState.createEmpty()
    }

    componentWillReceiveProps(nextProps, nextContext) {

        let link = null;

        if (nextProps.location.state) {
            link = nextProps.location.state.tag
        }

        this.setState({linkTag: link})

        this.getData(link);
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

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        const questionData = {
            title: this.state.title,
            description: this.state.description,
            categories: this.state.newTags
        }

        askQuestion(questionData).then(res => {
            if(res) {
                this.props.history.push('/preguntas/'+res.data.id)

            }
        })
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState
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
                                    <div className="card-text ml-2 mr-2" dangerouslySetInnerHTML={{__html: val.description}}></div>
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
    }

    updateDescription = () => {
        let description = this.state.editorState ? draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())) : '';

        this.setState({
            description
        })
    }

    render() {
        const { editorState} = this.state;

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
                <form noValidate onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Question</label>
                        <input className="form-control form-control-lg"
                               name="title"
                               type="text"
                               value={this.state.title}
                               onChange={this.onChange}
                               placeholder="Question"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                        <textarea className="form-control"
                                  id="exampleFormControlTextarea1"
                                  name="description"
                                  value={this.state.description}
                                  onChange={this.onChange}
                                  rows="3"
                        >
                        </textarea>
                    </div>
                    <button className="btn btn-primary"type="submit">Submit</button>
                </form>
                <div class="p-5">
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
                            {/*<textarea className="form-control "
                                      id="exampleFormControlTextarea1"
                                      name="description"
                                      value={this.state.description}
                                      onChange={this.onChange}
                                      rows="3"
                                      placeholder="Explica tu pregunta">

                            </textarea>*/}
                            <Editor
                                editorState={this.state.editorState}
                                toolbarClassName={"toolbarClassName"}
                                wrapperClassName={"wrapperClassName"}
                                editorClassName={"editorClassName"}
                                onEditorStateChange={this.onEditorStateChange}
                                onChange={this.updateDescription}
                            />
                        </div>
                        <button className="btn btn-primary rounded-pill" type="submit">Submit</button>
                    </form>
                </div>
                </div>
            </React.Fragment>
        )
    }
}