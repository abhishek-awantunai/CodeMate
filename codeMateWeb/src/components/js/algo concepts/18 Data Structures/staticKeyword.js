/* 

Static keyword before a function in a class

Instance Methods :-
Class Methods :-

*/


class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    printPoints() {
        console.log(this.x, this.y);
    }

    static distanceBetweenPoints(p1, p2) {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;

        return Math.hypot(dx, dy)
    }
}

const point1 = new Point(3,6);
const point2 = new Point(5,9);

point1.printPoints();
point2.printPoints();

console.log(Point.distanceBetweenPoints(point1, point2));