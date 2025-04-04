const mySym = Symbol("Key1")
const obj ={
    name : "Akash",
    [mySym] : "MyKey1",
    Email : "Akashji@gmail.com",
    age:19,
    isLoggedIn:false
}
// console.log(obj.name)
// console.log(typeof obj["name"]);
// console.log(typeof mySym);


obj.greeting = function(){
    console.log("Hello");
    
}
console.log(obj.greeting());
console.log(`Hello My name is ${obj.name} and my age is ${obj.age} ,my email is ${obj.Email}`);


