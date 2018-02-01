class Person { 
   private pName:string;
   private pDesignation:string;
   constructor(name, designation){
   	this.pName = name;
   	this.pDesignation = designation;
   }
   public showPerson = function(){
   	console.log("Name: " + this.pName + "\n" + this.pDesignation);
   }

}

let person = new Person("Anil","Sr. Developer");
person.showPerson();