//2. Write a Node.js program that uses readline to keep on asking the user for a number until they enter “stop”. 
//The program should then output the sum of all the numbers that the user has entered.
const readline =  require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

askQuestion();
var sum = 0;

function askQuestion(){
    readline.question('Please input number: ', getNumber);
}

function getNumber(number){
    if(number === "stop"){
        console.log(sum);
        readline.close();
    } else {
        sum += Number(number);
        //setImmediate(askQuestion);
        process.nextTick(askQuestion);
    };
};