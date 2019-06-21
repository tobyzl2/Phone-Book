const express = require('express');
const path = require('path');
const createCSVWriter = require('csv-writer').createArrayCsvWriter;

// Initalize router
const writeRouter = express.Router();

// Initialize csvWriter
const csvWriter = createCSVWriter({
    header: ['Name', 'Phone Number', 'Email Address'],
    path: path.join(__dirname, '../', 'phone_book.csv')
});

// Handle POST request
writeRouter.post('/:name/:phone/:email', (req, res) => {
    // Get data from request
    const entry = [[
        req.params.name, 
        req.params.phone, 
        req.params.email]];

    // Write entry
    csvWriter.writeRecords(entry).then(() => {
        console.log(`Writing finished... ${entry}`);
    });

    res.status(200).send();
})

// Export router
module.exports = writeRouter;