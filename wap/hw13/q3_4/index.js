const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use((req, res, next) => {
    console.log("In the middleware!");
    next();
});

app.get("/", (req, res) => {
    console.log("In the /!");
    res.render(
        "product",
        {
            valName: "Macbook pro 14",
            valPrice: "999",
            valDesc: "Macbook pro 14 inch screen laptop",
            valID: "14GED2421FGF"
        }
    )
});

app.listen(2500);
