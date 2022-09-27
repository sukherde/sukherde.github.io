const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use(cookieParser('my secret here'));
app.use(parser.urlencoded());

app.get('/clear', (req, res) => {
    console.log('clear');
    for (const key in req.cookies){
        console.log(key);
        res.clearCookie(key);
    }    
    res.redirect('/');
});

app.get('/', (req, res) => {
    console.log('/');
    console.log(req.cookies);
    
    res.render("index", 
        {
            cookies: req.cookies
        }
    );
    
});

app.post('/zam', (req, res) => {
    console.log('Cookie saved');
    let key = req.body.key;
    let val = req.body.value;

    res.cookie(key, val);
    res.redirect('back');
});

app.use('/', (req, res) => {
    res.status(404).send("Not found, sorry!");
});

app.listen(3000, () => {
    console.log("Server is running on 3000");    
});