const express = require('express');
const app = express();

const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded());

app.use('/result', (req, res, next) => {
    console.log('In middleware /result');
    console.log(req.body); // { title: 'book' } res.redirect('/');

    let name = req.body.name;
    let age = req.body.age;
    res.send(`Welcome ${name} with age ${age}`);
});

app.use('/', (req, res, next) => {
    console.log('In middleware q2');
    
    res.send('<form action="/result" method="post"><label for="name">Name</label><input type="text" name="name"><label for="age">Age</label><input type="text" name="age"><input type="submit" name="submit"></form>');
});



app.listen(3000);