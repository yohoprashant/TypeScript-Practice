class Area {
	constructor(private _length:number, private _breadth:number){

	}
	area(){
		console.log("Area :" + this._length * this._breadth);
	}

	get length(){
		return this._length;
	}
	set length(length){
		this._length = length;
	}
	get breadth(){
		return this._breadth;
	}
	set breadth(breadth){
		this._breadth = breadth;
	}
}

let area = new Area(20,30);
area.breadth=50;
area.length=100;
area.area();

//tsc 7.Properties.ts --target ES2016