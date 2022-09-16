//1
String.prototype.filter = function(inp){
    let str = this;
    let res = "";
    const arr = str.split(" ");
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] === inp){
            continue;
        }

        res += arr[index] + " ";
    }
    return res;
}
console.log("This house is not nice!".filter('not'));

//2. 
Array.prototype.bubbleSort = function(){
    const arr = this;
    
    let curInd = 0;
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let min = arr[curInd];
        let minIndex = curInd;
        for (let j = curInd; j < arr.length; j++) {
            const cur = arr[j];
            if (cur < min) {
                min = cur;
                minIndex = j;
            }
        }
        arr[minIndex] = 99999;
        res.push(min);
    }

    return res;
}

console.log([6,4,0, 3,-2,1].bubbleSort());

//3


var Person = function() {};
Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function(){
    return this.name + ", " + this.age + " years old.";
}

var Student = function() {};
Student.prototype = new Person();

Student.prototype.learn = function(subject){
    console.log(this.name + " just learned " + subject);
}

var Teacher = function (){};
Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject){
    console.log(this.name + " is now teaching " + subject);
}

var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

var mohammed = new Teacher();
mohammed.initialize("Mohammed", 35);
mohammed.teach("WAP");

console.log(me);
console.log(me.__proto__);
console.log(mohammed);
console.log(mohammed.__proto__.hasOwnProperty("teach"));
console.log(Person.hasOwnProperty("name"));
console.log(me.hasOwnProperty("learn"));