//promise
//in callbacks, we involve parent,child,grandchild,great grandchild.....
//to avoid this we use promises for cleaner and more readable code

//a promise is made and it can either be resolved or rejected 
//a customer comes to the shop we promise to deliver something 
//it can be possible hence we continue to resolve it i.e make the icecream according to the steps (.then)
//or impossible i.e not instock (.catch) hence we reject
//if a promise is resolved or rejected the waiter must continue serving (.finally)

//we must know
//relationship between time and work
//promise chaining
//error handling
//finally handler

let stocks={
    Fruits: ["grapes","apple","banana","strawberry"],
    Liquid : ["water","ice"],
    holder : ["cone","cup","stick"],
    toppings : ["chocolate","peanuts"],

}

//1.condition if to reject or resolve create a boolean
//2.create function eg order with time and work as parameters this is the parent 
//3.the function should return new Promise() in the brackets create a function with parameters resolve and reject this is the child
//4.use if statement to declare if resolved what to be done and in the statement setTimeout() in it a function resolve(work()) as what to be done by the function and timeout this is the grand child
//5.else if it is impossible to resolve ,reject and what to output if rejected also the grandchild

//6.call the order function place timeout arg in time parameter and in the work write a function to do what is needed
//7. .then() in it a function returning the order function following the rules in 6
//8. chain the promises in order repeating 7 
//9. in error handling use .catch() in it write code to be executed if imposible to resolve i.e if rejected
//10 if 1 is false 9 and 5 are executed if true they are not

let is_shop_open=false//condition if to reject or resolve

let order = (time,work)=>{//create function with time and work as parameters

    return new Promise( ( resolve,reject )=>{//the function should return new Promise() in the brackets create a function with parameters resolve and reject
        

        if(is_shop_open){//use if statement to declare if resolved what to be done and in the statement setTimeout() in it a function resolve(work()) as what to be done by the function and timeout
            setTimeout(()=>{
                resolve(work())//relationship between time and work
            },time)
            
        }

        else{//else if it is impossible to resolve ,reject and what to output if rejected
            reject(console.log("shop closed"))
        }
    })
}

order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))//if a fuction is sigle line no need of {}
//promise chaining

//place order takes 2 sec
//production starts immediately
//cut the fruit takes 2 s
//add water and ice takes 1 sec
//start machine takes 1 sec
//select container takes 2 sec
//select toppings takes 3 sec
//serve ice cream takes 2 sec
.then(()=>{
    return order(0,()=> console.log("production has started"))//call the function order with time and work parameters
})

.then(()=>{
    return order(2000, ()=> console.log("cutting the fruits complete"))
})

.then(()=>{
    return order(1000, ()=> console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} added`))
})

.then(()=>{
    return order(1000, ()=> console.log("machine started"))
})

.then(()=>{
    return order(2000, ()=> console.log(`${stocks.holder[0]} selected as the container/holder and ice cream added to it`))
})

.then(()=>{
    return order(3000, ()=> console.log(`${stocks.toppings[0]} topped on the ${stocks.holder[0]}`))
})

.then(()=>{
    return order(2000, ()=> console.log("icecream served") )
})

.catch(()=>{
    console.log("customer left")//error handling
})

.finally(()=>{
    console.log("day ended, shop closed")//finally handler
})