var Person = /** @class */ (function () {
    /*constructor(private name: string, private designation: string){
      this.name = name;
      this.designation = designation;
    }*/
    function Person(name, designation) {
        this.name = name;
        this.designation = designation;
        this.showPerson = function () {
            console.log("Name: " + this.name + "\n" + this.designation);
        };
        this.printAge = function (age) {
            console.log("Age is: " + this.age);
        };
    }
    return Person;
}());
var person = new Person("Anil", "Sr. Developer");
person.showPerson();
person.printAge(30);
