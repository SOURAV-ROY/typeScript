class ClassStart {
    x: number;
    y: number;

    // draw: () => void;

    draw() {
//*****************
        console.log('X: ' + this.x + ' Y: ' + this.y);
    }

    getDistance(another: ClassStart) {
//*************
    }
}

// let point: ClassStart;
// This point Is Object ********
let point = new ClassStart;
point.x = 10;
point.y = 50;
point.draw();