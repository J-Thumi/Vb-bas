const arr=[1,2,3,4,5,7,56,8]

//used to filter specific values
//e.g even ,odd ,divisible by 3 etc


function isOdd(x){
    return x % 2 //odd
}
const output =arr.filter(isOdd)
console.log(output)


function isEven(y){
    return y % 2 === 0//odd
}
const outputs =arr.filter(isEven)
console.log(outputs)


function isgreaterthanfifty(y){
    return y > 50//greater than fifty
}
const out =arr.filter(isgreaterthanfifty)
console.log(out)

const a = arr.filter((t)=>t>50)
console.log(a)

const users=[
    {firstname: "Jos" , lastname: "Wesh" ,age:34},
    {firstname: "Mark", lastname:"Kar", age:15},
    {firstname: "john", lastname:"doe", age:6},
    {firstname:"faith",lastname:"minoi",age:20}
]
//to get users below 18 years old
const young=users.filter((x)=>x.age <  18)
//the above gives a list of objects
//to get the first name only we can chain functions
//i.e filter with map
//the map iteriates through the formed array
const youngg=users.filter((x)=>x.age <  18).map((x)=>x.firstname)

console.log(young)
console.log(youngg)

