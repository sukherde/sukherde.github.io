const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use('/result', (req, res, next) => {
    console.log('In middleware /result');
    console.log(req.body); // { title: 'book' } res.redirect('/');

    let name = req.body.name;
    let age = req.body.age;

    //res.send(`Welcome ${name} with age ${age}`);
    res.render("result", {
        p1: name,
        p2: age
    })
});

app.use('/', (req, res, next) => {
    console.log('In middleware q2');
    let date = new Date();
    res.render("index",
        {
            label1: "Name",
            label2: "Age"
        });
});

app.listen(3000);