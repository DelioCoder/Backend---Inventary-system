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
app.use('/api/users', require('./Routes/Users'));
app.use('/api/user/login', require('./Routes/Login'));
app.use('/api/user/register', require('./Routes/Register'));
app.use('/api/user/logout', require('./Routes/Logout'));

module.exports = app;