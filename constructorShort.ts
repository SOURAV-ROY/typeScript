class ConstructorShort {

    constructor(private x?: number, private y?: number) {

    }

    getThis(){
        return this.x;
    }

    draw() {

//       console.log('X: ' + this.x + ' Y: ' + this.y);
        console.log('X: ' + this.x + ' Y: ' + this.y);
    }

}

// let point: ClassStart;
// This point Is Object ********
// let point = new Point(5, 25);
let point = new ConstructorShort(25, 35);
// point.x = 12;
// point.y = 24;
point.draw();
