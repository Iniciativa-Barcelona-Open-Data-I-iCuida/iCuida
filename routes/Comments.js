const express = require('express');
const comments = express.Router();
const cors = require('cors');
const sequelize = require('sequelize');
const Comments = require('../models/Comments');

comments.use(cors());

comments.post('/', (req, res) => {

    const today = new Date();
    const userComment = {
        question_id: req.body.question_id,
        answer_id: req.body.answer_id,
        comment: req.body.comment,
        created_at: today,
    }

    Comments.create(userComment)
        .then(comment => {
            res.send(comment)
        })
        .catch(err => {
            res.send(err)
        })
});

comments.get('/:id', (req, res) => {
    Comments.findAll({
        where: {
            question_id: req.params.id
        }
    })
        .then(comment => {
            res.send(comment)
        })
        .catch(err => {
            res.send(err)
        })
});

module.exports = comments;