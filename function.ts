// let log = function (message) {
//     console.log(message)
// }

//Arrow Function In TS ****************
let doLog = (message) => console.log(message);

let doTsLog = () => console.log();

interface Point {
    x: number,
    y: number,
    name: string,
    age: number
}

// let drawPoint = (point: {x: number, y: number, name: string, age: number}) => {
let drawPoint = (point: Point) => {

};

drawPoint({
    x: 1,
    y: 2,
    name: 'sourav',
    age: 22
});

let getDistance = (pointA: Point, pointB: Point) => {

};