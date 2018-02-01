var Person = /** @class */ (function () {
    function Person(name, designation) {
        this.showPerson = function () {
            console.log("Name: " + this.pName + "\n" + this.pDesignation);
        };
        this.pName = name;
        this.pDesignation = designation;
    }
    return Person;
}());
var person = new Person("Anil", "Sr. Developer");
person.showPerson();
