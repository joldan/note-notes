

exports.getIndex = (req, res, next) => {
    res.render('index')   
};

exports.getEditNote = (req, res, next) => {
    res.render('edit-note', {
        path : '/edit-note',
        title: 'Edit Note',
        state : 'edit'
    });
}

exports.getNewNote = (req, res, next) => {
    res.render('edit-note', {
        path : 'new-note',
        title: 'New Note',
        state: 'new'
    });
}