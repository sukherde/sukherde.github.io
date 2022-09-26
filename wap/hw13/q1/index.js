const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

const date = new Date();
const hour = date.getHours();

app.use('/css', express.static(path.join(__dirname, 'css', (hour > 6 && hour < 18) ? 'day.css':'night.css')));

app.get('/', (req, res) => {
    res.render("index", {
        time: date.toTimeString()
    });
});

app.listen(3000);