// input digits:=[1,2,3]
// output=[1,2,4]


// function plusone(digits){
//   for(let i=digits.length-1;i>0;i--){
//     if(digits[i]<9){
//       digits[i]++
//      return digits;
//     }
//     digits[i]=0;
//   }
  
//   digits.unshift(1)
//   return digits;
// }
// let digits=[1,2,3]
// console.log(plusone(digits))


// input nums=[3,0,1]
// output2

// function missingnumber(nums){
//   let n=nums.length;
//   let total=(n*(n+1))/2
//   let sum=0;
//   for(let i=0;i<nums.length;i++){
//      sum+=nums[i]
//   }
//   return total-sum
// }
// let nums=[3,0,1]
// console.log(missingnumber(nums))


// input:nums=[0,1,0,3,12]
// output:[1,3,12,0,0]


// function movezeros(nums){
//   let j=0;
//   for(let i=0;i<nums.length;i++){
//     if(nums[i]!==0){
//       nums[j]=nums[i]
//         j++
//     }
    
//   }
//   for(let i=j;i<nums.length;i++){
//       nums[i]=0; 
//   }
//   return nums
// }
// let nums=[0,1,0,3,12]
// console.log(movezeros([0,1,0,3,12]))


// input num=[1,2,3]
// output=6

// function maximumproduct(nums){
//   nums.sort((a,b)=>a-b)
//   let n=nums.length;
//    return Math.max(
//     nums[n-1]*nums[n-2]*nums[n-3],
//     nums[0]*nums[1]*nums[n-1]
//    )
   
// }
// let nums=[1,2,3]
// console.log(maximumproduct([1,2,3]))
// console.log(maximumproduct([1,2,3,4]))
// console.log(maximumproduct([-1,-2,-3,-4]))



//  qn0=704Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4

// function search(nums,target){ 
//   for(let i=0;i<nums.length;i++){
//     if(nums[i]===target){
//       return i;
//     }
//   }
//   return -1;
// }
// let nums=[-1,0,3,5,9,12]
// console.log(search(nums,9))
// console.log(search(nums,2))

// function addnum(nums){
//    let sum=0;
//    for(let i=0;i<nums.length;i++){
//     sum+=nums[i]
//    }
//    return sum;
//  }
//  let nums=[1,1,1,1,1,]
//  console.log(addsum(nums))


// Input: nums = [3,2,1]  // qno=414
// Output: 1

// function thirdmax(nums){                 // thirdmax name hai nums argument liye
//   let distinct=[...new Set(nums)]      // let distinct ek variable hai new set wala duplicate elements ko nikalega
//   distinct.sort((a,b)=>b-a)            // fir sort krega bhai a,b ba asending to descending number//
//   return distinct[2]!==undefined?distinct[2]:distinct[0]  // bhai ye conditional rendering hai return distinct2 kro ya fir true    
//                                                                 // undefined  kro nahi to distinct 2 distinct 0 distinct 2 true  
//                                                                 // distinct [0] false hai//
//   }
// let nums=[3,2,1]     // bhai nums ka ek array hai uske ander nums hai
// console.log(thirdmax([3,2,1]));   // yaha per function ko call kiye//
// console.log(thirdmax([1,2]));    
// console.log(thirdmax([2,2,3,1]));