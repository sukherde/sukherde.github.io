
//4.Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. 
//For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
function sum(array){
    return array.reduce((x, y) => x + y);
}

//check sum function
describe("sum function", function() {

    it("Sum of array [1, 2, 3, 4] is 10.", function() {
      assert.equal(sum([1, 2, 3, 4]), 10);
    });
    it("Sum of array [10, 20, 30, 40] is 100.", function() {
        assert.equal(sum([10, 20, 30, 40]), 100);
      });
});

function multiply(array){
    return array.reduce((x, y) => x * y);
}

//check multiply function
describe("multiply function", function(){
    it("Multiply of all elements of array [1, 2, 3, 4, 5]) is 120", function(){
        assert.equal(multiply([1, 2, 3, 4, 5]), 120);
    });
    it("Multiply of all elements of array [1, 2, 3, 4, 5, 6, 7, 9]) is 45360", function(){
        assert.equal(multiply([1, 2, 3, 4, 5, 6, 7, 9]), 45360);
    });
});

//7. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(arrayOfWords, i){  
    let res = [];
    arrayOfWords.filter(w => {
        if(w.length > i){
        res.push(w);
        }
    });
    return res;
}

//check filterLongWords function
describe("filterLongWords function", function(){
    it("Expected output of filterLongWords([Good, Bad, John, Rambo], 3) is [Good, John, Rambo]", function(){
        assert.deepEqual(filterLongWords(["Good", "Bad", "John", "Rambo"], 3), ["Good", "John", "Rambo"]);
    });
});

//5. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(inputString){
    let charArr = [...inputString];
    return charArr.reduce((x, y) => y + x);
}

//check reverse function
describe("reverse function", function(){
    it("Expected output of reverse(Hello) is olleH", function(){
        assert.equal(reverse("Hello"), "olleH");
    });

    it("Expected output of reverse(What) is tahW", function(){
        assert.equal(reverse("What"), "tahW");
    });
});