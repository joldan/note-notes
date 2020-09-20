const sequelize = require('../utils/database');
const Note = require('../models/note');

exports.getIndex = (req, res, next) => {
    Note.findAll()
    .then( notes => {
        res.render('index', {
            path : 'new-note',
            notes: notes
        })   
    })
    .catch( err => console.log(err))
};

exports.getEditNote = (req, res, next) => {
    res.render('edit-note', {
        path : '/edit-note',
        title: 'Edit Note',
    });
}

exports.getNewNote = (req, res, next) => {
    res.render('new-note', {
        path : 'new-note',
        title: 'New Note',
    });
}

exports.postNewNote = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    Note.create( {
        title : title,
        content : content
    })
    .then( result => {
        res.redirect('/')
    })
    .catch(err => console.log(err));
}