/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
  
  /* runs test to see if expected argument is === to value returned by function2test argument */
  function myFunctionTestArrays(expected, found) {
    if (expected == found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
  
  /* max returns the maximum of 2 arguments */
  function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    };
  }
  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
  
  /* max3 takes 3 numbers as arguments and returns the largest */
  function maxOfThree(a, b, c) {
    return max(max(a, b), c);
  }
  console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));
  
  //3. Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  function isVowel(char){
    let vowels = new Array("a", "e", "i", "o", "u");
    return vowels.find(c => c === char) != undefined;
  }
  
  //check isVowel function
  console.log("Expected output of isVowel(b) is false  " + myFunctionTest(false, isVowel("b")));
  console.log("Expected output of isVowel(a) is true  " + myFunctionTest(true, isVowel("a")));
  
  //4.Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. 
  //For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  function sum(array){
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
      sum += array[index];    
    }
    return sum;
  }
  
  function multiply(array){
    let multiple = 1;
    for (let index = 0; index < array.length; index++) {
      multiple *= array[index];    
    }
    return multiple;
  }
  
  //check sum function
  console.log("Expected output of sum([1, 2, 3, 4]) is 10  " + myFunctionTest(10, sum([1, 2, 3, 4])));
  console.log("Expected output of sum([1, 2, 3, 4, 5]) is 15  " + myFunctionTest(10, sum([1, 2, 3, 4, 5])));
  
  //check multiply function
  console.log("Expected output of sum([1, 2, 3, 4]) is 24 " + myFunctionTest(24, multiply([1, 2, 3, 4])));
  console.log("Expected output of sum([1, 2, 3, 4, 5]) is 120  " + myFunctionTest(100, multiply([1, 2, 3, 4, 5])));
  
  //5. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  function reverse(inputString){
    let res = "";
    for (let index = inputString.length - 1; index >= 0; index--) {
      res += inputString.charAt(index);    
    }
    return res;
  }
  
  //check reverse function
  console.log("Expected output of reverse(Hello) is olleH " + myFunctionTest("olleH", reverse("Hello")));
  console.log("Expected output of reverse(WOW) is WOW " + myFunctionTest("WOW", reverse("WOW")));
  console.log("Expected output of reverse(Bad) is daB " + myFunctionTest("Good", reverse("Bad")));
  
  //6. Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
  function findLongestWord(arrayOfWords){
    let maxLen = 0;
    arrayOfWords.forEach(element => {
      if(element.length > maxLen){
        maxLen = element.length;
      }
    });
    return maxLen;
  }
  
  //check findLongestWord function
  console.log("Expected output of sum([Good, Bad, John, Rambo]) is 5 " + myFunctionTest(5, findLongestWord(["Good", "Bad", "John", "Rambo"])));
  console.log("Expected output of sum([Good, Bad, John, Rambo]) is 5 " + myFunctionTest(4, findLongestWord(["Good", "Bad", "John", "Rambo"])));
  
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
  console.log("Expected output of sum([Good, Bad, John, Rambo], 3) is [Good, John, Rambo]] " + myFunctionTestArrays("Good,John,Rambo", filterLongWords(["Good", "Bad", "John", "Rambo"], 3)));
  
  //8. 
  //a) multiply each element by 10; 
  const a = [1,3,5,3,3]; 
  const b = a.map(function(elem, i, array) {  
    return elem * 10;
  })
  document.writeln(b.toString() + "<br/>");
  
  //b) return array with all elements equal to 3; 
  const c = a.filter(function(elem, i, array){
    return elem == 3;});
  document.writeln(c.toString() + "<br/>");
  
  //c) return the product of all elements;
  const d = a.reduce(function(prevValue, elem, i, array){
    return 1 * prevValue * elem;
  });
  document.writeln(d+ "<br/>");
  
  const d2 = a.find(function(elem) {return elem > 1;}); //3
  const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
  document.writeln(d2+ "<br/>");
  document.writeln(d3);