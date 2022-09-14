//1.
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c){    
    console.log(x); //undefined
    console.log(a); //8
    var f = function(a, b, c){
        b = a;
        console.log(b); //8
        b = c;
        var x = 5;
    }
    f(a, b, c);
    console.log(b); //9
    var x = 10;
}
c(8, 9, 10);
console.log(b); //10
console.log(x); //1

//output to the console:
//undefined
//8
//8
//9
//10
//1

//2. Define Global Scope and Local scope
//Global scope is window level scope.
//On the other hand, local scope is a function scope.

//Variables declared outside of any function become global variables. Global variables can be accessed and modified from any function.
//Variables declared inside any function with var keyword are called local variables. Local variables cannot be accessed or modified outside the function declaration.
//Variables declared without var keyword inside any function becomes global variables automatically.

//3. 
// Scope A
function xFunc() {
    // Scope B
    function yFunc() {
        // Scope C
    }
};

// a. No
// b. Yes
// c. No
// d. Yes
// e. Yes

//4 .
var x = 9;
function myFunction() {
    return x * x;
}
console.log(myFunction());
x = 5;
console.log(myFunction());

//81
//25

//5.
var foo = 1;
function bar() {
    if (!foo) {
        var foo = 10;
    }
    //alert(foo);
}
bar();


//10
