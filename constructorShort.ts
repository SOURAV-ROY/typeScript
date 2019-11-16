class ConstructorShort {

    constructor(private _x?: number, private _y?: number) {

    }

    get x() {
        return this._x;
    }

    set x(value) {
        if (value < 0)
            throw new Error("Value can not be Zero");

        this._x = value;
    }

    draw() {

//       console.log('X: ' + this.x + ' Y: ' + this.y);
        console.log('X: ' + this._x + ' Y: ' + this._y);
    }

}

// let point: ClassStart;
// This point Is Object ********
// let point = new Point(5, 25);
let point = new ConstructorShort(25, 35);
// point.x = 12;
// point.y = 24;
// point.setX(19);
// let x = point.getX();
let x = point.x;
point.x = 2019;
point.draw();
