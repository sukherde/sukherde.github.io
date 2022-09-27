const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const router = require('./routes/router');

app.use(bodyparser.urlencoded());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use(router);

app.use((req, res, next) => {
    res.status(404).send('Not found page. Status code: 404');
});
app.listen(3000);
