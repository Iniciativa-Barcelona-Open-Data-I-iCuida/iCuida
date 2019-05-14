import React, { Component } from 'react';
import {questions, askQuestion} from "./QuestionFunctions";
import { /*Router,*/ Route, Link} from 'react-router-dom';
import {/*login*/} from "./UserFunctions";
export default class Questions extends Component {

    state = {
        questionsData: null,
        title: '',
        description: '',
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

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        const questionData = {
            title: this.state.title,
            description: this.state.description
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
                   <Route>
                       <Link to={"./preguntas/"+val.id}>
                            <div className="card mt-3 mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">{val.title}</h5>
                                    <p className="card-text ml-2 mr-2">{val.description}</p>

                                </div>
                            </div>
                       </Link>
                   </Route>
               )
            })
    }

    render() {
        return(
            <React.Fragment>
            <div>
                {
                    this.state.questionsData &&
                    this.renderQuestions( this.state.questionsData.data)
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
            </React.Fragment>
        )
    }
}