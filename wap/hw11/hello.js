//1. Modify the provided code to create a program that asks the user for his name, and after printing “Welcome ${name}” asks the user for his age. 
//If the age < 16 it should output “You’re not allowed to drive in Iowa” otherwise it should output “You’re allowed to get a drivers license in Iowa”.

const readline =  require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('What is your name? ', name => {
    console.log(`Welcome ${name}`);

    //process.nextTick(foo);
    setImmediate(() => { 
                let foo = readline.question('How old are you? ', age => {
                (age < 16) ? console.log(`You are not allowed to drive in Iowa, if you are ${age}`) :  console.log(`You're allowed to get a drivers license in Iowa, if you are ${age}`);
                readline.close();
            })
        }
    );

});

