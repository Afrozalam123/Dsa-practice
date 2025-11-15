//  Q.1// Input: digits = [1,2,3]
// Output: [1,2,4]




// function plusone(digits){
//   for(let i=digits.length-1;i>0;i--){
//     if(digits[i]!==0){
//       digits[i]++
//       return digits
//     }
//   digits[i]=0;
//   }
//   digits.unshift(1)
//   return digits
  
// }
// let digits=[1,2,3]
// console.log(plusone(digits))


// q.2// Input: nums = [3,0,1]
//    // output:2


// function missingNumber(nums){
//   let n=nums.length;
//   let total=(n*(n+1))/2
//   let sum=0
//   for(let i=0;i<nums.length;i++){
//     sum+=nums[i]
    
//   }
//  return total-sum
// }
// let nums=[3,0,1]
// console.log(missingNumber(nums))

// /4 Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]



// function movezeros(nums){
//   let j=0;
//   for(let i=0;i<nums.length;i++){
//     if(nums[i]!==0){
//       nums[j]=nums[i]
//       j++
//     }
//   }
//   for(let i= j;i<nums.length;i++){
//     nums[i]=0;
//   }
//   return nums

// }
// let nums=[0,1,0,3,12]
// console.log(movezeros([0,1,0,3,12]))


// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true

// Example 2:
// Input: s = "race a car"
// Output: false

// Example 3:
// Input: s = " "
// Output: true


// function validpalindrome(s){
//   let clean=s.repalce((/[^a-z0-9]/gi, "")).tolowerCase()
//   let reverse=clean.split().reverse('').join('')
//   return clean===reverse
// }
// let s=["A man,a plan,a canal:panama"]
// console.log(validpalindrome(['A man a plan,a canal:panam']))
// console.log(validpalindrome(['race a car']))
// console.log(validpalindrome([""]))


// function validpalindrome(s) {
//   // Clean the string
//   let clean = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

//   // Reverse the cleaned string
//   let reverse = clean.split("").reverse().join("");

//   // Check palindrome
//   return clean === reverse;
// }

// // Test cases
// console.log(validpalindrome("A man, a plan, a canal: Panama")); // true
// console.log(validpalindrome("race a car")); // false
// console.log(validpalindrome(" ")); // true


function validpalindrome(s){
  let clean=s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let reverse=clean.split("").reverse().join('')
  return clean===reverse
}
let s=['A man a plan ,a canal,:panama']
console.log(validpalindrome("A man, a plan, a canal:panam"))
console.log(validpalindrome("race a car"))
console.log(validpalindrome(""))
