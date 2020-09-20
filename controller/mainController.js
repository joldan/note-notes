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
    const noteId = req.params.noteId;
    Note.findByPk( noteId)
    .then( note => {
        res.render('edit-note', {
            path : '/edit-note',
            title: 'Edit Note',
            note: note
        });
    })
    .catch(err => console.log(err));
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

exports.postEditNote = (req, res, next) => {
    const noteId = req.body.noteId;
    const updatedTitle = req.body.title;
    const updatedContent = req.body.content;

    Note.findByPk(noteId)
    .then(note => {
        note.title = updatedTitle;
        note.content = updatedContent;
        return note.save()
    })
    .then(res.redirect('/'))
    .catch( err => console.log(err))
}