// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files for client-side (HTML, CSS, JS)
app.use(express.static('public'));

// POST route to handle form submission
app.post('/submit-form', (req, res) => {
    const formData = req.body;
    console.log('Form data received:', formData);
    
    // Here you could process the data, save to database, etc.
    
    // Send a response back to the client
    res.send('Form submission successful');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
