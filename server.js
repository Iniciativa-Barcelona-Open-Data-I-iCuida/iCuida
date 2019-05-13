const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

const Users = require('./routes/Users');
const Questions = require('./routes/Questions');
const Answers = require('./routes/Answers');
const Comments = require('./routes/Comments');

app.use('/users', Users);
app.use('/questions', Questions);
app.use('/answers', Answers);
app.use('/comments', Comments);

app.listen(port, () => {
    console.log("Server is running on port: " + port)
});