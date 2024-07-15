const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/about-us', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/about.html'));
});

app.get('/gallery', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/gallery.html'));
});

app.get('/events', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/events.html'));
});

app.get('/news', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/news.html'));
});

app.get('/contact-us', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/contact.html'));
});

app.listen(3000, () => console.log(`Example app is listening on port ${port}.`));