module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');
    const fs = require('fs');
    const multer = require('multer');
    const path = require('path')

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'assets/uploads/')
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
        }
    })

    const upload = multer({storage: storage});
    // const multer = require('multer');
    // const upload = multer({dest: '../../assets/uploads/'}); //setting the default folder for multer
    // const upload = multer({dest: __dirname + '/uploads'});

    // Create a new Note
    app.post('/notes', notes.create);

    // Retrieve all Notes
    app.get('/notes', notes.findAll);

    // Retrieve all Notes
    app.get('/users', notes.findUsers);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);

//other imports and code will go here
    app.post('/upload', upload.single('avatar'), notes.createProfile);

}