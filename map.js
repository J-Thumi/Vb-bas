const arr=[1,2,3,4,56,8]

//map iteriates all values

//you can transform whole array using map function
//creates new array
//you can double,triple or even find the binary

//name.map(function)
//pass the function on what to be do to every element in the array

function double(x){
    return x * 2//double
}
const newArr=arr.map(double)//you can also write a function here in double
console.log(newArr)


function triple(y){
    return y * 3//triple
}
const out = arr.map(triple)
console.log(out)


function binary(t){
    return t.toString(2)//to binary
}
const output = arr.map(binary)
console.log(output)

//we can also write  arrow functions in the map()
//the curly brackets and return are not a must
const outputs=arr.map((i)=>i * 0.5)//half the array
console.log(outputs)


const users=[
    {firstname: "Jos" , lastname: "Wesh" ,age:34},
    {firstname: "Mark", lastname:"Kar", age:15},
    {firstname: "john", lastname:"doe", age:56},
    {firstname:"faith",lastname:"minoi",age:20}
]
const fullname=users.map((x)=>x.firstname + " " + x.lastname)
console.log(fullname)