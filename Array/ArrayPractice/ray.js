// Q1. Sum of All Elements

// Ek integer array diya gaya hai.
// Task: Array ke sabhi elements ka sum nikalna hai.

// Example:
// Input: arr = [1, 2, 3, 4]
// Output: 10


//  function add(arr){
//   let sum=0;
//   for(let i=0;i<arr.length;i++){
//     sum+=arr[i]
//   }
//   return sum;
//  }
//  let arr=[1,2,3,4]
//  console.log(add(arr))


// 2. Maximum Element in Array

// Ek integer array diya gaya hai.
// Task: Array ka sabse bada (maximum) element find karo.
// Math.max() use nahi karna hai.

// Example:
// Input: arr = [3, 10, 7, 5]
// Output: 10



// function findlargest(arr){  // findlargest name ka function name liye//
//   let largest=arr[0]  // largest name ka  variable bnaye arr[0] index pr
//   for(let i=0;i<arr.length;i++){  // fir loop lgaye;
//      if(arr[i]>largest){ // arr[i]>largest mtlab arr[i]>largest hai   array gretaer thean largets
//       largest=arr[i]  // hai  to largest =arr[i] mtlab equal  kr do
//      }
//   }
//   return largest;  // yaha per largest  ko return kr do//
// }
// let arr=[3,10,7,5]  // yeh array  bna//
// console.log(findlargest(arr))  // yaha  pr function ko call kr diye


// Q7. Reverse the Array (Without reverse())

// Ek integer array diya gaya hai.
// Task: Array ko reverse karna hai (pehla element last ho jaye, last pehla ho jaye),
// lekin reverse() method use nahi karna.

// Example:
// Input: arr = [1, 2, 3, 4]
// Output: arr = [4, 3, 2, 1]

// function reversed(arr){
//   let reverse=[]
//   for(let i=arr.length-1;i>=0;i--){
//     reverse.push(arr[i])
//   }
//   return reverse;
// }

// let arr=[1,2,3,4]
// console.log(reversed(arr))



// Q3. Count of Even Numbers

// Ek integer array diya gaya hai.
// Task: Array me kitne even numbers (जो 2 से divisible हैं) hai, unka count nikalna hai.

// Example:
// Input: arr = [1, 2, 3, 4, 6]
// Output: 3
// (kyunki even numbers hai: 2, 4, 6)


// function findevenNumber(arr){
//    for(let i=0;i<arr.length;i++){
//      if(arr[i]%2===0){
//       console.log(arr[i]+"is even")
//      }else {
//        console.log(arr[i]+"is odd")
//      }
//    }
// }

// console.log(findevenNumber([1,2,3,4,5,6]))



// Q6. First Occurrence Index of Target

// Ek integer array aur ek integer target diya gaya hai.
// Task: target pehli baar kis index par aaya hai, ye return karo.
// Agar target array me kahin bhi nahi hai, to -1 return karo.

// Example 1:
// Input: arr = [5, 3, 8, 3, 9], target = 3
// Output: 1

// Example 2:
// Input: arr = [1, 2, 3], target = 5
// Output: -1



// const findtarget=(arr,target)=>{
//    for(let i=0;i<arr.length;i++){
//     if(arr[i]===target){
//        console.log("target will be found",i)
//        return true
//     }
//    }
//    console.log("target will not found")
// }

// findtarget([5,3,8,3,9],3)
// findtarget([1,2,3],5)



// Q9. Difference Between Max and Min

// Ek integer array diya gaya hai.
// Task:

// Array ka maximum element nikalna

// Array ka minimum element nikalna

// Fir maximum - minimum ka result return karna

// Example:
// Input: arr = [3, 10, 6, 1]
// max = 10, min = 1
// Output: 9


// const maximumNumber=(arr)=>{
//    let max=arr[0]
//    for(let i=0;i<arr.length;i++){
//      if(arr[i]>max){
//       max=arr[i]
//      }
//    }
//    return max;
// }

// let arr=[3,10,6,1]
// console.log(maximumNumber(arr))



// Q8. Count Positive, Negative and Zero

// Ek integer array diya gaya hai.
// Task:

// Kitne elements positive hain

// Kitne elements negative hain

// Kitne elements zero hain

// Ye 3 count nikalna hai. (Tu chahe to console.log se print kar sakta hai)

// Example:
// Input: arr = [1, -2, 0, 5, 0, -3]
// Output:

// Positive: 2

// Negative: 2

// Zero: 2


// function findelement(arr){
//    let positive=0;
//    let negative=0;
//    let zero=0;

//    for(let i=0;i<arr.length;i++){
//        if(arr[i]>0){
//         positive++
//        } else if(arr[i]<0){
//          negative++
//        } else{
//         zero++
//        }
//    }

//    console.log("positive",positive)
//    console.log("negative",negative)
//    console.log("zero",zero)
// }

// let arr=[1, -2, 0, 5, 0, -3]
// console.log(findelement(arr))


// Q10. Check if Array is Sorted (Increasing Order)

// Ek integer array diya gaya hai.
// Task: Check karo ki array increasing order (chhote se bada) me sorted hai ya nahi.

// Agar har next element, previous se bada ya barabar ho → true

// Warna → false

// Example 1:
// Input: arr = [1, 2, 3, 4]
// Output: true

// Example 2:
// Input: arr = [1, 3, 2, 4]
// Output: false
  

// function findelement(arr){
//    for(let i=0;i<arr.length;i++){
//      if(arr[i]>arr[i+1]){
//        return false;
//      }
//    }
//    return true;
// }

// let arr=[1,2,3,4]
// console.log(findelement(arr))