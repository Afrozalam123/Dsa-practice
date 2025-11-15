//  Q.1// Input: digits = [1,2,3]
// Output: [1,2,4]

//  function plusone(digits){
//   for(let i=digits.length-1;i>0;i--){
//     if(digits[i]<9){
//       digits[i]++
//       return digits;
//     }
//      digits[i]=0
//   }
//   digits.unshift(1);
//   return digits
//  }
//  let digits=[1,2,3]
//  console.log(plusone(digits))


// q.2// Input: nums = [3,0,1]
//    // output:2

//  function missingNumber(nums){
//   let n=nums.length;
//   let total=(n*(n+1))/2
//   let sum=0;
//   for(let i=0;i<nums.length;i++){
//    sum+=nums[i]
//   }
//   return total-sum;
//  }
//  let nums=[3,0,1]
//  console.log(missingNumber(nums))


//  function missingNumber(nums){
//   let n=nums.length;
//   let total=(n*(n+1))/2
//   let sum=0;
//   for(let i=0;i<nums.length;i++){
//     sum+=nums[i]
//   }
//   return total-sum
//  }
//  let nums=[1,0,3]
//  console.log(missingNumber(nums))


//  function plusOne(digits){
// for(let i=digits.length-1;i>0;i--){
//   if(digits[i]<9){
//     digits[i]++
//     return digits;
//   }
//  digits[i]=0
// }
//  digits.unshift(1)
//  return digits;
//  }
//  let digits=[1,2,3]
//  console.log(plusOne(digits))

//4 Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]


function movezeros(nums){
  let j=0;
  for(let i=0;i<nums.length;i++){
    if(nums[i]!==0){
      nums[j]=nums[i]
      j++
    }
  }
  for(let i= j;i<nums.length;i++){
    nums[i]=0;
  }
  return nums

}
let nums=[0,1,0,3,12]
console.log(movezeros([0,1,0,3,12]))