const express = require('express');
const cors = require("cors");

// Initialize app and PORT
const app = express();
const PORT = process.env.PORT || 8000;

// CORS
app.use(cors());

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