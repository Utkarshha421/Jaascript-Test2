//Q1 
//input=[1,2,3,4,5]

let array=[1,2,3,4,5];
let squarearray=[], square;
function newarray(array){
 
    for(var i=0;i<array.length;i++){
        square=(array[i]*array[i]);
        squarearray.push(square);
    }
    return squarearray ;
}
console.log(newarray(array));

//Q2
let stringName="madam";
let Name="";
let Name1="";
function palindrome(stringName){
    for(let i=0;i<stringName.length;i++){
        Name= Name + stringName[i];
        Name1= Name1 + stringName[stringName.length-1-i];
    }
    if(Name===Name1){
        let output="Given string is palindrome";
        return output;
    }
}
console.log(palindrome(stringName));

//Q3
let array1=[1,2,3,4];
let array2=[3,4,5,6];
let NewArray=[],NextArray;
function SameElements(array1,array2){
for(let i=0;i<array1.length;i++){
    for(let j=0;j<array2.length;j++){
        if(array1[i]===array2[j]){
         NextArray=array2[j];
            NewArray.push(NextArray);
        }
    }
}
return NewArray;
}
console.log(SameElements(array1,array2));

//Q4


//Q5
// let number=12345;
// let DigitArray=[],Digit;
// let Newnumber=number.toString(number);
// console.log(Newnumber);
// for(let i=0;i<number.length;i++){
//     Digit=number[i];
//     DigitArray.push(Digit);
// }
// console.log(DigitArray);

//Q6
let input="madam";
let Name2="";
function SameLetter(input){
    for(let i=0;i<input.length;i++){
        Name2= Name2 + (input[i]+input[i]);
    }
    return Name2;
}
console.log(SameLetter(input));

//Q4
let object={
    name:"Alice",
    age: 25
};
function KeyObject(object,object){}


//Q9
