const path = require('path');
const fs = require('fs');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });

    app.post('/api/notes', (req, res) => {
        let db = fs.readFileSync('db/db.json');
        db = JSON.parse(db);
        res.json(db);

        let useNote = {
            title: req.body.text,
            text: req.body.text
        };

        db.push(userNote);
        fs.writeFileSync('db/db.json', JSON.stringify(db));
    });
};