// let traffic="";   // please enter the color you will give the answer

// if(traffic==="red"){
//   console.log("you will stop the car")
// }if(traffic==="yellow"){
//   console.log("you will ready")
// }if(traffic==="green"){
//   console.log("you will go")
// }else{
//   console.log("you go Anywhere")
// }


// function add(a,b){
//   return a+b

// }
// console.log(add(12,5))


// let arr=[
//   {
//     Name:"Afroz",
//     Age:20,
//     "Father-Name":"Md firoz"
//   }
// ];
// console.log(Arr)


// let arr = [
//   {
//     Name: "Afroz",
//     Age: 20,
//     "Father-Name": "Md Firoz"
//   }
// ];

// console.log(arr[1].Age);


// let str="madam"

// function ispalindrome(str){
//   let reversed=str.split("").reverse().join("")
//   if(str===reversed){
//     console.log(`${str} this is a palindrome`)
//   }else{
//     console.log(`${str} this is not palindrome number`)
//   }
//   return reversed
// }
// let str="madam"

// console.log(ispalindrome(str))




// function add(a,b,c,d){
//   return a+b+c-d
// }
// console.log(add(12,4,5,3))




// function ispalindrome(str){
//   let reversed=str.split("").join("")
//   if(str===reversed){
//     console.log(`${str} is palindrome`)
//   }else{
//     console.log(`${str} is not palindrome`)
//   }
//   return reversed;
// }

// let str="madam"
// console.log(ispalindrome(str))


// function add(a,b,c,d){
//   return a+b+c+d
// }
// console.log(add(1,2,3,4))


// console.log(+1)
// console.log(-2)



// console.log("Afroz"+"Alam")




// let traffic="red";

// if(traffic==="red"){
//   console.log("you will be stop")
// }if(traffic==="yellow"){
//   console.log("you will be ready")
// }if(traffic==="green"){
//   console.log("you will go")
// }else{
//   console.log("you will go Anywhwere")
// }


// function findispalindrome(str,str1){
//   let reversed=str.split('').reverse().join("")
//   if(str===reversed){
//     console.log(`${str} is palindrome`)
//   }else{
//     console.log(`${str} is not a palindrome`)
//   }
//   return reversed
// }
// let str="madam"
// let str1="Hello"
// console.log(findispalindrome(str))
// console.log(findispalindrome(str1))


// function findlargestnumber(num){
//   let max=num[0]
//   for(let i=0;i<num.length;i++){
//     if(max<num[i]){
//     max=num[i]
//     }
//   }
//     return max
// }
// let num=[12,1,2,3,4,5]
// console.log(findlargestnumber(num))


function findsmallestnumber(num){
  let small=num[0]
  for(let i=0;i<num.length;i++){
    if(small>num[i]){
      small=num[i]
    }
  }
  return small
}
let num=[1,2,3,4,5]
console.log(findsmallestnumber(num))