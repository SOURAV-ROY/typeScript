class Point {
    // x: number;
    private x: number;
    // y: number;
   private y: number;

    // draw: () => void;
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {

//       console.log('X: ' + this.x + ' Y: ' + this.y);
        console.log('X: ' + this.x + ' Y: ' + this.y);
    }

    getDistance(another: Point) {
//*************
    }
}

// let point: ClassStart;
// This point Is Object ********
// let point = new Point(5, 25);
let point = new Point(15,30);
// point.x = 12;
// point.y = 24;
point.draw();
