class Person { 
   
   /*constructor(private name: string, private designation: string){
   	 this.name = name;
   	 this.designation = designation;
   }*/
   constructor(private name: string, private designation: string){
   
   }
   public showPerson = function(){
   	console.log("Name: " + this.name + "\n" + this.designation);
   }
}

let person = new Person("Anil","Sr. Developer");
person.showPerson();
