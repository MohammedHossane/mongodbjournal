// import our deps
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require ('mongoose');
// Models or schemas
const Journal = require('./Models/Journal');


const port = process.env.PORT;
const uri = process.env.MONGO_URI;
const server =express();

// Middle
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));

// make a connection
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'bruh ff you coudnt connect'));
db.once('open', () => {
    console.log('ez connected to mongodb');
});

// Routes

// Post
server.post('/add-journal', (req, res) => {
    const incomingData = req.body;
    const newJournal = new Journal(incomingData);

    newJournal.save((err, result) => {
        if (err) {
            res.status(500).send({
                msg: 'Error redo everything'
            });
        };
        res.status(200).send({
            msg: 'Journal was created',
            document: result
        });
    });
});

server.get('/get-all-journals', (req, res) =>{
    Journal.find({}, (err, result) =>{
        if(err) {
            res.status(500).send({
                msg: 'Error while finding the Journals'
            });
        }

        res.status(200).send({
            msg: 'Journals found',
            document: result
        })
    });
});

server.delete('/delete-journal', (req, res) =>{
    Journal.deleteOne({_id: req.body._id}, (err, result) =>{
        if(err) {
            res.status(500).send({
                msg: 'Error while deleting journal',
            });
        }

        res.status(200).send({
            msg: 'Journal Deleted',
            document: result
        })
    });
});



// Index route
server.get('/', (req, res) => {
    res.status(200).send({
        msg: 'server running aaaa'
    });
});

server.listen(port, () => {
    console.log(`How many hours I spent on this: ${port}`);
});
