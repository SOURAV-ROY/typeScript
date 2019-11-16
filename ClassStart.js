var ClassStart = /** @class */ (function () {
    function ClassStart() {
    }
    // draw: () => void;
    ClassStart.prototype.draw = function () {
        //*****************
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    ClassStart.prototype.getDistance = function (another) {
        //*************
    };
    return ClassStart;
}());
;
// let point: ClassStart;
var point = new ClassStart;
point.x = 10;
point.y = 50;
point.draw();
