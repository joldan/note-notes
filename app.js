const express = require('express');
const app = express();

const path = require('path');

let bodyParser = require('body-parser')


app.set('view engine', 'ejs');
app.set('views' , path.join(__dirname, 'views'));

//Add Middleware

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));

//Manage router

const routes = require('./router/routes');

app.use(routes);

app.listen(3000);