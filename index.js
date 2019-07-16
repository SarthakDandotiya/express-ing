const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();

const PORT = process.env.PORT || 5000;

// Init Middleware
app.use(logger);

// Handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage route
app.get('/', (req, res) => {
	res.render('index', {
		title: 'Members App',
		members
	});
});

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API routes
app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, () => {
	console.log('\x1b[35m%s\x1b[0m', `Server started on - ${PORT}`);
});
