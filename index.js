//Q1
//input=[1,2,3,4,5]

let array = [1, 2, 3, 4, 5];
let squarearray = [],
  square;
function newarray(array) {
  for (var i = 0; i < array.length; i++) {
    square = array[i] * array[i];
    squarearray.push(square);
  }
  return squarearray;
}
console.log(newarray(array));

//Q2
let stringName = "madam";
let Name = "";
let Name1 = "";
function palindrome(stringName) {
  for (let i = 0; i < stringName.length; i++) {
    Name = Name + stringName[i];
    Name1 = Name1 + stringName[stringName.length - 1 - i];
  }
  if (Name === Name1) {
    let output = "Given string is palindrome";
    return output;
  } else {
    let output2 = "Given string is not a palindrome";
    return output2;
  }
}
console.log(palindrome(stringName));

//Q3
let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
let NewArray = [],
  NextArray;
function SameElements(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        NextArray = array2[j];
        NewArray.push(NextArray);
      }
    }
  }
  return NewArray;
}
console.log(SameElements(array1, array2));

//Q4
// let object = {
//     name: "Alice",
//     age: 25,
//   };
// let input1="name";
// let output1;
//   function KeyObject(object, input1) {
//     output1=object.input1;
//     return output1;
//   }
//   console.log(KeyObject(object, input1))

//Q5
let number = 12345;
let DigitArray = [],
  numberToString,
  digit;
function DigitToArray(number) {
  numberToString = number.toString();
  for (let i = 0; i < numberToString.length; i++) {
    digit = parseInt(numberToString[i]);
    DigitArray.push(digit);
  }
  return DigitArray;
}
console.log(DigitToArray(number));

//Q6
let input = "hello";
let Name2 = "";
function SameLetter(input) {
  for (let i = 0; i < input.length; i++) {
    Name2 = Name2 + (input[i] + input[i]);
  }
  return Name2;
}
console.log(SameLetter(input));

//Q7

//Q8
// Input: "This is a sample sentence."
let input2 = "This is a sample sentence.";
let count = 0;
function CountWord(input2) {
  for (let i = 0; i < input2.length; i++) {
    if (input2[i] === " ") {
      count++;
    }
  }
  count++;
  return count;
}
console.log(CountWord(input2));

//Q9
// Input: [10, 2, 14, 5, 7]
let input3 = [10,2,14,5,7];
function smallNumber(input3){
  var output3=input3.sort((a,b) => a-b);
  return input3[1];
}
console.log(smallNumber(input3));


//Q10

