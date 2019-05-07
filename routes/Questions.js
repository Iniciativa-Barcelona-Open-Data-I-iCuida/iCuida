const express = require("express");
const questions = express.Router();
const cors = require('cors');
const sequelize = require('sequelize');
const Question = require("../models/Questions");
questions.use(cors());

questions.post('/question', (req, res) => {
    const today = new Date();
    const userQuestion = {
        question: req.body.question,
        created_at: today,

    }

                Question.create(userQuestion)
                    .then(question => {
                        res.send(' Question sent');
                    })
                    .catch(err => {
                        res.send('error: ' + err )
                    })


});

questions.get('/', (req, res) => {
    Question.findAll()
        .then(questions => {
            res.send(questions)
        })
        .catch(err => {
            res.send(err)
        })
});

questions.get('/:id', (req, res) => {
    Question.findOne({
        where: {
            id: req.params.id
            }
        })
        .then(questions => {
            res.send(questions)
        })
        .catch(err => {
            res.send(err)
        })
});

module.exports = questions;