let age = 17
age<18 ? console.log("you are young") : console.log("you are old")


a=true
b=false

a && b ? console.log("you are young") : console.log("you are old")

//&& goes thru the conditions left to right until it finds a false one then it executes second part
//if no false encontered first part is executed 
//when false is encountered the other conditions are not exermined

a || b ? console.log("you are young") : console.log("you are old")

// || goes thru the conditions left to right until it finds a true one then it executes first part
//if no true encontered second part is executed 
//when true is encountered the other conditions are not exermined

//arrow functions

const squared =(x)=>{
    return x**2
}
console.log(squared(4))

//object destructuring


const person={
    name:"Joe",
    agee:27,
    isMarried : true,
}
//1.we can assign individually

let nam=person.name
let agge = person.age
let isMarriedd = person.isMarried

//2.or we can 

let { name , agee, isMarried}=person//must have same names as in the object

name === person.name ? console.log("method 1 and 2 are same") : console.log("method 1 and 2 are not same")

//person one can have all other extics same but not name so we use spread operator

const person2={...person,name:"Jack"}

const arr=[1,23,3,4,5]
const arr2=[...arr,2,3,4]
console.log(arr2)

