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






// Input: nums = [1,2,2,4] // qn0=645//
// Output: [2,3]
// Example 2:

// Input: nums = [1,1]
// Output: [1,2]

// function finderrornum(nums){    
//   let dublicate,missing;
//   let set=new Set()
//   for(let i=0;i<nums.length;i++){
//     if(set.has(nums[i])){
//       dublicate=nums[i]
//     }
//     set.add(nums[i])
//   }
//     for(let i=1;i<=nums.length;i++){
//       if(!set.has(i)){
//         missing=i;
//       }
//     }
//     return [dublicate,missing]

// }
// let nums=[1,2,2,4]
// console.log(finderrornum([1,2,2,4]))
// console.log(finderrornum([1,1]))


// Input: prices = [7,1,5,3,6,4] qn0=121
// Output: 5
// Input: prices = [7,6,4,3,1]
// Output: 0
// 

// function maxprofit(prices){     // max profit name ka variable function ka name liye prices argument hai//
//   let minprice=Infinity;        // let minprice name ka variable infinity value hai jiska mtlab bahut bda number jiska koi end nhi hai//
//   let maxprofit=0;               // ek aur variable liye max-profit name ka value 0 hai
//  for(let i=0;i<prices.length;i++){  // yaha per for loop lagye 0 prices length i<6 tk chalega//
//     if(prices[i]<minprice){         // fir condition lagaye price[i]<infinity hai jaise ke prices[i] prices ka index infinty se bda hai to
//       minprice=prices[i]           // minprice=price[i] mtlab minprice equal prices ka index tk  
//     }else{                               // else condition jisko false bolte hai 
//       let profit=prices[i]-minprice   // yaha per profit name ka variable prices[i]-minprice prices ka jitna number hai usko minprice se -krdo //
//       if(profit>maxprofit){          // agr profit bda hai  //
//         maxprofit=profit            // to kya kro maxprofit=profit maxprofitand profit dono equal hai//
//       }
//     }
//   }
//   return maxprofit;              // agr equal hai return maxprofit krdo//
// }
// let prices=[7,1,5,3,6,4]  // yah array ka value hai 
// console.log(maxprofit([7,1,5,3,6,4]))  //yaha per function ka call kr rahe
// console.log(maxprofit([7,6,4,3,1]))


// example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.


// function intersection(nums1,nums2){
//   let result=[];
//   for(let i=0;i<nums1.length;i++){
//     for(let j=0;j<nums2.length;j++){
//       if(nums1[i]===nums2[j]){
//        if(!result.includes(nums1[i])){
//           result.push(nums1[i])
//        }
//       }
//     }
//   }
//   return result;
// }
// let nums1=[1,2,2,1]
// let nums2=[2,2]
// console.log(intersection(nums1,nums2))

// nums1=[4,9,5]
// nums2=[9,4,9,8,4]
// console.log(intersection(nums1,nums2))


// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Example 2:
// Input: s = "race a car"
// Output: false
// Example 3:
// Input: s = " "
// Output: true

// function validpalindrome(s){  // valid palindrome name ka function name hai//
//  let clean=s.replace(/[^a-z0-9]/gi, "").toLowerCase()  // clean name variable s.replace[[a-z0-9]/gi,""] bhai a-se z tak fir 0-se 9 tk 
//  //                                                replace fir string kiye fir convert kiye to lowercase mtlab upper se lower kiyee

//  let reverse=clean.split("").reverse().join("")  // fir reverse name ka variable liye and clean ka varial split(convert inarray). fir reverse(reverse kro)," and the string wala join kron" 
//  return clean===reverse   // return clean====reverse mtlab comparison kiye
// }
// let s=["A man a plan,a canal:panama"]  // s name ka array and uske ander string bnaye//
// console.log(validpalindrome("A man,a plan,a canal:panama"))  // fir us ke baad function ko call kie
// console.log(validpalindrome("race a car"))  // fir function ko caal kiye//
// console.log(validpalindrome(""))  // fir function ko caal kiyye