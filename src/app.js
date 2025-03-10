// Import required modules
const express = require('express');
const cors = require('cors');

// Create an Express application
const app = express();
let corsOptions = {
    origin: ['https://127.0.0.1:5500', 'https://www.github.io', 'https://gstout13.github.io'],
    optionsSuccessStatus: 200
    }
// Define CORS options


// Enable CORS for the application using the defined options
app.use(cors(corsOptions));

// Enable parsing of URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Enable parsing of JSON data with specific content type
app.use(express.json({ type: 'application/vnd.api+json' }));

// Mount the index route
const index = require('./routes/index');
app.use(index);

// Mount the userRoute for API routes starting with '/api/'
const userRoute = require('./routes/product.routes');
app.use('/api/', userRoute);

// Serve static files from the 'docs' directory for the root path
app.use('/', express.static('docs'))

// Export the app module
module.exports = app;
