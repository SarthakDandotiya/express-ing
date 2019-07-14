const express = require('express');
const path = require('path');
const router = express.Router();

const logger = require('./middleware/logger');

const app = express();

const PORT = process.env.PORT || 5000;

// Init Middleware
app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API routes
app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, () => {
	console.log('\x1b[35m%s\x1b[0m', `Server started on - ${PORT}`);
});
