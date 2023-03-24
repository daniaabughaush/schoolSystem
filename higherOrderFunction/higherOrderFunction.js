// 5- Write a function that, takes an array of integers as input, iterates over the array, and returns a new array.
//  The returned array should contain the result of raising 2 to the power of the original input element.
// For example,([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.
// Use for and forEach and then map to solve this question to see the difference between the three ways 

// for loop
// let array=[1,2,3,4,5,6,7,8,9];
// let newArray=[];
function forArray() {
    
    for (let index = 0; index < array.length; index++) {
      let powerTwo=Math.pow(array[index],2)
      newArray.push(powerTwo)   
    }
   return newArray
}

// console.log(forArray())

// using forEach
function usingEach(){

    array.forEach(element =>{
        newArray.push(Math.pow(element,2))
 } )
return newArray
 }
// usingEach();
// console.log(newArray)

// using map loop
function usingMap() {
    
    let usingMap=array.map((value)=>{
        
        return Math.pow(value,2)
    }
    
    );
    return usingMap;
}
// console.log(usingMap())


// 6- Write a function that, takes an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.
// If any element in the array is not a number, the resulting array should have the string "N/A" in its place.
// For example:([1,2,3,"israa"]) returns ['odd','even','odd','N/A'].

// function checking(){
    let arrayMap=[1,2,3,"dania"]

    function checking() {
        
        let check=arrayMap.map((value)=>{
    if( typeof value !=="number"){
    return "string"
    }
       else if (value % 2==0) {
              return "even"
                
            } else {
                return "odd" 
            }
        })
        return check
    }
    
    // console.log(checking())


//     7- Write a function named fizzbuzz that takes in an array of numbers.
// Iterate over the array using forEach or map to determine the output based on several rules:
//   - If a number is divisible by 3, add the word "Fizz" to the output array.
//   - If the number is divisible by 5, add the word "Buzz" to the output array.
//   - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
//   - Otherwise, add the number to the output array.
// Return the resulting output array.

function fizzbuzz() {
    // let array=[15,18,5,3,15,8]
    let divid=array.map((value)=>{
        if(value % 3==0 &&value%5==0){
            return "Fizz Buzz"
        }else if(value % 3==0) {
            return "Fizz"
        }else if(value %5==0 ){

            return "Buzz"
        }else{
            return value
        }
    })
    return divid
}
// console.log(fizzbuzz()) 

