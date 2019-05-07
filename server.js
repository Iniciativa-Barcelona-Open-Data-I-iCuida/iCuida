const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

const Users = require('./routes/Users');

const Questions = require('./routes/Questions')

app.use('/users', Users);

app.use('/questions', Questions);

app.listen(port, () => {
    console.log("Server is running on port: " + port)
});