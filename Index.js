// input digits:[1,2,3]
// output:[1,2,4]

//  const plusone=(digits)=>{
//    for(let i=digits.length-1;i>0;i--){
//       if(digits[i]<9){
//         digits[i]++
//         return digits;
//       }
//       digits[i]=0;
//    }
//    digits.unshift(1)
//    return digits;
//  }

//  console.log(plusone([1,2,3]))

 // input nums=[3,0,1]
 // output 2;

//  const missingnumber=(nums)=>{
//     let n=nums.length;
//     let total=(n*(n+1))/2
//     let sum=0;
//     for(let i=0;i<nums.length;i++){
//        sum+=nums[i]
      
//     }
//      return total-sum
//  }

//  console.log(missingnumber([3,0,1]))

// input:nums=[0,1,0,3,12]
// output:[1,3,12,0,0]

// function movezeros(nums){
//    let j=0;
//    for(let i=0;i<nums.length;i++){
//      if(nums[i]!==0){
//       nums[j]=nums[i]
//       j++
//      }
//    }
//    for(let i=j;i<nums.length;i++){
//      nums[i]=0;
//    }
//    return nums
// }

// console.log(movezeros([0,1,0,3,12]))



// input num=[1,2,3]
// output=6


// function maximumproduct(nums){
//    nums.sort((a,b)=>a-b)
//    let n=nums.length;
//     return Math.max(
//       nums[n-1]*nums[n-2]*nums[n-3],
//       nums[0]*nums[1]*nums[n-1]
//     )
    
// }
// let nums=[1,2,3]
// console.log(maximumproduct([1,2,3]))
// console.log(maximumproduct([1,2,3,4]))
// console.log(maximumproduct([-1,-2,-3,-4]))


//  Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4    //qn0=704


// function search(nums,target){
//    for(let i=0;i<nums.length;i++){
//      if(nums[i]==target){
//        return i;
//      }
//    }
//    return -1
// }
// let nums=[-1,0,3,5,9,12]
// console.log(search(nums,9))
// console.log(search(nums,2))


// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Example 5:

// Input: s = "([)]"

// Output: false



// function isvalid(s){
//    let stack=[]
//    for(let ch of s){
//     if(ch=="(") stack.push(")")
//       else if(ch=="{") stack.push("}")
//       else if(ch=="[") stack.push("]")
//        else if(stack.pop()!==ch) return false;
//    }
//    return stack.length===0;
// }

// console.log(isvalid("()"))
// console.log(isvalid("()[]{}"))
// console.log(isvalid("(]"))
// console.log(isvalid("([])"))
// console.log(isvalid("([)]"))


