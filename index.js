const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send('<h1>Hello World!</h1>');
});

app.listen(PORT, () => {
	console.log('\x1b[35m%s\x1b[0m', `Server started on - ${PORT}`);
});
