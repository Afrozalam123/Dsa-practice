// Input digits=[1,2,3]
// output=[1,2,4]

// function plusone(digits){
//    for(let i=digits.length-1;i>0;i--){
//     if(digits[i]!==0){
//       digits[i]++
//       return digits;
//     }
//     digits[i]=0;
//    }
//    digits.unshift(1)
//    return digits;
// }
// let digits=[1,2,3]
// console.log(plusone(digits))


// input nums=[3,0,1]
// output:2

// function missingnumber(nums){
//   let sum=0;
//   let n=nums.length;
//   let total=(n*(n+1))/2
  
//   for(let i=0;i<nums.length;i++){
//     sum+=nums[i]
//   }
//   return total-sum;
// }
// let nums=[3,0,1]
// console.log(missingnumber(nums))

// input nums=[0,1,0,3,12]
// output:[1,3,12,0,0]

// function movezeros(nums){
//   let j=0;
//   for(let i=0;i<nums.length;i++){
//     if(nums[i]!==0){
//       nums[j]=nums[i]
//       j++
//     }
//   }
//   for(let i=j;i<nums.length;i++){
//     nums[i]=0;
    
//   }
// return nums;
// }
// let nums=[0,1,0,3,12]
// console.log(movezeros([0,1,0,3,12]))


// input nums=[-1,0,3,5,9,12]
// target=9;
// output:4
//input nums=[-1,0,3,5,9,12]
// output=-1


// function search(nums,target){
//   for(let i=0;i<nums.length;i++){
//     if(nums[i]===target){
//         return i
//     }
//   }
//      return -1
// }
// let nums=[-1,0,3,5,9,12]
// console.log(search(nums,9))
// console.log(search(nums,2))


// input nums:[3,2,1]
// output:1
// input nums:[1,2]
// output:2

// function maximumproduct(nums){
//   let distinct=[...new Set(nums)]
//   distinct.sort((a,b)=>b-a)
//   return distinct[2]!==undefined?distinct[2]:distinct[0]
// }
// let nums=[3,2,1]
// console.log(maximumproduct([3,2,1]))
// console.log(maximumproduct([1,2]))
// console.log(maximumproduct([2,2,3,1]))



// input nums=[1,2,2,4]
// output=[2,3]
//input nums=[1,1]
// output:[1,2]


// function finderrornum(nums){
//   let duplicate,missing;
//   let set=new Set()
//   for(let i=0;i<nums.length;i++){
//     if(set.has(nums[i])){
//       duplicate=nums[i]
//     }
//     set.add(nums[i])
//   }
//    for(let i=1;i<nums.length;i++){
//     if(set.has(i)){
//       missing=i;
//     }
//    }
//    return [duplicate,missing]
// }
// let nums=[1,2,2,4]
// console.log(finderrornum([1,2,2,4]))
// console.log(finderrornum([1,1]))


// function finderrornum(nums){
//   let duplicate,missing;
//   let set=new Set()
//   for(let i=0;i<nums.length;i++){
//     if(set.has(nums[i])){
//       duplicate=nums[i]
//     }
//      set.add(nums[i])
//   }
//   for(let i=1;i<=nums.length;i++){
//     if(!set.has(i)){
//       missing=i
//     }
//   }
//   return [duplicate,missing]
// }
// let nums=[1,2,2,4]
// console.log(finderrornum([1,2,2,4]))
// console.log(finderrornum([1,1]))


//
// Input prices:[7,1,5,3,6,4]
// output:5
// input prices:[7,6,4,3,1]
// output:0;

// function maxprofit(prices){
//   let minprice=Infinity;
//   let maxprofit=0;
//   for(let i=0;i<prices.length;i++){
//     if(prices[i]<minprice){
//        minprice=prices[i]
//     }else{
//       let profit=prices[i]-minprice
//       if(profit>maxprofit){
//         maxprofit=profit
//       }
//     }
//   }
//   return maxprofit;
   
// }
// let prices=[7,1,5,3,6,4]
// console.log(maxprofit([7,1,5,3,6,4]))
// console.log(maxprofit((7,6,4,3,1)))


// input nums=[1,2,2,1] // nums2=[1,2]
//  output[2]
// nums1=[4,9,5]nnums2=[9,4,9,8,4]
// output [9,4]

// function intersection(nums1,nums2){
//   let result=[]
//   for(let i=0;i<nums1.length;i++){
//     for(let j=0;j<nums2.length;j++){
//       if(nums1[i]===nums2[j]){
//           if(!result.includes(nums1[i])){
//             result.push(nums1[i])
//           }
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


// function validpalindrome(s){
//   let clean=s.replace(/[^a-z,0-9]/gi, "").toLowerCase()
//   let reverse=clean.split("").reverse().join("")
//   return clean===reverse
// }

// let s=["A man plan a canal:panama"]
// console.log(validpalindrome("A man a plan a canal :panama"))
// console.log(validpalindrome("race a car"))
// console.log(validpalindrome(""))


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:
// Input: list1 = [], list2 = []
// Output: []
// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]


  // function mergedArray(list1,list2){
  //   let result=[];
  //  let i=0;j=0;
  //  for(let  i=0;i<list1.length;i++){
  //    result.push(list1[i])
  //  }
  //  for(let j=0;j<list2.length;j++){
  //   result.push(list2[j])
  //  }
  //  return result.sort((a,b)=>a-b)
  // }

  //  console.log(mergedArray([1,2,4],[1,3,4]))
  //  console.log(mergedArray([],[]))
  //  console.log(mergedArray([],[0]))



//   var mergeTwoLists = function(list1, list2) {
//     let result=[]
//     let  i=0;j=0;
//     for(let i=0;i<list1.length;i++){
//         result.push(list1[i])
//     }

//     for(let j=0;j<list2.length;j++){
//         result.push(list2[j])
//     }

//     return result.sort((a,b)=>a-b)
    
// };

// console.log(mergeTwoLists([1,2,4],[1,3,4]))
// console.log(mergeTwoLists([],[]))
// console.log(mergeTwoLists([],[0]))    


// function mergeArray(list1,list2){
//     let result=[]
//     for(let  i=0;i<list1.length;i++){
//       result.push(list1[i])
//     }
//      for(let j=0;j<list2.length;j++){
//       result.push(list2[j])
//      }   
//      return result.sort((a,b)=>a-b) 
// }
// console.log(mergeArray([1,2,4],[1,3,4]))
