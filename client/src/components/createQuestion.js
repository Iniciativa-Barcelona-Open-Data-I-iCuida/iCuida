import React, { Component } from 'react';
import Tags from "./Tags";
import { EditorState, convertToRaw } from'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import {askQuestion} from "./QuestionFunctions";

export default class CreateQuestion extends Component {

    state = {
        title: '',
        newTags: null,
        linkTag: null,
        onEditorStateChange: '',
        description: '',
        editorState: EditorState.createEmpty()
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

    render() {
        return(
            <div className="pt-5">
                <form className="card p-2" noValidate onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1"></label>
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
                        <Editor
                            editorState={this.state.editorState}
                            wrapperClassName={"demo-wrapper"}
                            editorClassName={"demo-editor"}
                            onEditorStateChange={this.onEditorStateChange}
                            onChange={this.updateDescription}
                        />
                    </div>
                    <button className="btn btn-primary rounded-pill" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}