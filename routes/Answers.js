const express = require("express");
const answers = express.Router();
const cors = require('cors');
const sequelize = require('sequelize');
const Answer = require("../models/Answers");
answers.use(cors());

answers.post('/:id', (req, res) => {
    const today = new Date();
    const userQuestion = {
        answer: req.body.answer,
        question_id: req.body.question_id,
        created_at: today,

    }

    Answer.create(userQuestion)
        .then(answer => {
            res.send(' Answer sent');
        })
        .catch(err => {
            res.send('error: ' + err )
        })


});

answers.get('/:id', (req, res) => {
    Answer.findAll({
        where: {
            question_id: req.params.id
        }
    })
        .then(answer => {
            res.send(answer);
        })
        .catch(err => {
            res.send(err);
        })
})



answers.put('/like/:id', (req, res) => {
    Answer.findByPk(req.params.id)
        .then(answer => {
            return answer.increment('like', {by: 1})
        })
        .then(answer => {
            res.send(answer)
        })
        .catch(err => {
            return err
        })
});

answers.put('/dislike/:id', (req, res) => {
    Answer.findByPk(req.params.id)
        .then(answer => {
            return answer.increment('dislike', {by: 1})
        })
        .then(answer => {
            res.send(answer)
        })
        .catch(err => {
            return err
        })
});

module.exports = answers;