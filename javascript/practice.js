// Q2

// Array: [5, 10, 15, 20]
// Har value me 10 add karke naya array banao.

// let arr=[5,10,15,20]
// let b=arr.map((value)=>{
//   return value+10
// })

// console.log(arr)
// console.log(b)


// // Q3
// // Array: [10, 20, 30, 40]
// // Naya array banao jisme har element value + index ho.


// let arr=[10,20,30,40]
// let newArray=arr.map((value,index)=>{
//   return value+index
// })

// console.log(newArray)  // [10,21,32,43] value+index  value kuch nhi  hai index add hojayega 
// console.log(arr)// [10,20,30,40]


// Q4

// Array: [1, 2, 3, 4]
// Har element ka double wala naya array banao.


// let arr=[1,2,3,4]
// let doubledArray=arr.map((value)=>{
//     return value*2
// })

// console.log(arr) // original array // [1,2,3,4]
// console.log(doubledArray)  // [2,4,6,8]



// Q5
// Array: ["apple", "banana", "mango"]
// Naya array banao jisme sab fruits uppercase me ho.


// let arr=["apple","banana","mango"]
//  let newArray=arr.map((x)=>{
//      return x.toUpperCase()
//  })

//  console.log(arr) //['apple',banana,'mango] // original  array
//  console.log(newArray)  //["APPLE",'BANANA','MANGO']


// Q6

// Array: ["hi", "hello", "okay"]
// Naya array banao jisme har string ki length ho.


// let arr=["hi", "hello", "okay"] // ye string ka array  hai
//  let length=arr.map((str)=>{  // map  function ke  ander str name ka argument hai 
//    return str.length // mtlab str.length krdiye return
//  }) 
//  console.log(arr)  // arr ko console.log krdiye bhai
//  console.log(length) // yaha  string ka length kiye bhai


// Q7

// Array of objects:
// [{ name: "Ali", age: 17 }, { name: "Rohan", age: 20 }, { name: "Sara", age: 19 }]
// Naya array banao jisme sirf names ho.


// let arr=[{name:"Ali",age:17},{name:"Rohan",age:20},{name:"Sara",age:19}]
// let newArray=arr.map((value)=>{
//    return value.name
// })

// console.log(arr)
// console.log(newArray)
   

  
// Q8

// Array: [100, 200, 300]
// Naya array banao jisme har price me 18% GST add ho.


// let arr=[100,200,300]
// let newArray=arr.map((value)=>{
//    return value*1.18 // 18% gst  add kre
// })

// console.log(arr)
// console.log(newArray)  



// Q9

// Array: [35, 50, 80, 25]
// Naya array banao jisme har marks ke liye "Pass" ya "Fail" likha ho
// (40 ya usse jyada → "Pass", warna "Fail").


// let marks=[35,50,80,25]
// let result=marks.map((value)=>{
//   if(value>=40){
//     return "pass"
//   }else{
//     return 'fail'
//   }
// })

// console.log(marks)
// console.log(result)


// Q10

// Array: ["Pen", "Book", "Laptop"]
// Naya array banao jisme format ho:
// "1. Pen", "2. Book", "3. Laptop".


// let product=["pen","Book","Laptop"]
// let newproduct=product.map((value,index)=>{
//     return `${index+1}`,{value}
// })

// console.log(product)
// console.log(newproduct)


// let product=["pen",'pencil','box']
// let newproduct=product.map((value,index)=>{
//   return `${index}`,{value}
// })

// console.log(product)
// console.log(newproduct)



// **************************||
   // Filter method practice ||
// **************************||

// Array:
// [1, 2, 3, 4, 5, 6]
// Naya array banao jisme sirf even numbers ho.


//  let arr=[1,2,3,4,5]
//  let evenNumber=arr.filter((value)=>{
//     if(value%2===0){
//       return true
//     } else{
//        return false
//     }
//  })

//  console.log(arr) // yeh original krdiya//
//  console.log(evenNumber) //[2,4] //even number usko bolte hai  jo  2 se divide hai //



// q2
// Array:
// [10, 25, 30, 5, 40]
// Naya array banao jisme sirf 20 se bade numbers ho.
 

// let arr=[10,25,30,5,40]
// let greater=arr.filter((value)=>{
//    if(value>=20){
//     return true
//    } else{
//     return false
//    }
// })

// console.log(arr) //[10,25,30,5,40]  //  yeh  ariginal  array  ha i ariginal array  never can  change//
// console.log(greater)  //[25,30,40]  // yeh greater number define kr diya bhai



// Q3

// Array:
// [3, 7, 11, 12, 18, 19]
// Naya array banao jisme sirf 10 ya usse jyada aur 20 se kam numbers ho.



// let arr=[3,7,11,12,18,19]
// let number=arr.filter((value)=>{
//     if(value>=10 &&value<20){
//        return true
//     } else{
//        return false
//     }
// })

// console.log(arr)  //[3,7,1,12,18,19]
// console.log(number)  //[11,12,18,19] 



// Q4
// Array:
// ["apple", "kiwi", "banana", "mango", "fig"]
// Naya array banao jisme sirf woh fruits ho jinki length > 5 ho.


// let fruits=["apple","kiwi","banana","mango","fig"]
//  let length=fruits.filter((value)=>{
//     if(value.length==5){
//       return true;
//     }else{
//       return false;
//     }
//  })

//  console.log(fruits) ["apple","kiwi","banana","mango","fig"]
//  console.log(length)  ["apple","mango"]


// Q5
// Array:
// ["cat", "dog", "elephant", "cow", "tiger"]
// Naya array banao jisme sirf woh words ho jisme letter "o" ho.


//  let animals=["cat","dog","elephant","cow","tiger"]
//   let a2=animals.filter((value)=>{
//      return value.includes('o')  //  yeh includes krta jisko bhi krna hai
//   })

//   console.log(animals)  // ["cat","dog","elephant","cow","tiger"]
//   console.log(a2)  //["dog","cow"]


// Q6
// Array of objects:
// [{ name: "Ali", age: 17 }, { name: "Rohan", age: 20 }, { name: "Sara", age: 16 }, { name: "Imran", age: 22 }]
// Naya array banao jisme sirf 18+ age wale log ho.



// let person=[{name: "Ali", age: 17 },{ name: "Rohan", age: 20 },{ name: "Sara", age: 16 },{ name: "Imran", age: 22 }]
//  let aged=person.filter((value)=>{
//    if(value.age>18){
//      return  true;
//    }else{
//      return false;
//    }
//  })

//  console.log(person) //[{ name: "Ali", age: 17 }, { name: "Rohan", age: 20 }, { name: "Sara", age: 16 }, { name: "Imran", age: 22 }]
//  console.log(aged)  //  yeha per adult ka aged nikalna tha value.gae [{ name: "Rohan", age: 20 },{ name: "Imran", age: 22 }] 



// 7
// Array of objects:
// [{ product: "Pen", price: 10 }, { product: "Book", price: 50 }, { product: "Bag", price: 300 }, { product: "Pencil", price: 5 }]
// Naya array banao jisme sirf woh products ho jinka price ≥ 50 ho.  


//  let product=[{ product: "Pen", price: 10}, { product: "Book", price: 50 },{ product: "Bag", price: 300 },{ product: "Pencil", price: 5 }]
//   let priced=product.filter((value)=>{
    
//      if(value.price<=50){
//       return  true;
//      }else{
//       return false
//      }
//   })
//  console.log(product); [{ product: "Pen", price: 10}, { product: "Book", price: 50 },{ product: "Bag", price: 300 },{ product: "Pencil", price: 5 }] 
//  console.log(priced) [ { product: "Pencil", price: 5 },{ product: "Pen", price: 10}]  // ismein check krna hai  ke kiska price 50 ke niche hai  uska output de



// Q8
// Array:
// [0, 1, "", "hello", null, 5, undefined, "world"]
// Naya array banao jisme sirf truthy values ho.


//  let arr=[0, 1, "", "hello", null, 5, undefined, "world"]
//   let truthy=arr.filter((value)=>{
//       if(value){
//         return true;
//       }else{
//         return false
//       }
//   })

//   console.log(arr) //[0, 1, "", "hello", null, 5, undefined, "world"] //  bhai  original  array
//   console.log(truthy) // ["1","hello","5","world"]  // yeh  hai truthy  values bhai 




// Q9
// Array:
// ["js", "python", "java", "c", "cpp", "ruby"]
// Naya array banao jisme sirf woh languages ho jinki length 3 ya usse jyada ho.


// let language=["js", "python", "java", "c", "cpp", "ruby"]

// let language1=language.filter((value)=>{
//     if(value.length==3){
//        return true;
//     } else{
//       return false;
//     }
// })
 
// console.log(language) // yeh original  array  hai  bhai   ["js","python","java","c","ruby","cpp"]
// console.log(language1)  // aur ismei n check krna  hai  bhai kon sa language ka length 3 hai  bhai ["cpp"]



// Q10
// Array of objects:
// [{ title: "Task 1", completed: true }, { title: "Task 2", completed: false }, { title: "Task 3", completed: true }, { title: "Task 4", completed: false }]
// Naya array banao jisme sirf completed === true wale tasks ho.


// let task=[{ title: "Task 1", completed: true }, { title: "Task 2", completed: false }, { title: "Task 3", completed: true }, { title: "Task 4", completed: false }]

// let completedtask=task.filter((value)=>{
//     if(value.completed==true){
//       return true;
//     }else{
//       return false
//     }
// })
  
// console.log(task)     
// console.log(completedtask)  //[{ title: "Task 1", completed: true },{ title: "Task 3", completed: true }]