const express = require('express');
const fs = require('fs');
const path = require('path');
const createCSVWriter = require('csv-writer').createArrayCsvWriter;

// Define file path
const csvFilePath = path.join(__dirname, '../', 'data', 'phone_book.csv');

// Initalize router
const writeRouter = express.Router();

// Initialize csvWriter
const csvWriter = createCSVWriter({
	header: ['Name', 'Phone', 'Email'],
	path: csvFilePath,
	append: fs.existsSync(csvFilePath)
});

// Handle POST request
writeRouter.post('/:name/:phone/:email', (req, res) => {
	// Get data from request
	const entry = [[req.params.name, req.params.phone, req.params.email]];

	// Write entry
	csvWriter.writeRecords(entry).then(() => {
		res.status(200).send(entry);
	});
});

// Export router
module.exports = writeRouter;
