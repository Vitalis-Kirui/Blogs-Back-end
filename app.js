const express = require('express');

const app = express();

// Static middleware
app.use(express.static('assets'));