const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser')

const sequelize = require('./utils/database');
const Note = require('./models/note')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Add Middleware

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));

//Manage router

const routes = require('./router/routes');
app.use(routes);

// Start DB and web-server


console.log( sequelize.models );

sequelize
    .sync( )
    .then(result => {
        app.listen(3000)
    })
    .catch(err => console.log(err))
