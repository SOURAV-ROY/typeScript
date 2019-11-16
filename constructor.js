var Point = /** @class */ (function () {
    // draw: () => void;
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        //       console.log('X: ' + this.x + ' Y: ' + this.y);
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //*************
    };
    return Point;
}());
// let point: ClassStart;
// This point Is Object ********
// let point = new Point(5, 25);
var point = new Point(15, 30);
// point.x = 12;
// point.y = 24;
point.draw();
