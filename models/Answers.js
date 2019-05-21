const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
    'answers',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        question_id: {
            type: Sequelize.INTEGER,
        },
        answer: {
            type: Sequelize.STRING
        },
        like: {
            type: Sequelize.INTEGER
        },
        dislike: {
            type: Sequelize.INTEGER
        },
        created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
    },
    {
        timestamps: false,
    }
)