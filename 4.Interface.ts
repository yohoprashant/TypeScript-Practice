/*Interfaces define properties, methods, and events, which are the members of the interface. 
Interfaces contain only the declaration of the members. It is the responsibility of the deriving 
class to define the members. It often helps in providing a standard structure that the deriving 
classes would follow.*/

interface Person { 
   name:string, 
   designation:string,
   age:number,
   sayHi: ()=>string 
} 


var customer:Person = { 
   name:"Prashant",
   designation:"Sr. Developer",
   age:34,
   sayHi: () =>{return  "Hi world"} 
} 

console.log(customer.name);
console.log(customer.sayHi());