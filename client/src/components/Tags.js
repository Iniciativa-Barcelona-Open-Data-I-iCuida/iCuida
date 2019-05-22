import React, { Component } from 'react';
import tagsData from "../assets/tagsData";

export default class Tags extends Component {

    state = {
        tags: [
            "derechos-laborales",
            "tramites-legales",
            "seguridad-social",
            "extranjeria",
            "centros-soport",
            "cuidado-dependientes",
            "cuidado-mayores",
            "canguros",
            "consejos-limpieza",
            "ayudas-practicas",
            "recursos-barcelona"
        ],
        chosenTags: []
    }

    addTag = (tag) => {

        let chosenTags = this.state.chosenTags;


        if (!this.verifyTag(tag)) {


            chosenTags.push(tag)
        }

        this.setState({chosenTags});
        this.props.updateTags(this.state.chosenTags)
    }

    removeTag = (tag) => {
            let chosenTags = this.state.chosenTags;

           chosenTags = chosenTags.filter( (val) => val !== tag);

            this.setState({chosenTags})
        this.props.updateTags(this.state.chosenTags)
    }

    verifyTag = (tag) => {
        const chosenTags = this.state.chosenTags;

        return chosenTags.includes(tag);

    }

    renderTags = () => {
        return this.state.tags.map( (val) => {
            if (!this.state.chosenTags.includes(val)) {
                return (<span key={val} className="badge badge-pill badge-primary ml-1 mr-1" onClick={ () => {
                    this.addTag(val)
                }}>{tagsData[val].tagName}</span>)
            }

        })
    }

    renderChosenTags = () => {

        if (this.state.chosenTags) {
            return this.state.chosenTags.map(val => {
                return (<span key={val} className="badge badge-pill badge-success ml-1 mr-1">{tagsData[val].tagName} <span onClick={ () => {
                    this.removeTag(val)
                }}>x</span></span>)
            })
        }
    }


    render() {
        return(
            <div>
                <div className="mb-3">{this.renderTags()}</div>
                <div>{this.renderChosenTags()}</div>
            </div>
        )
    }
}