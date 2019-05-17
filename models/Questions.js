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
            type: Sequelize.ARRAY(Sequelize.STRING)
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