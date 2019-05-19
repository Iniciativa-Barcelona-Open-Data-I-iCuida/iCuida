const express = require("express");
const questions = express.Router();
const cors = require('cors');
const Question = require("../models/Questions");
const { Op } = require('sequelize')
questions.use(cors());

questions.post('/', (req, res) => {
    const today = new Date();
    const userQuestion = {
        title: req.body.title,
        description: req.body.description,
        categories: req.body.categories,
        created_at: today,

    }

                Question.create(userQuestion)
                    .then(question => {
                        res.send(question);

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
        });

});

questions.get('/certain-questions/:id', (req, res) => {
    Question.findAll({
        where: {
            categories: {[Op.like]: '%'+req.params.id+'%'}
        }
    })
        .then(questions => {
            res.send(questions)
        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = questions;