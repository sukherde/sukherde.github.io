const express = require('express');
const app = express();
const path = require('path');
const date = new Date();
const hour = date.getHours();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

app.get('/output', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;

    res.send(`Welcome ${name} with age ${age}`);
});

app.use('/css', express.static(path.join(__dirname, 'css', (hour > 6 && hour < 18) ? 'day.css':'night.css')));

app.listen(3000);