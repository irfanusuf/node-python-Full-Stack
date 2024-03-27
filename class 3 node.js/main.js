// Data types 
const x =  "irfan"    // string
const y = 78     //number
const a = null     // null data type
const b = true    // boolean
const c = undefined   // undefined datatypes
const d = Symbol    // symbol 


//js object 
const car = {
 color : "white",
 model : "1999",
 engine_Capacity : "2000cc",
}

const sArr = ["apple" , "banana" , " orange"] 


sArr.pop()
sArr.push("kiwi")
sArr.push("pineapple")
// console.log(sArr)



const evenNumbers = [2,4,6,8,10]
evenNumbers.push(12)
evenNumbers.pop()

evenNumbers.shift()
evenNumbers.unshift("2")
// delete evenNumbers[0]
// delete evenNumbers[3]

// console.log(evenNumbers)









 // js array   // multi assciated array 
const arr = [

        {
        color : "white",
        model : "1999",
        engine_Capacity : "2000cc",
       }
       , 
       {
        color : "red",
        model : "1998",
        engine_Capacity : "1900cc",
       },
       {
        color : "black",
        model : "2003",
        engine_Capacity : "2500cc",
       }
]

// console.log(arr)





// simple function 
function sum (a,b){

    return a+b

}

function multiply (a,b,c){

    return(a*b*c)    //logic
}
//sum(43,67)  //function invoke    can be done only another function which is called as function callback 
       





//arrow function    // anonymous function 

()=>{}


const index = (time)=>{

    if(time < 12){
        console.log("good morning ")
    }
    else if (time >12){
        console.log("good evening ! ")
    }
    else {
          console.log("some Error  ! ") 
    }
     
    
}





























// javascript variables

// const x = 37

// let y = 45

// var z = 56


// console.log(z)


// {var z = 34}
// console.log(z)




// {let y =477 

// console.log(y)
// }




