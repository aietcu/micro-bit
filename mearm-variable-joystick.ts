input.onButtonPressed(Button.B, function () {
    mearm.closeGrip()
})
input.onButtonPressed(Button.A, function () {
    mearm.openGrip()
})
input.onButtonPressed(Button.AB, function () {
    reset22()
})
function reset22() {
    mearm.moveToCentre(MearmServo.Base)
    mearm.moveToCentre(MearmServo.Right)
    mearm.moveToCentre(MearmServo.Left)
    mearm.moveToCentre(MearmServo.Grip)
}
class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public toString(): string {
        return "Point[x:" + this.x + ", y:" + this.y + "]";
    }
}
function sign(p1: Point, p2: Point, p3: Point): number {
    return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
}
class Pie {
    p1: Point;
    p2: Point;
    p3: Point;

    constructor(p1: Point, p2: Point, p3: Point) {
        this.p1 = p1;
        this.p2 = p3;
        this.p3 = p3;
    }

    public toString(): string {
        return "Pie[" + this.p1 + ", " + this.p2 + ", " + this.p3 + " ]";
    }

    containsPoint(p: Point): boolean {
        // serial.writeLine(">> checking point:" + p + " in " + this);
        let d1 = sign(p, this.p1, this.p2);
        let d2 = sign(p, this.p2, this.p3);
        let d3 = sign(p, this.p3, this.p1);

        let hasNegative = (d1 < 0) || (d2 < 0) || (d3 < 0);
        let hasPositive = (d1 > 0) || (d2 > 0) || (d3 > 0);

        let inPie = !(hasNegative && hasPositive);
        // if (inPie) {
        //     serial.writeLine(">> " + p + " IS in " + this);
        // } else {
        //     serial.writeLine(">> " + p + " IS NOT in " + this);
        // }

        return inPie;
    }
}
class Quadrant {
    static readonly TopRightY: Pie = new Pie(new Point(0, 0), new Point(0, -100), new Point(100, -100));
    static readonly TopRightX: Pie = new Pie(new Point(0, 0), new Point(100, -100), new Point(100, 0));
    static readonly BottomRightX: Pie = new Pie(new Point(0, 0), new Point(100, 0), new Point(100, 100));
    static readonly BottomRightY: Pie = new Pie(new Point(0, 0), new Point(100, 100), new Point(0, 100));
    static readonly BottomLeftY: Pie = new Pie(new Point(0, 0), new Point(0, 100), new Point(-100, 100));
    static readonly BottomLeftX: Pie = new Pie(new Point(0, 0), new Point(-100, 100), new Point(-100, 0));
    static readonly TopLeftX: Pie = new Pie(new Point(0, 0), new Point(-100, 0), new Point(-100, -100));
    static readonly TopLeftY: Pie = new Pie(new Point(0, 0), new Point(-100, -100), new Point(0, -100));
}
function getSpeed(joystick: Joystick): number {
    return mearm.joystick(joystick) / 7;
}

reset22();
basic.forever(function () {
    let leftJoyX = mearm.joystick(Joystick.LeftJoyX);
    let leftJoyY = mearm.joystick(Joystick.LeftJoyY);
    let leftJoyPosition = new Point(leftJoyX, leftJoyY);
    // serial.writeLine(">> created left joystick point:" + leftJoyPosition);

    let rightJoyX = mearm.joystick(Joystick.RightJoyX);
    let rightJoyY = mearm.joystick(Joystick.RightJoyY);
    let rightJoyPosition = new Point(rightJoyX, rightJoyY);
    // serial.writeLine(">> created right joystick point:" + rightJoyPosition);

    control.inBackground(function () {
        if (Quadrant.BottomLeftX.containsPoint(leftJoyPosition) ||
            Quadrant.TopLeftX.containsPoint(leftJoyPosition) ||
            Quadrant.TopRightX.containsPoint(leftJoyPosition) ||
            Quadrant.BottomRightX.containsPoint(leftJoyPosition)) {
            mearm.moveByAngle(MearmServo.Base, getSpeed(Joystick.LeftJoyX));
        } else {
            mearm.moveByAngle(MearmServo.Right, -getSpeed(Joystick.LeftJoyY));
        }

        if (Quadrant.BottomLeftX.containsPoint(rightJoyPosition) ||
            Quadrant.TopLeftX.containsPoint(rightJoyPosition) ||
            Quadrant.TopRightX.containsPoint(rightJoyPosition) ||
            Quadrant.BottomRightX.containsPoint(rightJoyPosition)) {
            mearm.moveByAngle(MearmServo.Grip, getSpeed(Joystick.RightJoyX));
        } else {
            mearm.moveByAngle(MearmServo.Left, getSpeed(Joystick.RightJoyY));
        }
    })
})
