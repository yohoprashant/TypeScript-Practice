import { Area } from './area';

let area = new Area(20,30);
area.breadth=50;
area.length=100;
area.area();

//tsc 8.module.ts --target es2017 -module commonjs