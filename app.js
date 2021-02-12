const express = require('express');

const cors = require('cors');
const { json } = require('express');

const app = express();

// Settings

app.set('port', process.env.PORT || 4000);

app.use(cors());

app.use(express.json());

//routes

app.use('/api/products', require('./routes/Products'));

module.exports = app;