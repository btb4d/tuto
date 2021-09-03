const express = require('express');
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
const stuffRoute = require('./routes/stuff');

const app = express();

const db = require('./models/index.db');
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).
    then(() => console.log('connexion à mongod réussi11 !!!'))
    .catch(() => console.log('connexion à mongod échoué'));



/* mongoose.connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).
    then(() => console.log('connexion à mongod réussi !!!'))
    .catch(() => console.log('connexion à mongod échoué')); */



app.use(bodyParser.json());
app.use('/api/stuff', stuffRoute);

module.exports = app;
