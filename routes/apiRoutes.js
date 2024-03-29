const path = require('path');
const fs = require('fs');
const uuid = require('uuid');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });

    app.post('/api/notes', (req, res) => {
        let db = fs.readFileSync('db/db.json');
        db = JSON.parse(db);
        res.json(db);

        let userNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuid
        };

        db.push(userNote);
        fs.writeFileSync('db/db.json', JSON.stringify(db));
    });
};