const express = require('express');
const csv = require('csvtojson');
const fs = require('fs');
const path = require('path');

// Define file path
const csvFilePath = path.join(__dirname, '../', 'data', 'phone_book.csv');

// Initialize router
const readRouter = express.Router();

// Read CSV file
function readPhoneBook() {
  return new Promise((resolve, reject) => {
    csv()
      .fromFile(csvFilePath)
      .then(result => {
        resolve(result);
      });
  });
}

// Handle GET request
readRouter.get('/', (req, res) => {
  if (fs.existsSync(csvFilePath)) {
    const result = readPhoneBook();
    result.then(output => {
      res.status(200).send(JSON.stringify(output));
    });
  } else {
    res
      .status(200)
      .send(JSON.stringify([{ Message: 'No file phone_book.csv found.' }]));
  }
});

// Export router
module.exports = readRouter;
