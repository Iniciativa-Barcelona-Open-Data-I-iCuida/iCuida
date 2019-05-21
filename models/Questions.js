const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
    'questions',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        categories: {
            type: Sequelize.STRING
        },
        like: {
            type: Sequelize.INTEGER
        },
        dislike: {
            type: Sequelize.INTEGER
        },
        views: {
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