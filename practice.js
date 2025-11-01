// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4


// function search(nums,target){  // leetcode qn0=704
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



// Input:nums=[-1,0,3,5,9,12], target=9
// output:4

// function binarysearch(nums,target){
//   for(let i=0;i<nums.length;i++){
//     if(nums[i]===target){
//       return i;
//     }
//   }
//   return -1
// }
// let nums=[-1,0,3,5,9,12]
// console.log(binarysearch(nums,9))
// console.log(binarysearch(nums,2))

//  function addnum(nums){
//    let sum=0;
//    for(let i=0;i<nums.length;i++){
//     sum+=nums[i]
//    }
//    return sum;
//  }
//  let nums=[1,1,1,1,1,]
//  console.log(addsum(nums))

//  Input: nums = [3,2,1]
// Output: 1
// Input: nums = [1,2]
// Output: 2

// sol: qn0=414
function thirdnumber(nums){
  return nums[nums.length-1]
}
let nums=[3,2,1]
console.log(thirdnumber([3,2,1]))
console.log(thirdnumber([1,2]))