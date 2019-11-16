var ConstructorShort = /** @class */ (function () {
    function ConstructorShort(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(ConstructorShort.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("Value can not be Zero");
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    ConstructorShort.prototype.draw = function () {
        //       console.log('X: ' + this.x + ' Y: ' + this.y);
        console.log('X: ' + this._x + ' Y: ' + this._y);
    };
    return ConstructorShort;
}());
// let point: ClassStart;
// This point Is Object ********
// let point = new Point(5, 25);
var point = new ConstructorShort(25, 35);
// point.x = 12;
// point.y = 24;
// point.setX(19);
// let x = point.getX();
var x = point.x;
point.x = 2019;
point.draw();
