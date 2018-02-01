"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const area_1 = require("./area");
let area = new area_1.Area(20, 30);
area.breadth = 50;
area.length = 100;
area.area();
//tsc 8.module.ts --target es2017 -m commonjs
