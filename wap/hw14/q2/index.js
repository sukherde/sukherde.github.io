const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');

app.use(session({
        secret: 'salt for cookie signing'
}));

const date = new Date();
const hour = date.getHours();

const bodyParser = require('body-parser');
const { truncateSync } = require('fs');
app.use(bodyParser.urlencoded());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;

    req.session.name = name;
    req.session.age = age;

    res.redirect('/output');
    //res.redirect(`/output?name=${name}&age=${age}`);
});

app.get('/output', (req, res) => {
    console.log(req.session.name);
    console.log(req.session.age);
    
    let name = req.session.name; //req.query.name;
    let age = req.session.age; //req.query.age;

    res.send(`Welcome ${name} with age ${age}`);
});

app.use('/css', express.static(path.join(__dirname, 'css', (hour > 6 && hour < 18) ? 'day.css':'night.css')));

app.listen(3000);