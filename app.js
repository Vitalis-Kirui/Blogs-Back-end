const express = require('express');

const app = express();

// Static middleware
app.use(express.static('assets'));

// Listening to requests
app.listen(3000);