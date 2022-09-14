// 1.
var add = (function(){
    var counter = 0;
    return {
        add: function(){
            return counter +=1;
        },
        reset: function(){
            return counter = 0;
        },
        value : function(){
            return counter;
        }
    }
});

let res = add();
console.log(res.value());
res.add();
console.log(res.value());
res.add();
console.log(res.value());
res.reset();
console.log(res.value());

// 2.
//Free variable is a variable in the anonymous function that are not parameters and not defined inside of the function.
//So, counter variable in anonymous function that is returned is a free variable in this case.


//3. 
var cnt;
function make_adder(inc){
    cnt = 0;
    return function(){
        return cnt += inc;
    }
};

//3
var add5 = make_adder(5);
add5();
add5();
console.log(add5());

var add7 = make_adder(7);
add7();
add7();
console.log(add7());


//4. 
//We can add a anonymous function to include all the code.
//Then it would be all in function scope.

//5.

var employee = (function(){
    var name;
    var age;
    var salary;   

    function getName(){return name;}
    function getAge(){}
    function getSalary(){}

    function setName(n){name = n;}
    function setAge(){}
    function setSalary(){}

    function increaseSalary(perc){
        const sal = getSalary();
        return sal * 1.1;
    }
    function incrementAge(){}
    
    return {
        setName: setName,
        setAge: setAge,
        setSalary: setSalary,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge
    };
})();

employee.setName("Bob");

//6.
employee.address = null;
employee.setAddress = function(addr){
    employee.address = addr;
};
employee.getAddress = function(addr){
    return employee.address;
};

employee.setAddress("Fairfield, IA");
console.log(employee.getAddress());


