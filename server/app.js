const express = require('express');

// Initialize app and PORT
const app = express();
const PORT = process.env.PORT || 3000;

// Use readRouter
const readRouter = require('./routes/read');
app.use('/', readRouter);

// Use writeRouter
const writeRouter = require('./routes/write');
app.use('/write', writeRouter);

// Listen to PORT
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}...`);
});