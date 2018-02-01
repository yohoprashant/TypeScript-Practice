var Area = /** @class */ (function () {
    function Area(_length, _breadth) {
        this._length = _length;
        this._breadth = _breadth;
    }
    Area.prototype.area = function () {
        console.log("Area :" + this._length * this._breadth);
    };
    Object.defineProperty(Area.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (length) {
            this._length = length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Area.prototype, "breadth", {
        get: function () {
            return this._breadth;
        },
        set: function (breadth) {
            this._breadth = breadth;
        },
        enumerable: true,
        configurable: true
    });
    return Area;
}());
var area = new Area(20, 30);
area.breadth = 50;
area.length = 100;
area.area();
