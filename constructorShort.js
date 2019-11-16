var ConstructorShort = /** @class */ (function () {
    function ConstructorShort(x, y) {
        this.x = x;
        this.y = y;
    }
    ConstructorShort.prototype.draw = function () {
        //       console.log('X: ' + this.x + ' Y: ' + this.y);
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    return ConstructorShort;
}());
// let point: ClassStart;
// This point Is Object ********
// let point = new Point(5, 25);
var point = new ConstructorShort(25, 35);
// point.x = 12;
// point.y = 24;
point.draw();
