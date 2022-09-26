const express = require('express');
const app = express();

const path = require('path');

const date = new Date();
const hour = date.getHours();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'index.html')); ///Users/sukh/Library/Mobile Documents/com~apple~CloudDocs/MIU/WAP/RepoWAP/RepoGitHubPage/sukherde.github.io/wap/hw12/q3/html/index.html
});

app.use('/csss', express.static(path.join(__dirname, 'css', (hour > 6 && hour < 18) ? 'day.css':'night.css')));

app.listen(3000);