const express = require('express');
const app = express();
const path = require('path');
app.use('/js', express.static(path.join(__dirname, 'views')));

const answers = [ "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
"Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
"My reply is no", "My sources say no", "Outlook not so good", "Very doubtful" ];

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/8ball', (req, res)=>{
    let question = req.query.question;
    let index = getRandomInt(answers.length);
    let data = { answer: answers[index]};
    res.send(data);
});

app.listen(3000, ()=>{
    console.log('Server is running on 3000...');    
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}