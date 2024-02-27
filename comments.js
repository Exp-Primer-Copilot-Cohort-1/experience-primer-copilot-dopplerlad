// Create web server
// Run web server
// Create a post request
// Add a middleware to the post request
// Create a function to handle the post request
// Create a function to handle the get request
// Create a function to handle the put request
// Create a function to handle the delete request
// Install nodemon
// Run web server

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments');

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

app.put('/comments/:id', (req, res) => {
    const comment = req.body;
    const commentId = req.params.id;
    comments[commentId] = comment;
    res.json(comment);
});

app.delete('/comments/:id', (req, res) => {
    const commentId = req.params.id;
    comments.splice(commentId, 1);
    res.json({ id: commentId });
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

// Install nodemon
// npm install --save-dev nodemon
// Add script to package.json
// "start": "nodemon server.js"
// Run web server
// npm start

// Open Postman
// Create a post request
// Add a body to the post request
// Send the post request
// Create a get request
// Send the get request
// Create a put request
// Add a body to the put request
// Send the put request
// Create a delete request
// Send the delete request
// Create a get request
// Send the get request
// Close Postman
// Close web server
// Close web server

// Path: comments.js
// Create comments array
// Export comments array

const comments = [
    {
        id: 1,
        body: 'comment 1'
    },
    {
        id: 2,
        body: 'comment 2'
    }
];

module.exports = comments;

// Path: server.js
// Require comments
// Create a post request
// Add a middleware to the post request
// Create a function to handle the post request
// Create a