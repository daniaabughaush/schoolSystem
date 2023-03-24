// 1- create a function that takes two arguments, one is an array and the other is a number, then return the index of the given value or return -1 if the element cannot be found.
function first(arr,value){
if(arr.includes(value)){
    return arr.indexOf(value)

}else{
    return -1
}
}

// testing
let arrTest=[1,2,4,5]
// console.log(first(arrTest,3))


// 2- create a function that takes an array of integers between 1 and 100 except for one, and returns the missing number.
let arrInt=[]
for (let index = 0; index <= 100; index++) {
    arrInt.push(index)
   
  
}
// console.log(arrInt)

let missing= Math.floor((Math.random() * 100) + 1);
// console.log(missing)


// remove the missing number from array
let removes = arrInt.indexOf(missing);
if (removes > -1) { // only splice array when item is found
  arrInt.splice(removes, 1); // 2nd parameter means remove one item only
}

// array = [2, 9]
// console.log(arrInt);

function miss(){for (let i = 0; i < arrInt.length; i++) {
    if(i==arrInt[i]){

    }else{

console.log(i)    
    break;
    }
    
}
}
// miss();
// in case we have an existing array with missing number

// 1-sort the numbers in the array from 0-100
let numberArray=[2,5,4,1,7,6]
// let numberArray;
function compareNumbers(a, b) {
    return a - b;
  }

  numberArray.sort(compareNumbers);
// same thing:
// numberArray.sort((a,b)=>a-b)
// test
function miss(){
    for (let index = 0; index <= 100; index++) {
       if(numberArray[index]-1==index){
        // 
        
    }else{
        return index+1
       
    }
}
}
console.log(miss());

// using includes.of
function useInclude(){
    for (let index = 1; index <=100; index++) {
        if(numberArray. includes(index)){
            // 
        }else{
            return index
        }
        
    }
}
  console.log(useInclude());

//   3- create a function that takes an array of integers and returns a new array with the same integers without the duplicates
// using new set method that remove the duplicates number
function duplicates(){
    numberArray=[1,2,2,3,3,4,5,9,8,8]
let uniqueChars = [...new Set(numberArray)];
return uniqueChars;
}

console.log(duplicates());


// 4- create a function that takes an array of integers and returns the average of all the numbers in it 
function average(){
    let sum=0;
    numberArray=[6,9,8,7,5,4]
for (let index = 0; index < numberArray.length; index++) {
  sum+=numberArray[index] 
}
return sum/numberArray.length
}
console.log(average())

