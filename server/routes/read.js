const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

// Initialize router
const readRouter = express.Router();

// Read CSV file
function readPhoneBook(res) {
    const output = {entries: []};

    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '../', 'phone_book.csv'))
        .pipe(csv())
        .on('data', (data) => {
            // Push data to entries array
            output.entries.push(data);
        })
        .on('end', () => {
            resolve(output);
        })
    });
}

// Handle GET request
readRouter.get('/', (req, res) => {
    const output = readPhoneBook(res);
    output.then((result) => {
        res.status(200).send(output);
    })
});

// Export router
module.exports = readRouter;