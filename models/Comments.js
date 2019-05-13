const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
    'comments',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        question_id: {
            type: Sequelize.INTEGER,
        },
        answer_id: {
            type: Sequelize.INTEGER
        },
        comment: {
            type: Sequelize.STRING
        }

    },
    {
        timestamps: false
    }
)